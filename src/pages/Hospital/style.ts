import { styled } from 'styled-components';
import { RESPONSIVE } from '../../styles/responsive';

export const Wrap = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media ${RESPONSIVE.tablet} {
    width: 90%;

    #myMap {
      width: 100%;
    }
  }
`;

// 동물 병원 페이지 소개 제목 wrap
export const HospitalIntro = styled.div`
  text-align: left;
  width: 100%;
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
  margin-top: 2rem;
  position: relative;

  @media ${RESPONSIVE.mobile} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 50rem;
  background-color: gray;
  border: #b4b9c5 0.1rem solid;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 0px 5px 0px #667085;
`;

export const SearchBox = styled.div`
  width: 30rem;
  height: 96%;
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.6rem;
  z-index: 9000;

  @media ${RESPONSIVE.mobile} {
    width: 100%;
    height: 60rem;
    position: static;
    transform: translateY(0);
    background-color: #fff;
  }
`;

export const SearchContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 1rem auto 0;
`;

export const InputBox = styled.div`
  width: 100%;

  input {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: #111;
  }
`;

export const PlaceList = styled.ul`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  li {
    width: 100%;
    border-bottom: 1px solid #ddd;

    a {
      display: block;
      width: 100%;
      padding: 2rem 0.5rem;
      cursor: pointer;
    }
  }
`;

export const HospitalName = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 1rem;
`;

export const HospitalAddress = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #111;
  margin-bottom: 1.5rem;
`;

export const HospitalTel = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #009900;

  span {
    color: #111;
  }
`;

export const PageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  a {
    font-size: 1.5rem;
    font-weight: 400;
    color: #111;

    &.on {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;
