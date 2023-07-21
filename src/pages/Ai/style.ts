import { styled } from 'styled-components';
import { STYLE } from '../../styles/commonStyle';
import { RESPONSIVE } from '../../styles/responsive';

export const Wrap = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  text-align: center;
  color: ${STYLE.mainColor};
`;

export const Header = styled.h4`
  font-weight: bolder;
  font-size: 3.2rem;
`;

export const P = styled.p`
  margin-top: 2%;
  font-size: 2.5rem;
`;

export const Upload = styled.div`
  width: 100%;
  height: 43.9rem;
  text-align: center;
  padding-top: 2rem;

  @media ${RESPONSIVE.mobile} {
    height: 30rem;
  }
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
  width: 43.5rem;
  height: 43.5rem;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  padding: 0;
  margin: -0.1rem;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const LabelHeader = styled.h4`
  padding-top: 7rem;
`;

export const LabelText = styled.p`
  font-size: 3rem;
  font-weight: bolder;
  margin-top: 5rem;
`;

export const Example = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 5%;

  @media ${RESPONSIVE.mobile} {
    margin-top: 40%;
  }
`;

export const Button = styled.button`
  background-color: #ae9aff;
  color: white;
  height: 9.8rem;
  width: 36rem;
  font-size: 3.2rem;
  border-radius: 1rem;
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const Card = styled.div`
  width: 64.9rem;
  height: 60.9rem;
  z-index: 999999;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;

  @media ${RESPONSIVE.mobile} {
    top: 40%;
  }
`;

export const Close = styled.div`
  cursor: pointer;
  height: 3rem;
  padding: 1rem;
  text-align: right;
`;

export const Correct = styled.div`
  text-align: center;
  padding-top: 3rem;
`;

export const CoExample = styled.h4`
  font-size: 2.5rem;
  font-weight: bolder;
`;

export const CoExplain = styled.p`
  font-size: 2rem;
  padding-top: 1rem;
`;

export const CoImage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30rem;
`;

export const CorrectImg = styled.img`
  width: 25%;
  margin-right: 1rem;
`;

export const WrongImg = styled.img`
  width: 25%;
  height: 15rem;
  margin-right: 1rem;
`;
export const Label2 = styled.label``;

export const Input = styled.input`
  display: none;
`;

export const Skin = styled.h4`
  font-size: 4rem;
  font-weight: bolder;
  margin-top: 2rem;
`;

export const SkinSpan = styled.span`
  color: red;
`;

export const SkinButton = styled.button`
  background-color: #ae9aff;
  color: white;
  height: 6rem;
  width: 18rem;
  font-size: 2.5rem;
  border-radius: 1rem;
  font-weight: bolder;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  display: block;
  margin: auto;
  margin-top: 2rem;

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
