/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React, { useEffect } from 'react';
import * as S from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

const HospitalPage = () => {
  useEffect(() => {
    const container = document.getElementById('map') as HTMLElement;

    if (window.kakao && window.kakao.maps) {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);
    }
  }, []);

  return (
    <S.Wrap>
      <S.HospitalIntro>
        <S.MainTitle>DOGTOR 동물 병원 찾기</S.MainTitle>
        <S.SubTitle>가까운 동물 병원을 확인하세요</S.SubTitle>
      </S.HospitalIntro>
      <S.MapContent>
        <S.Map id="map"></S.Map>
      </S.MapContent>
    </S.Wrap>
  );
};

export default HospitalPage;
