import { styled } from 'styled-components';
import { STYLE } from '../../styles/commonStyle';
import { RESPONSIVE } from '../../styles/responsive';

export const Wrap = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 920px) {
    width: 600px;
  }

  @media ${RESPONSIVE.mobile} {
    width: 90%;
  }
`;

export const ChatLeftBox = styled.div`
  width: 320px;
  height: 600px;
  border-radius: 0.6rem;
  background-color: ${STYLE.mainColor};

  @media (max-width: 920px) {
    width: 100%;

    &.active {
      display: none;
    }
  }
`;

export const CharRightBox = styled.div`
  width: 540px;
  height: 600px;
  border-radius: 0.6rem;
  background-color: #fff;

  @media (max-width: 920px) {
    display: none;

    &.active {
      display: block;
    }
  }
`;

export const ChatListNav = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    width: 50%;
    position: relative;

    &.selected {
      &::after {
        display: block;
        content: '';
        width: 100%;
        height: 0.5rem;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

    button {
      display: block;
      width: 100%;
      padding: 1.6rem 0;
      font-size: 1.8rem;
      font-weight: 400;
      color: #fff;
    }
  }
`;

export const ChatListBox = styled.ul`
  width: 100%;
  height: 89%;
  padding: 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    width: 100%;

    button {
      display: block;
      width: 100%;
    }
  }
`;

export const ChatBtn = styled.button``;

export const ChatHead = styled.div`
  width: 100%;
  padding: 1.8rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

export const HeadProfileName = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${STYLE.mainFontColor};
`;

export const ExitBtn = styled.button`
  width: 4rem;

  img {
    width: 100%;
  }
`;

export const ChatDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
  height: 420px;
  background-color: #fff;
  padding: 4rem 1.8rem 0 1.8rem;
`;

export const UserChatBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const UserChat = styled.div`
  max-width: 60%;
  padding: 1rem;
  position: relative;
  background-color: ${STYLE.mainColor};
  border-radius: 0.6rem;

  pre {
    font-size: 1.3rem;
    font-weight: 400;
    color: #fff;
    white-space: pre-wrap;
    line-height: 1.4;
    word-break: break-all;
  }
`;

export const UserTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
  border-bottom: 1.2rem solid ${STYLE.mainColor};
  position: absolute;
  top: 0.5rem;
  right: -0.8rem;
  transform: rotate(65deg);
`;

export const DoctorChatProfileBox = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  p {
    font-size: 1.3rem;
    font-weight: 400;
    color: #000;
  }
`;

export const DoctorChatBox = styled.div`
  max-width: 60%;
  display: flex;
  position: absolute;
  top: 4.3rem;
  left: 6.8rem;
`;

export const DoctorChat = styled(UserChat)`
  max-width: none;
  width: 100%;
`;

export const DoctorTriangle = styled(UserTriangle)`
  top: 0.5rem;
  left: -0.8rem;
  transform: rotate(-65deg);
`;

export const ChatForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid #000;
  border-radius: 0.6rem;
  padding: 1rem;
`;

export const FileTextarea = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 90%;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  width: 3.2rem;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const SendBtn = styled.button`
  width: 3rem;

  img {
    width: 100%;
  }
`;

export const HeadBtnBox = styled.div`
  @media (max-width: 920px) {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const BackBtn = styled.button`
  display: none;

  @media (max-width: 920px) {
    display: block;
  }
`;
