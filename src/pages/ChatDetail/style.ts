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
  width: 80%;
  margin: 0 auto;
  height: 750px;
  border-radius: 0.6rem;
  background-color: ${STYLE.mainColor};

  &.active {
    display: none;
  }
  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const CharRightBox = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 650px;
  border-radius: 0.6rem;
  background-color: #fff;

  display: none;

  &.active {
    display: block;
  }
  @media (max-width: 920px) {
    width: 100%;
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

export const ChatBtn = styled.div`
  cursor: pointer;
`;

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
  height: 500px;
  background-color: #fff;
  padding: 4rem 1.8rem 0 1.8rem;
  overflow-y: auto;
`;

export const ChatForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
`;

export const ChatInput = styled.input`
  width: 100%;
  resize: none;
  border: 1px solid #000;
  border-radius: 0.6rem;
  padding: 1rem;

  &:disabled {
    background-color: #eee;
  }
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
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const BackBtn = styled.button``;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChatBtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const AcceptBtn = styled.button`
  padding: 0.5rem 1.4rem;
  border-radius: 0.4rem;
  background-color: ${STYLE.mainColor};
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  border: 1px solid ${STYLE.mainColor};
`;

export const RefuseBtn = styled(AcceptBtn)`
  background-color: #fff;
  color: ${STYLE.mainColor};
`;

export const ErrorMent = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-top: 1.5rem;
`;

export const ChatErrorMent = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${STYLE.mainColor};
  margin-top: 2rem;
  text-align: center;
`;
