import { styled } from 'styled-components';
import { STYLE } from '../../styles/commonStyle';

export const Wrap = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  text-align: center;
  color: ${STYLE.mainColor};
`;

export const Header = styled.h4`
  font-weight: bolder;
  font-size: 32px;
`;

export const P = styled.p`
  margin-top: 2%;
  font-size: 25px;
`;

export const Upload = styled.div`
  width: 100%;
  height: 439px;
  text-align: center;
  padding-top: 20px;
`;

export const Label = styled.label`
  display: inline-block;
  padding: 0.5em 0.75em;
  color: #999;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #d9d9d9;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 1em;
  cursor: pointer;
  width: 435px;
  height: 435px;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const LabelHeader = styled.h4`
  padding-top: 70px;
`;

export const LabelText = styled.p`
  font-size: 30px;
  font-weight: bolder;
  margin-top: 50px;
`;

export const Example = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 5%;
`;

export const Button = styled.button`
  background-color: #ae9aff;
  color: white;
  height: 98px;
  width: 360px;
  font-size: 32px;
  border-radius: 10px;
  font-weight: bolder;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${STYLE.subColor};
    box-shadow: #ae9aff;
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const Card = styled.div`
  width: 649px;
  height: 609px;
  z-index: 999;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
`;

export const Close = styled.div`
  cursor: pointer;
  height: 30px;
  padding: 10px;
  text-align: right;
`;

export const Correct = styled.div`
  text-align: center;
  padding-top: 30px;
`;

export const CoExample = styled.h4`
  font-size: 25px;
  font-weight: bolder;
`;

export const CoExplain = styled.p`
  font-size: 20px;
  padding-top: 10px;
`;

export const CoImage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

export const CorrectImg = styled.img`
  width: 25%;
  margin-right: 10px;
`;

export const WrongImg = styled.img`
  width: 25%;
  height: 150px;
  margin-right: 10px;
`;
