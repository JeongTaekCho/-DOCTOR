import React, { MouseEvent, useEffect, useState } from 'react';
import * as S from './style';
import ChatBox from '../../components/chats/ChatBox';
import ProfileImg from '../../components/commons/ProfileImg';
import ChatExitModal from '../../components/chats/ChatExitModal';
import ReviewModal from '../../components/chats/ReviewModal';
import io, { Socket } from 'socket.io-client';

const ChatDetail = () => {
  const [isNav, setIsNav] = useState('상담 목록');
  const [isExitModal, setIsExitModal] = useState(false);
  const [isReviewModal, setIsReviewModal] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chatId, setChatId] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // 백엔드 서버 주소로 소켓 연결
    const socket = io('http://localhost:8080/chat');
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
    socket.on('msgReceive', ({ email, content }: { email: string; content: string }) => {
      setMessages(prevMessages => [...prevMessages, `${email}: ${content}`]);
    });

    return () => {
      // 컴포넌트가 언마운트될 때 소켓 연결 종료
      socket.disconnect();
    };
  }, []);

  const onClickJoinChat = () => {
    // chatId에 입장 요청 보내기
    socket?.emit('join', chatId);
  };

  const onClickMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const onClickSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (message.trim() === '' || !chatId) return;
    // 서버에 메시지 전송
    socket?.emit('msgSend', { email: '사용자 이메일', chatId, content: message });
    setMessages(prevMessages => [...prevMessages, `나: ${message}`]);
    setMessage('');
  };

  const onClickNav = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const { name } = target.dataset;

    console.log(name);
    setIsNav(name || '');
  };

  const onClickCancelModal = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const { name } = target.dataset;

    if (name === 'exit') {
      setIsExitModal(false);
    } else if (name === 'review') {
      setIsReviewModal(false);
    }
  };

  const onClickChatExitBtn = () => {
    setIsExitModal(true);
  };

  const onClickChatExitBtnReview = () => {
    setIsExitModal(false);
    setIsReviewModal(true);
  };

  const toggleChat = () => {
    setIsChatActive(prev => !prev);
  };

  console.log(setChatId);
  console.log(messages);
  console.log(onClickJoinChat);
  console.log(setChatId);
  console.log(setChatId);

  return (
    <S.Wrap>
      <S.Container>
        <S.ChatLeftBox className={isChatActive ? 'active' : ''}>
          <S.ChatListNav>
            <li className={isNav === '상담 목록' ? 'selected' : ''}>
              <button type="button" data-name="상담 목록" onClick={onClickNav}>
                상담 목록
              </button>
            </li>
            <li className={isNav === '신청 대기' ? 'selected' : ''}>
              <button type="button" data-name="신청 대기" onClick={onClickNav}>
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
            <li>
              <S.ChatBtn onClick={toggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn onClick={toggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn onClick={toggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn onClick={toggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn onClick={toggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn onClick={toggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn onClick={toggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
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
              <S.ExitBtn type="button" onClick={onClickChatExitBtn}>
                <img src="/images/chats/exit.png" alt="채팅방 나가기 아이콘" />
              </S.ExitBtn>
            </S.HeadBtnBox>
          </S.ChatHead>
          <S.ChatDetailBox>
            <S.UserChatBox>
              <S.UserChat>
                <pre>
                  견종: 포메라니안 몸무게: 10kg 상세내용: 상담 부탁드립니다! 우리아이가 아파요
                  살려주세요
                </pre>
                <S.UserTriangle />
              </S.UserChat>
            </S.UserChatBox>
            <S.DoctorChatProfileBox>
              <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
              <p>닥터 깜장이</p>
              <S.DoctorChatBox>
                <S.DoctorChat>
                  <pre>
                    네 무엇을 도와드릴까요? 네 무엇을 도와드릴까요?네 무엇을 도와드릴까요?네 무엇을
                    도와드릴까요?네 무엇을 도와드릴까요?
                  </pre>
                  <S.DoctorTriangle />
                </S.DoctorChat>
              </S.DoctorChatBox>
            </S.DoctorChatProfileBox>
          </S.ChatDetailBox>
          <S.ChatForm>
            <S.FileTextarea>
              <S.FileInput id="file" type="file" />
              <S.FileLabel htmlFor="file">
                <img src="/images/chats/file.png" alt="" />
              </S.FileLabel>
              <S.Textarea placeholder="내용을 입력해주세요." onChange={onClickMessageChange} />
            </S.FileTextarea>
            <S.SendBtn type="button" onClick={onClickSubmit}>
              <img src="/images/chats/send.png" alt="보내기 아이콘" />
            </S.SendBtn>
          </S.ChatForm>
        </S.CharRightBox>
      </S.Container>
      {isExitModal && (
        <ChatExitModal
          onClickCancelModal={onClickCancelModal}
          onClickChatExitBtnReview={onClickChatExitBtnReview}
        />
      )}
      {isReviewModal && <ReviewModal onClickCancelModal={onClickCancelModal} />}
    </S.Wrap>
  );
};

export default ChatDetail;
