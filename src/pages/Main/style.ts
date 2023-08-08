import { styled } from 'styled-components';
import { RESPONSIVE } from '../../styles/responsive';
import { Link } from 'react-router-dom';
import { STYLE } from '../../styles/commonStyle';

interface UrlProps {
  url: string;
}

export const Wrap = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: -9.5rem;
  position: relative;
  overflow: hidden;

  .slick-dots {
    bottom: 10px;

    li {
      button {
        &::before {
          font-size: 1.3rem;
          color: #fff;
        }
      }
    }
  }
`;

export const ImgBox = styled.div<UrlProps>`
  width: 100%;
  height: 90vh;
  background-image: url(${({ url }) => url});
  background-size: cover;
  filter: brightness(85%);

  @media ${RESPONSIVE.mobile} {
    height: 40rem;
    background-position: center;
  }
`;

export const Header = styled.h4`
  font-size: 9rem;
  color: white;
  font-weight: 500;
  bottom: 20%;
  padding-left: 5%;
  line-height: 1.3;
  color: #fff;
  -webkit-text-stroke: 0.2rem;
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;

  @media ${RESPONSIVE.tablet} {
    font-size: 7rem;
    bottom: 18%;
  }
  @media ${RESPONSIVE.mobile} {
    font-size: 5rem;
    bottom: 10%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media ${RESPONSIVE.mobile} {
    flex-direction: column;
    gap: 20rem;
  }
  @media ${RESPONSIVE.tablet} {
    flex-direction: column;
    gap: 10rem;
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
    height: 70rem;
  }

  @media ${RESPONSIVE.tablet} {
    height: 70rem;
  }
`;

export const SubHeader = styled.h4`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.3;
`;

export const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3%;

  @media ${RESPONSIVE.mobile} {
    flex-direction: column;
    padding: 0;
  }
  @media ${RESPONSIVE.tablet} {
    flex-direction: column;
    padding: 0;
  }
`;

export const Content = styled(Link)`
  width: 55rem;
  height: 7.5rem;
  background-color: white;
  margin-right: 5rem;
  border-radius: 10px;
  box-shadow: lightgrey 2px 2px;
  display: flex;
  align-items: center;
  padding-left: 1%;

  @media ${RESPONSIVE.pc} {
    &:hover {
      transform: scale(1.05);
      transition: all 0.2s;
    }
  }

  @media ${RESPONSIVE.mobile} {
    margin-top: 5%;
    margin-right: 0;
  }

  @media ${RESPONSIVE.tablet} {
    margin-top: 3%;
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
  position: relative;
  z-index: 1;

  @media ${RESPONSIVE.mobile} {
    text-align: center;
    line-height: 800%;
  }

  @media ${RESPONSIVE.tablet} {
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

export const AiLinkBtn = styled(Link)`
  display: block;
  width: 40rem;
  padding: 2rem;
  background-color: ${STYLE.mainColor};
  border-radius: 0.6rem;
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
  margin: 8rem auto 12rem;
  text-align: center;
  position: relative;
  z-index: 5000;

  @media ${RESPONSIVE.pc} {
    &:hover {
      transform: translateY(0.5rem);
      transition: all 0.2s;
    }
  }
`;
