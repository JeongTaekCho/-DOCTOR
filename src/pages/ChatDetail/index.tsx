import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import * as S from './style';
import ChatBox from '../../components/chats/ChatBox';
import ProfileImg from '../../components/commons/ProfileImg';
import ChatExitModal from '../../components/chats/ChatExitModal';
import ReviewModal from '../../components/chats/ReviewModal';
import { io, Socket } from 'socket.io-client';
import { serverUrl } from '../../api';
import { useGetUsersQuery } from '../../hooks/query/useGetUsersQuery';
import { useGetChatConentsQuery } from '../../hooks/query/useGetChatContentsQuery';
import { useGetChatListQuery } from '../../hooks/query/useGetChatListQuery';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ROUTE } from '../../constants/routes/routeData';
import { tokenAtom } from '../../atoms/atoms';
import { ChatContent } from './types';
import { useAtomValue } from 'jotai';
import MyChat from '../../components/chats/MyChat';
import OtherChat from '../../components/chats/OtherChat';

const ChatDetail = () => {
  const auth = useAtomValue(tokenAtom);
  const navigate = useNavigate();

  const [isNav, setIsNav] = useState(true);
  const [isExitModal, setIsExitModal] = useState(false);
  const [isReviewModal, setIsReviewModal] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chatId, setChatId] = useState<number | null>(1);
  const [messages, setMessages] = useState<ChatContent[] | undefined>([]);
  const [message, setMessage] = useState('');

  const { data: userData } = useGetUsersQuery();
  const { data: chatContents, refetch } = useGetChatConentsQuery(chatId);
  const { data: chatList } = useGetChatListQuery();

  console.log(chatContents);

  const ChatUiRef = useRef<HTMLDivElement | null>(null);

  const isUser = userData?.user?.role === 'user';

  const scrollToBottom = () => {
    if (ChatUiRef.current) {
      ChatUiRef.current.scrollTop = ChatUiRef.current.scrollHeight;
    }
  };

  const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // if (message.trim() === '' || !chatId) return;
    // 서버에 메시지 전송
    socket?.emit('msgSend', { chatId: chatId, message });
    setMessages((prevMessages: any) => [
      ...(prevMessages?.length ? prevMessages : []),
      {
        message,
        email: userData?.user?.email,
        nickname: userData?.user?.nickname,
        img_path: userData?.user?.img_path
      }
    ]);
    setMessage('');
  };

  const handleAcceptList = () => {
    setIsNav(true);
  };
  const handlePenddingList = () => {
    setIsNav(false);
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

  const handleChatView = (chatId: number) => () => {
    setIsChatActive(true);
    setChatId(chatId);
  };

  const handleChatClose = () => {
    setIsChatActive(false);
  };

  useEffect(() => {
    refetch();
  }, [chatId]);

  useEffect(() => {
    if (!auth) {
      navigate(ROUTE.LOGIN.link);
      Swal.fire('로그인 후 이용이 가능합니다.');
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages(chatContents?.ChatContents);

    const socket = io(serverUrl, {
      transports: ['websocket'],
      auth: {
        token: auth
      }
    });
    setSocket(socket);

    socket.on('connect', () => {
      console.log('실시간 상담 접속 완료');
    });

    // 연결 종료 시 이벤트 처리
    socket.on('disconnect', () => {
      console.log('실시간 상담 종료');
    });

    // 메시지 수신 이벤트 처리
    socket.on('msgReceive', ({ email, content, nickname, img_path }) => {
      setMessages((prevMessages: any) => [
        ...(prevMessages?.length ? prevMessages : []),
        {
          message: content,
          email,
          nickname,
          img_path
        }
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [chatContents, chatId]);

  return (
    <S.Wrap>
      <S.Container>
        <S.ChatLeftBox className={isChatActive ? 'active' : ''}>
          <S.ChatListNav>
            <li className={isNav ? 'selected' : ''}>
              <button type="button" data-name="상담 목록" onClick={handleAcceptList}>
                상담 목록
              </button>
            </li>
            <li className={isNav ? '' : 'selected'}>
              <button type="button" data-name="신청 대기" onClick={handlePenddingList}>
                신청 대기
              </button>
            </li>
          </S.ChatListNav>
          {isNav ? (
            <S.ChatListBox>
              {chatList?.map(
                chatInfo =>
                  chatInfo.status !== 'pending' && (
                    <li key={chatInfo?.id}>
                      <S.ChatBtn onClick={handleChatView(chatInfo?.id)}>
                        <ChatBox chatInfo={chatInfo} userData={userData} />
                      </S.ChatBtn>
                    </li>
                  )
              )}
            </S.ChatListBox>
          ) : (
            <S.ChatListBox>
              {chatList?.map(
                chatInfo =>
                  chatInfo.status === 'pending' && (
                    <li key={chatInfo?.id}>
                      <S.ChatBtn onClick={handleChatView(chatInfo?.id)}>
                        <ChatBox chatInfo={chatInfo} userData={userData} />
                      </S.ChatBtn>
                    </li>
                  )
              )}
            </S.ChatListBox>
          )}
        </S.ChatLeftBox>
        <S.CharRightBox className={isChatActive ? 'active' : ''}>
          <S.ChatHead>
            <S.ProfileBox>
              <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
              <S.ProfileContent>
                <S.HeadProfileName>{isUser ? '수의사' : '나'}</S.HeadProfileName>
                {isUser || (
                  <S.ChatBtnBox>
                    <S.AcceptBtn>수락</S.AcceptBtn>
                    <S.RefuseBtn>거절</S.RefuseBtn>
                  </S.ChatBtnBox>
                )}
              </S.ProfileContent>
            </S.ProfileBox>
            <S.HeadBtnBox>
              <S.BackBtn type="button" onClick={handleChatClose}>
                목록
              </S.BackBtn>
              <S.ExitBtn type="button" onClick={handleChatExitBtn}>
                <img src="/images/chats/exit.png" alt="채팅방 나가기 아이콘" />
              </S.ExitBtn>
            </S.HeadBtnBox>
          </S.ChatHead>
          <S.ChatDetailBox ref={ChatUiRef}>
            {messages?.map((message: any) =>
              message.email === userData?.user?.email ||
              message.from_id === userData?.user?.email ? (
                <MyChat key={message.id} content={message.message} />
              ) : (
                <OtherChat
                  key={message.id}
                  name={chatContents?.nickname}
                  content={message.message}
                  profileImg={chatContents?.img_path || '/images/commons/kkam.png'}
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
