import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
`;

// 동물 병원 페이지 소개 제목 wrap
export const HospitalIntro = styled.div`
  text-align: left;
  width: 100%;
  padding-left: 5%;
`;
// 'DOGTOR 동물 병원 찾기'
export const MainTitle = styled.h4`
  font-size: 3rem;
  font-weight: bolder;
  width: 100%;
  color: #5429ff;
`;
// '가까운 동물 병원을 확인하세요'
export const SubTitle = styled.h4`
  width: 100%;
  font-size: 2rem;
  font-weight: bolder;
  padding-top: 2%;
  color: #344054;
`;

// 카카오맵
export const MapContent = styled.div`
  width: 100%;
  height: 50rem;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  border: #b4b9c5 0.1rem solid;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 0px 5px 0px #667085;
`;
