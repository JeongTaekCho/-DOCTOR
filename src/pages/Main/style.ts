import { styled } from 'styled-components';
import { RESPONSIVE } from '../../styles/responsive';

export const Wrap = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: -8%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(85%);
`;

export const Header = styled.h4`
  font-size: 9rem;
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 50%;
  padding-left: 5%;
  line-height: 130%;
  color: #fff;
  -webkit-text-stroke: 2px #fff;
  font-family: 'Noto Sans KR', sans-serif;

  @media ${RESPONSIVE.mobile} {
    font-size: 9rem;
    top: 15%;
  }
`;

export const AiDiv = styled.div`
  width: 100%;
`;

export const AiIntro = styled.div`
  text-align: center;
  width: 100%;
  padding-top: 15%;
`;

export const IntroHeader = styled.h4`
  font-weight: bolder;
  font-size: 4rem;
  line-height: 130%;
`;

export const AiPic = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 4%;
  padding-bottom: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media ${RESPONSIVE.mobile} {
    flex-direction: column;
    gap: 20rem;
  }
`;

export const Pic = styled.img`
  height: 40rem;
  width: 40rem;
  border-radius: 5px;
`;

export const SubDiv = styled.div`
  width: 100%;
  height: 50rem;
  background-color: rgb(245, 245, 245);
  padding-top: 5%;

  @media ${RESPONSIVE.mobile} {
    height: 80rem;
  }
`;

export const SubHeader = styled.h4`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  line-height: 130%;
`;

export const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3%;

  @media ${RESPONSIVE.mobile} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 55rem;
  height: 7.5rem;
  background-color: white;
  margin-right: 5rem;
  border-radius: 10px;
  box-shadow: lightgrey 2px 2px;
  display: flex;
  align-items: center;
  padding-left: 1%;

  @media ${RESPONSIVE.mobile} {
    margin-top: 5%;
    margin-right: 0;
  }
`;

export const ContentP = styled.p`
  width: 100%;
  font-size: 2rem;
  font-weight: bolder;
`;

export const ContentSpan1 = styled.span`
  color: #667085;
  font-size: 1.7rem;
  font-weight: 500;
  margin-left: 21%;
`;

export const ContentSpan2 = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  color: #667085;
  margin-left: 24%;
`;

export const ContentSpan3 = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  color: #667085;
  margin-left: 26%;
`;

export const ContentSpan4 = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  color: #667085;
  margin-left: 21%;
`;

export const EffectDiv = styled.div`
  width: 100%;
  height: 70rem;
  padding: 7% 0 15% 15%;
  line-height: 900%;

  @media ${RESPONSIVE.mobile} {
    text-align: center;
    padding: 0;
  }
`;

export const EffectHeader = styled.h4`
  font-size: 3rem;
  font-weight: bolder;
`;

export const EffectP = styled.p`
  font-size: 2.5rem;
  color: #667085;
  font-weight: bolder;
`;

export const EffectSpan = styled.span`
  margin-left: 1rem;
`;
