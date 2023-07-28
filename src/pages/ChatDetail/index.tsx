import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import * as S from './style';
import ChatBox from '../../components/chats/ChatBox';
import ProfileImg from '../../components/commons/ProfileImg';
import ChatExitModal from '../../components/chats/ChatExitModal';
import ReviewModal from '../../components/chats/ReviewModal';
import { io, Socket } from 'socket.io-client';
import UserChat from '../../components/chats/UserChat';
import DoctorChat from '../../components/chats/DoctorChat';
import { serverUrl } from '../../api';
import { useGetUsersQuery } from '../../hooks/query/useGetUsersQuery';
import uuid from 'react-uuid';
import { useGetChatConentsQuery } from '../../hooks/query/useGetChatContentsQuery';
import { useGetChatListQuery } from '../../hooks/query/useGetChatListQuery';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ROUTE } from '../../constants/routes/routeData';
import { useAuth } from '../../atoms/atoms';

const ChatDetail = () => {
  const auth = useAuth();

  const [isNav, setIsNav] = useState('상담 목록');
  const [isExitModal, setIsExitModal] = useState(false);
  const [isReviewModal, setIsReviewModal] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chatId, setChatId] = useState<string>('');
  const [messages, setMessages] = useState<object[]>([]);
  const [message, setMessage] = useState('');

  const { data: userData } = useGetUsersQuery();
  const { data: chatContents, refetch } = useGetChatConentsQuery(1);
  const { data: chatList } = useGetChatListQuery();

  const ChatUiRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  console.log(refetch);
  console.log(chatList);
  console.log(chatContents);

  useEffect(() => {
    if (!auth) {
      navigate(ROUTE.LOGIN.link);
      Swal.fire('로그인 후 이용이 가능합니다.');
    }
  }, []);

  useEffect(() => {
    // 채팅 메시지가 업데이트되거나 새로운 메시지가 추가될 때마다 스크롤을 맨 아래로 이동
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (ChatUiRef.current) {
      ChatUiRef.current.scrollTop = ChatUiRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    setMessages(chatContents?.data.ChatContents);

    // 백엔드 서버 주소로 소켓 연결
    const socket = io(serverUrl, {
      transports: ['websocket'],
      auth: {
        token: auth
      }
    });
    setSocket(socket);

    // 연결될 때 이벤트 처리
    socket.on('connect', () => {
      console.log('소켓 연결됨');
    });

    // 연결 종료 시 이벤트 처리
    socket.on('disconnect', () => {
      console.log('소켓 연결 종료');
    });

    // 메시지 수신 이벤트 처리
    socket.on('msgReceive', ({ email, content, nickname, img_path }) => {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          message: content,
          email,
          nickname,
          img_path
        }
      ]);
    });

    return () => {
      // 컴포넌트가 언마운트될 때 소켓 연결 종료
      socket.disconnect();
    };
  }, [chatContents]);

  const handleJoinChat = () => {
    // chatId에 입장 요청 보내기
    socket?.emit('join', chatId);
  };

  const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // if (message.trim() === '' || !chatId) return;
    // 서버에 메시지 전송
    socket?.emit('msgSend', { chatId: 1, message });
    setMessages(prevMessages => [
      ...prevMessages,
      {
        message,
        email: userData?.data?.user?.email,
        nickname: userData?.data?.user?.nickname,
        img_path: userData?.data?.user?.img_path
      }
    ]);
    setMessage('');
  };

  const handleNavClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const { name } = target.dataset;

    setIsNav(name || '');
  };

  const handleCancelModal = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const { name } = target.dataset;

    if (name === 'exit') {
      setIsExitModal(false);
    } else if (name === 'review') {
      setIsReviewModal(false);
    }
  };

  const handleChatExitBtn = () => {
    setIsExitModal(true);
  };

  const handleChatExitBtnReview = () => {
    setIsExitModal(false);
    setIsReviewModal(true);
  };

  const handletoggleChat = () => {
    setIsChatActive(prev => !prev);
  };

  console.log(setChatId);
  console.log(handleJoinChat);

  return (
    <S.Wrap>
      <S.Container>
        <S.ChatLeftBox className={isChatActive ? 'active' : ''}>
          <S.ChatListNav>
            <li className={isNav === '상담 목록' ? 'selected' : ''}>
              <button type="button" data-name="상담 목록" onClick={handleNavClick}>
                상담 목록
              </button>
            </li>
            <li className={isNav === '신청 대기' ? 'selected' : ''}>
              <button type="button" data-name="신청 대기" onClick={handleNavClick}>
                신청 대기
              </button>
            </li>
          </S.ChatListNav>
          <S.ChatListBox>
            <li>
              <S.ChatBtn onClick={handletoggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
          </S.ChatListBox>
        </S.ChatLeftBox>
        <S.CharRightBox className={isChatActive ? 'active' : ''}>
          <S.ChatHead>
            <S.ProfileBox>
              <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
              <S.HeadProfileName>깜장이 수의사 [깜장 동물병원]</S.HeadProfileName>
            </S.ProfileBox>
            <S.HeadBtnBox>
              <S.BackBtn type="button" onClick={handletoggleChat}>
                목록
              </S.BackBtn>
              <S.ExitBtn type="button" onClick={handleChatExitBtn}>
                <img src="/images/chats/exit.png" alt="채팅방 나가기 아이콘" />
              </S.ExitBtn>
            </S.HeadBtnBox>
          </S.ChatHead>
          <S.ChatDetailBox ref={ChatUiRef}>
            {messages?.map((message: any) =>
              message.email === userData?.data?.user?.email ||
              message.from_id === userData?.data?.user?.email ? (
                <UserChat key={uuid()} content={message.message} />
              ) : (
                <DoctorChat
                  key={uuid()}
                  name={chatContents?.data?.nickname}
                  content={message.message}
                  profileImg={chatContents?.data?.img_path || '/images/commons/kkam.png'}
                />
              )
            )}
          </S.ChatDetailBox>
          <S.ChatForm>
            <S.FileTextarea>
              <S.FileInput id="file" type="file" />
              <S.FileLabel htmlFor="file">
                <img src="/images/chats/file.png" alt="" />
              </S.FileLabel>
              <S.Textarea
                placeholder="내용을 입력해주세요."
                onChange={handleChangeMessage}
                value={message}
              />
            </S.FileTextarea>
            <S.SendBtn type="button" onClick={handleSubmit}>
              <img src="/images/chats/send.png" alt="보내기 아이콘" />
            </S.SendBtn>
          </S.ChatForm>
        </S.CharRightBox>
      </S.Container>
      {isExitModal && (
        <ChatExitModal
          handleCancelModal={handleCancelModal}
          handleChatExitBtnReview={handleChatExitBtnReview}
        />
      )}
      {isReviewModal && <ReviewModal handleCancelModal={handleCancelModal} />}
    </S.Wrap>
  );
};

export default ChatDetail;
