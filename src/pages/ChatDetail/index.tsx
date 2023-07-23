import React, { MouseEvent, useEffect, useState } from 'react';
import * as S from './style';
import ChatBox from '../../components/chats/ChatBox';
import ProfileImg from '../../components/commons/ProfileImg';
import ChatExitModal from '../../components/chats/ChatExitModal';
import ReviewModal from '../../components/chats/ReviewModal';
import { io, Socket } from 'socket.io-client';
import UserChat from '../../components/chats/UserChat';
import DoctorChat from '../../components/chats/DoctorChat';

const ChatDetail = () => {
  const [isNav, setIsNav] = useState('상담 목록');
  const [isExitModal, setIsExitModal] = useState(false);
  const [isReviewModal, setIsReviewModal] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chatId, setChatId] = useState<string>('');
  const [messages, setMessages] = useState<object[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 백엔드 서버 주소로 소켓 연결
    const socket = io('http://localhost:8080', {
      transports: ['websocket']
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
    socket.on('msgReceive', ({ email, content }) => {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          email: email,
          message: content
        }
      ]);
    });

    return () => {
      // 컴포넌트가 언마운트될 때 소켓 연결 종료
      socket.disconnect();
    };
  }, []);

  const handleJoinChat = () => {
    // chatId에 입장 요청 보내기
    socket?.emit('join', chatId);
  };

  const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // if (message.trim() === '' || !chatId) return;
    // 서버에 메시지 전송
    socket?.emit('msgSend', { email: 'cjt3591@gmail.com', chatId, content: message });
    setMessages(prevMessages => [
      ...prevMessages,
      {
        message,
        유저정보: '내 유저정보 객체'
      }
    ]);
    setMessage('');
  };

  const handleNavClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const { name } = target.dataset;

    console.log(name);
    setIsNav(name || '');
  };

  const handleCancelModalClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const { name } = target.dataset;

    if (name === 'exit') {
      setIsExitModal(false);
    } else if (name === 'review') {
      setIsReviewModal(false);
    }
  };

  const handleChatExitBtnClick = () => {
    setIsExitModal(true);
  };

  const handleChatExitReviewBtnClick = () => {
    setIsExitModal(false);
    setIsReviewModal(true);
  };

  const toggleChat = () => {
    setIsChatActive(prev => !prev);
  };

  console.log(setChatId);
  console.log(messages);
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
              <S.ChatBtn onClick={toggleChat}>
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
              <S.BackBtn type="button" onClick={toggleChat}>
                목록
              </S.BackBtn>
              <S.ExitBtn type="button" onClick={handleChatExitBtnClick}>
                <img src="/images/chats/exit.png" alt="채팅방 나가기 아이콘" />
              </S.ExitBtn>
            </S.HeadBtnBox>
          </S.ChatHead>
          <S.ChatDetailBox>
            <UserChat content="견종: 포메라니안 몸무게: 10kg 상세내용: 상담 부탁드립니다! 우리아이가 아파요 살려주세요" />
            <DoctorChat
              name="깜장이 수의사"
              content="채팅이 입력되는 부분"
              profileImg="/images/commons/kkam.png"
            />
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
          handleCancelModalClick={handleCancelModalClick}
          handleChatExitReviewBtnClick={handleChatExitReviewBtnClick}
        />
      )}
      {isReviewModal && <ReviewModal handleCancelModalClick={handleCancelModalClick} />}
    </S.Wrap>
  );
};

export default ChatDetail;
