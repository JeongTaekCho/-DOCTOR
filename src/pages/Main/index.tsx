import React from 'react';
import * as S from './style';
import { BiSolidChevronsRight } from 'react-icons/bi';
import useScrollFadeIn from '../../hooks/util/useScrollFadeIn';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ROUTE } from '../../constants/routes/routeData';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnFocus: false,
  pauseOnHover: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const MainPage = () => {
  const animatedAiDiv = useScrollFadeIn('down', 1, 0);
  const animatedEffectDiv = useScrollFadeIn('down', 1, 0);

  return (
    <S.Wrap>
      <S.Container>
        <Slider {...settings}>
          <S.ImgBox url="/images/commons/slide01.jpg"></S.ImgBox>
          <S.ImgBox url="/images/commons/slide02.jpg"></S.ImgBox>
          <S.ImgBox url="/images/commons/slide03.jpg"></S.ImgBox>
        </Slider>
        <S.Header>
          반려동물
          <br />
          피부질환 자가진단
          <br />
          서비스
        </S.Header>
      </S.Container>
      <S.AiDiv {...animatedAiDiv}>
        <S.AiIntro>
          <S.IntroHeader>
            무심코 지나치게 되는 아이의 피부질환,
            <br />
            AI 검사를 통해
            <br />
            1분만에 체크해보세요
          </S.IntroHeader>
        </S.AiIntro>
        <S.AiPic>
          <S.ExamplePic src="/images/commons/example.png"></S.ExamplePic>
          <S.Pic src="/images/gif/main01.gif"></S.Pic>
        </S.AiPic>
        <S.AiLinkBtn to={ROUTE.AI.link}>AI 자가진단 하러가기</S.AiLinkBtn>
      </S.AiDiv>
      <S.SubDiv>
        <S.SubHeader>
          전문의와의 상담과 정보공유까지
          <br />
          다양한 콘텐츠 제공
        </S.SubHeader>
        <S.ContentDiv>
          <S.Content to={ROUTE.AI.link}>
            <S.ContentP>
              AI 자가진단<S.ContentSpan1>AI를 통해 실시간으로 증상 파악</S.ContentSpan1>
            </S.ContentP>
          </S.Content>
          <S.Content to={ROUTE.HOSPITAL.link}>
            <S.ContentP>
              병원 찾기<S.ContentSpan2>전국에 있는 동물병원 위치 제공</S.ContentSpan2>
            </S.ContentP>
          </S.Content>
        </S.ContentDiv>
        <S.ContentDiv>
          <S.Content to={ROUTE.FREECOMMUNITY.link}>
            <S.ContentP>
              커뮤니티<S.ContentSpan3>유저들 간 정보 공유 및 소통</S.ContentSpan3>
            </S.ContentP>
          </S.Content>
          <S.Content to={ROUTE.CHATLIST.link}>
            <S.ContentP>
              실시간 상담<S.ContentSpan4>수의사들과 실시간으로 채팅</S.ContentSpan4>
            </S.ContentP>
          </S.Content>
        </S.ContentDiv>
      </S.SubDiv>
      <S.EffectDiv {...animatedEffectDiv}>
        <S.EffectHeader>DOCTOR가 제공하는 기대효과 및 활용 방안</S.EffectHeader>
        <S.EffectP>
          <BiSolidChevronsRight color="#AE9AFF" size="20" />
          <S.EffectSpan>피부과 비전공 수의사 진단 보조로 활용</S.EffectSpan>
        </S.EffectP>
        <S.EffectP>
          <BiSolidChevronsRight color="#AE9AFF" size="20" />
          <S.EffectSpan>병원 진료 후 처방에 대한 차도 확인 보조로 활용</S.EffectSpan>
        </S.EffectP>
        <S.EffectP>
          <BiSolidChevronsRight color="#AE9AFF" size="20" />
          <S.EffectSpan>건강 상태를 주기적으로 확인하여 질병 예방에 기여</S.EffectSpan>
        </S.EffectP>
        <S.EffectP>
          <BiSolidChevronsRight color="#AE9AFF" size="20" />
          <S.EffectSpan>질환 초기 발견으로 조기 병원 내원 유도</S.EffectSpan>
        </S.EffectP>
      </S.EffectDiv>
    </S.Wrap>
  );
};

export default MainPage;
