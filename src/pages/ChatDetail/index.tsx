import React, { MouseEvent, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import ChatBox from '../../components/chats/ChatBox';
import ProfileImg from '../../components/commons/ProfileImg';
import ChatExitModal from '../../components/chats/ChatExitModal';
import ReviewModal from '../../components/chats/ReviewModal';
import { io, Socket } from 'socket.io-client';
import { imgUrl, serverUrl } from '../../api';
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
import { useChatChangeStatusMutation } from '../../hooks/query/useChatChangeStatusMutation';
import { useChatExitMutation } from '../../hooks/query/useChatExitMutation';
import { useChatReviewMutation } from '../../hooks/query/useChatReviewMutation';
import { HiArrowUturnLeft, HiMiniArrowRightOnRectangle } from 'react-icons/hi2';

const ChatDetail = () => {
  const auth = useAtomValue(tokenAtom);
  const navigate = useNavigate();

  const [isNav, setIsNav] = useState(true);
  const [isExitModal, setIsExitModal] = useState(false);
  const [isReviewModal, setIsReviewModal] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chatId, setChatId] = useState<number | undefined>(9999);
  const [messages, setMessages] = useState<ChatContent[] | undefined>([]);
  const [message, setMessage] = useState('');
  const [grade, setGrade] = useState(3);

  const { data: userData } = useGetUsersQuery();
  const { data: chatContents, refetch: chatContentRefetch } = useGetChatConentsQuery(chatId);
  const { data: chatList, refetch: chatListRefetch } = useGetChatListQuery();

  const { mutate: chatChangeMutate } = useChatChangeStatusMutation();
  const { mutate: chatExitMutate } = useChatExitMutation(chatId);
  const { mutate: chatReviewMutate } = useChatReviewMutation();

  const ChatUiRef = useRef<HTMLDivElement | null>(null);

  const isUser = userData?.user?.role === 'user';
  const acceptedList = chatList?.filter(chat => chat?.status !== 'pending');
  const waitList = chatList?.filter(chat => chat?.status === 'pending');

  const acceptedListLength = acceptedList?.length ?? 0;
  const waitListLength = waitList?.length ?? 0;
  const chatListLength = chatList?.length ?? 0;

  const scrollToBottom = () => {
    if (ChatUiRef.current) {
      ChatUiRef.current.scrollTop = ChatUiRef.current.scrollHeight;
    }
  };

  const handleChangeMessage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }, []);

  const handleAcceptList = () => {
    setIsNav(true);
  };
  const handlePenddingList = () => {
    setIsNav(false);
  };

  const handleChatExitBtn = () => {
    setIsExitModal(true);
  };

  const handleChatView = (chatId: number) => () => {
    setIsChatActive(true);
    setChatId(chatId);
    setMessage('');
  };

  const handleChatClose = () => {
    setIsChatActive(false);
  };

  const handleCancelModal = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const { name } = target.dataset;

    if (name === 'exit') {
      setIsExitModal(false);
    } else if (name === 'review') {
      setIsReviewModal(false);
      chatListRefetch();
    }
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!message) {
      Swal.fire('메세지를 입력해주세요.');
    } else {
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
    }
  };

  const handleChatExitBtnReview = () => {
    setIsExitModal(false);

    chatExitMutate(undefined, {
      onSuccess: () => {
        setIsReviewModal(true);
        setIsChatActive(false);
        if (!isUser || chatContents?.checkStatus?.status !== 'accepted') {
          chatListRefetch();
        }
      }
    });
  };

  const handleChatStatusChange = (status: string) => () => {
    chatChangeMutate(
      {
        id: chatId,
        status: status
      },
      {
        onSuccess: () => {
          if (status === 'accepted') {
            Swal.fire('수락 되었습니다.');
          } else {
            Swal.fire('거절 되었습니다.');
          }
          chatListRefetch();
          chatContentRefetch();
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  const handleChatComplete = () => {
    chatChangeMutate(
      {
        id: chatId,
        status: 'completed'
      },
      {
        onSuccess: () => {
          Swal.fire('채팅이 종료되었습니다.');
          chatListRefetch();
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  const handleChangeGrade = useCallback((_event: SyntheticEvent<Element, Event>, value: any) => {
    setGrade(value);
  }, []);

  const handleChatReview = () => {
    chatReviewMutate(
      {
        id: chatId,
        grade
      },
      {
        onSuccess: () => {
          Swal.fire('만족도 조사에 응해주셔서 감사합니다.');
          setIsReviewModal(false);
          chatListRefetch();
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  useEffect(() => {
    setChatId(
      chatList?.filter(chat => chat.status === 'accepted')[0]?.id ||
        chatList?.filter(chat => chat.status === 'pending')[0]?.id
    );
  }, [chatList]);

  useEffect(() => {
    chatContentRefetch();
  }, [chatId]);

  useEffect(() => {
    if (!auth) {
      navigate(ROUTE.LOGIN.link);
      Swal.fire('로그인 후 이용이 가능합니다.');
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, chatId, isChatActive]);

  useEffect(() => {
    setMessages(chatContents?.ChatContents);

    const socket = io(serverUrl, {
      transports: ['websocket'],
      auth: {
        token: auth
      }
    });
    setSocket(socket);

    socket.on('connect', () => {});

    // 연결 종료 시 이벤트 처리
    socket.on('disconnect', () => {});

    socket?.emit('join', chatId);

    // 메시지 수신 이벤트 처리
    socket.on('msgReceive', msg => {
      setMessages((prevMessages: any) => [
        ...(prevMessages?.length ? prevMessages : []),
        {
          message: msg.message,
          email: msg.email,
          nickname: msg.nickname,
          img_path: msg.img_path
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
                {isUser ? '승인' : '신청'} 대기
              </button>
            </li>
          </S.ChatListNav>
          {isNav ? (
            <S.ChatListBox>
              {acceptedListLength > 0 ? (
                chatList?.map(
                  chatInfo =>
                    (chatInfo.status === 'accepted' || chatInfo.status === 'completed') && (
                      <li key={chatInfo?.id}>
                        <S.ChatBtn onClick={handleChatView(chatInfo?.id)}>
                          <ChatBox
                            chatInfo={chatInfo}
                            userData={userData}
                            status={chatInfo.status}
                          />
                        </S.ChatBtn>
                      </li>
                    )
                )
              ) : (
                <S.ErrorMent>채팅 목록이 존재하지 않습니다.</S.ErrorMent>
              )}
            </S.ChatListBox>
          ) : (
            <S.ChatListBox>
              {waitListLength > 0 ? (
                chatList?.map(
                  chatInfo =>
                    chatInfo.status === 'pending' && (
                      <li key={chatInfo?.id}>
                        <S.ChatBtn onClick={handleChatView(chatInfo?.id)}>
                          <ChatBox chatInfo={chatInfo} userData={userData} />
                        </S.ChatBtn>
                      </li>
                    )
                )
              ) : (
                <S.ErrorMent>{`${
                  isUser ? '승인' : '신청'
                } 대기 목록이 존재하지 않습니다.`}</S.ErrorMent>
              )}
            </S.ChatListBox>
          )}
        </S.ChatLeftBox>
        {chatListLength ? (
          <S.CharRightBox className={isChatActive ? 'active' : ''}>
            <S.ChatHead>
              <S.ProfileBox>
                <ProfileImg
                  w="6rem"
                  h="6rem"
                  src={
                    isUser
                      ? `${imgUrl}${chatContents?.checkStatus?.users_chat_rooms_user_vet_emailTousers?.img_path}`
                      : `${imgUrl}${chatContents?.checkStatus?.users_chat_rooms_user_emailTousers?.img_path}`
                  }
                />
                <S.ProfileContent>
                  <S.HeadProfileName>
                    {isUser
                      ? chatContents?.checkStatus?.users_chat_rooms_user_vet_emailTousers?.nickname
                      : chatContents?.checkStatus?.users_chat_rooms_user_emailTousers?.nickname}
                  </S.HeadProfileName>
                  {!isUser && chatContents?.checkStatus?.status === 'pending' && (
                    <S.ChatBtnBox>
                      <S.AcceptBtn onClick={handleChatStatusChange('accepted')}>수락</S.AcceptBtn>
                      <S.RefuseBtn onClick={handleChatStatusChange('rejected')}>거절</S.RefuseBtn>
                    </S.ChatBtnBox>
                  )}
                  {!isUser && chatContents?.checkStatus?.status === 'accepted' && (
                    <S.ChatBtnBox>
                      <S.RefuseBtn onClick={handleChatComplete}>채팅종료</S.RefuseBtn>
                    </S.ChatBtnBox>
                  )}
                </S.ProfileContent>
              </S.ProfileBox>
              <S.HeadBtnBox>
                <S.BackBtn type="button" onClick={handleChatClose}>
                  <HiArrowUturnLeft />
                </S.BackBtn>
                <S.ExitBtn type="button" onClick={handleChatExitBtn}>
                  <HiMiniArrowRightOnRectangle />
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
                    name={
                      isUser
                        ? chatContents?.checkStatus?.users_chat_rooms_user_vet_emailTousers
                            ?.nickname
                        : chatContents?.checkStatus?.users_chat_rooms_user_emailTousers?.nickname
                    }
                    content={message.message}
                    profileImg={
                      isUser
                        ? chatContents?.checkStatus?.users_chat_rooms_user_vet_emailTousers
                            ?.img_path
                        : chatContents?.checkStatus?.users_chat_rooms_user_emailTousers?.img_path
                    }
                  />
                )
              )}
            </S.ChatDetailBox>
            <S.ChatForm>
              <S.FileTextarea>
                <S.ChatInput
                  placeholder={
                    chatContents?.checkStatus?.status === 'pending'
                      ? '채팅 수락 후 서비스 이용이 가능합니다.'
                      : chatContents?.checkStatus?.status === 'completed'
                      ? '종료된 채팅방입니다.'
                      : '내용을 입력해주세요.'
                  }
                  onChange={handleChangeMessage}
                  value={message}
                  disabled={chatContents?.checkStatus?.status !== 'accepted'}
                />
              </S.FileTextarea>
              <S.SendBtn
                type="submit"
                onClick={handleSubmit}
                disabled={chatContents?.checkStatus?.status !== 'accepted'}
              >
                <img src="/images/chats/send.png" alt="보내기 아이콘" />
              </S.SendBtn>
            </S.ChatForm>
          </S.CharRightBox>
        ) : (
          <S.CharRightBox className={isChatActive ? 'active' : ''}>
            <S.ChatErrorMent>상담중인 채팅방이 존재하지 않습니다.</S.ChatErrorMent>
          </S.CharRightBox>
        )}
      </S.Container>
      {isExitModal && (
        <ChatExitModal
          handleCancelModal={handleCancelModal}
          handleChatExitBtnReview={handleChatExitBtnReview}
        />
      )}
      {isReviewModal && isUser && chatContents?.checkStatus?.status === 'accepted' && (
        <ReviewModal
          handleCancelModal={handleCancelModal}
          handleChangeGrade={handleChangeGrade}
          handleChatReview={handleChatReview}
        />
      )}
    </S.Wrap>
  );
};

export default ChatDetail;
