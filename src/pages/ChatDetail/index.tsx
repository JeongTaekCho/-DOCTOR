import React, { MouseEvent, useState } from 'react';
import * as S from './style';
import ChatBox from '../../components/chats/ChatBox';
import ProfileImg from '../../components/commons/ProfileImg';
import ChatExitModal from '../../components/chats/ChatExitModal';
import ReviewModal from '../../components/chats/ReviewModal';

const ChatDetail = () => {
  const [isNav, setIsNav] = useState('상담 목록');
  const [isExitModal, setIsExitModal] = useState(false);
  const [isReviewModal, setIsReviewModal] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);

  const handleClickNav = (e: MouseEvent<HTMLButtonElement>) => {
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

  return (
    <S.Wrap>
      <S.Container>
        <S.ChatLeftBox className={isChatActive ? 'active' : ''}>
          <S.ChatListNav>
            <li className={isNav === '상담 목록' ? 'selected' : ''}>
              <button type="button" data-name="상담 목록" onClick={handleClickNav}>
                상담 목록
              </button>
            </li>
            <li className={isNav === '신청 대기' ? 'selected' : ''}>
              <button type="button" data-name="신청 대기" onClick={handleClickNav}>
                신청 대기
              </button>
            </li>
          </S.ChatListNav>
          <S.ChatListBox>
            <li>
              <S.ChatBtn type="button" onClick={handletoggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn type="button" onClick={handletoggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn type="button" onClick={handletoggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn type="button" onClick={handletoggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn type="button" onClick={handletoggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn type="button" onClick={handletoggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn type="button" onClick={handletoggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn type="button" onClick={handletoggleChat}>
                <ChatBox />
              </S.ChatBtn>
            </li>
            <li>
              <S.ChatBtn type="button" onClick={handletoggleChat}>
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
              <S.Textarea placeholder="내용을 입력해주세요." />
            </S.FileTextarea>
            <S.SendBtn type="button">
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
