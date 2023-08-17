import { styled } from 'styled-components';
import { STYLE } from '../../../styles/commonStyle';
import { RESPONSIVE } from '../../../styles/responsive';

export const ChatList = styled.li`
  padding: 2rem;
  border-bottom: 1px solid #000;

  &:hover {
    background-color: #e7e7e7;
  }
`;

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ListBtnBox = styled.button`
  width: 10rem;
  padding: 0.8rem;
  border: 1px solid ${STYLE.mainColor};
  font-size: 1.5rem;
  font-weight: 400;
  color: ${STYLE.mainColor};
  background-color: #fff;
  border-radius: 6px;

  &:hover {
    background-color: ${STYLE.mainColor};
    color: #fff;
  }
`;

export const ListContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NameRateBox = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  p {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${STYLE.mainFontColor};
  }

  @media ${RESPONSIVE.mobile} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const ListDetail = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: left;
  width: 50rem;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${STYLE.subFontColor};
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.4;

  @media ${RESPONSIVE.mobile} {
    width: auto;
    max-width: 320px;
    -webkit-line-clamp: 1;
  }
`;

export const ChatFormBg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

export const ChatForm = styled.form`
  width: 50rem;
  padding: 2.5rem 3.5rem;
  background-color: #fff;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.6rem;
`;

export const FormTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${STYLE.mainColor};
  line-height: 1.4;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  height: 18rem;
  border-radius: 0.6rem;
  resize: none;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${STYLE.mainFontColor};
  line-height: 1.6;

  &:focus {
    outline: 1px solid ${STYLE.mainColor};
  }
`;

export const FormBtnBox = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.8rem;
`;

export const FormSubmitBtn = styled.button`
  width: 15rem;
  padding: 0.8rem;
  border: 1px solid ${STYLE.mainColor};
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  background-color: ${STYLE.mainColor};
  border-radius: 6px;
`;

export const FormCancelBtn = styled(FormSubmitBtn)`
  color: ${STYLE.mainColor};
  background-color: #fff;
`;
