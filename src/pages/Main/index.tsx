import React from 'react';
import * as S from './style';
import { BiSolidChevronsRight } from 'react-icons/bi';

const MainPage = () => {
  return (
    <S.Wrap>
      <S.Container>
        <S.Img src="/images/commons/Dog.jpg"></S.Img>
        <S.Header>
          반려동물
          <br />
          피부질환 자가진단
          <br />
          서비스
        </S.Header>
      </S.Container>
      <S.AiDiv
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
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
          <S.Pic src="/images/commons/maintest1.png"></S.Pic>
          <S.Pic src="/images/commons/maintest2.png"></S.Pic>
        </S.AiPic>
      </S.AiDiv>
      <S.SubDiv>
        <S.SubHeader>
          전문의와의 상담과 정보공유까지
          <br />
          다양한 콘텐츠 제공
        </S.SubHeader>
        <S.ContentDiv>
          <S.Content>
            <S.ContentP>
              AI 자가진단<S.ContentSpan1>AI를 통해 실시간으로 증상 파악</S.ContentSpan1>
            </S.ContentP>
          </S.Content>
          <S.Content>
            <S.ContentP>
              병원 찾기<S.ContentSpan2>전국에 있는 동물병원 위치 제공</S.ContentSpan2>
            </S.ContentP>
          </S.Content>
        </S.ContentDiv>
        <S.ContentDiv>
          <S.Content>
            <S.ContentP>
              커뮤니티<S.ContentSpan3>유저들 간 정보 공유 및 소통</S.ContentSpan3>
            </S.ContentP>
          </S.Content>
          <S.Content>
            <S.ContentP>
              실시간 상담<S.ContentSpan4>수의사들과 실시간으로 채팅</S.ContentSpan4>
            </S.ContentP>
          </S.Content>
        </S.ContentDiv>
      </S.SubDiv>
      <S.EffectDiv
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
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
