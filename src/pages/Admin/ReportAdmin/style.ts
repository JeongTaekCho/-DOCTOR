import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 1200px;
`;

export const Nav = styled.div`
  display: inline-block;
  width: 30%;
  height: 100%;
  font-size: 4rem;
  background-color: #363740;
  float: left;
  color: #667085;
`;

export const NavTitle = styled.div`
  // <관리자페이지>
  width: 100%;
  padding: 10%;
`;

export const LogoImg = styled.img`
  // 로고이미지-관리자페이지
  width: 2.5rem;
  height: 2.5rem;
  object-fit: scale-down;
  background-position: center;
  background-image: url('/images/commons/doctor.png');
  border-radius: 100%;
  display: inline-block;
`;

export const TitleName = styled.div`
  //'관리자 페이지'
  font-size: 2rem;
  display: inline-block;
  font-weight: bolder;
  color: #545563;
`;

export const NavMenu = styled.div`
  // <메뉴바>
  width: 100%;
  height: 5%;
  font-size: 1.5rem;
  padding-left: 10%;
  align-items: center;

  &:hover {
    background-color: #3e4049;
    color: #ebebeb;
    border-left: #dadffb 1rem solid;
    padding-left: 7%;
  }
`;

export const MenuImgReport = styled.img`
  // 메뉴이미지-신고하기
  font-size: 3.5rem;
  width: 2rem;
  height: 2rem;
  object-fit: scale-down;
  background-position: center;
  background-image: url('/images/admin/adminReport_1_Img.png');
  border-radius: 100%;
  display: inline-block;
`;
export const MenuImgCertified = styled.img`
  // 메뉴이미지-수의사인증
  font-size: 3.5rem;
  width: 2rem;
  height: 2rem;
  object-fit: scale-down;
  background-position: center;
  background-image: url('/images/admin/Certified_1.png');
  border-radius: 100%;
`;
export const MenuImgSettings = styled.img`
  // 메뉴 이미지-세팅
  font-size: 3.5rem;
  width: 2rem;
  height: 2rem;
  object-fit: scale-down;
  background-position: center;
  background-image: url('/images/admin/Settings_1.png');
  border-radius: 100%;
`;

export const MenuName = styled.div`
  // 메뉴 이름
  font-size: 2rem;
  padding-top: 5%;
`;

// ---
export const Container = styled.div`
  height: 100%;
  width: 80%;
  font-size: 9rem;
  display: inline-block;
  background-color: white;
  float: left;
`;

//----------------------------------
// 우측 컨텐츠 내용 부분
//----------------------------------
export const Content = styled.div`
  width: 70%;
  height: 960px;
  display: inline-block;
  float: left;
  //background-color: purple;
`;
export const ContentTitle = styled.div`
  width: 100%;
  height: 5%;
  //background-color: white;
`;
export const CTitleName = styled.div`
  // '신고 접수'
  width: 60%;
  height: 100%;
  padding-top: 1.2%;
  padding-left: 2%;
  font-size: 2rem;
  float: left;
  color: #1b1c25;
  font-weight: bolder;
`;
export const AdminBtn = styled.div`
  background-color: #272836;
  width: 30%;
  height: 90%;
  float: left;
`;
export const AdminId = styled.div``;
export const AdminProfileImg = styled.div``;

export const PageNation = styled.div``;
export const PageNationBtn = styled.div`
  width: 100%;
  height: 8rem;
  //background-color: red;
  padding-left: 2rem;
  padding-top: 4rem;
  display: inline-block;
`;
export const PageNationReport1Btn = styled.div`
  // '신고 접수 목록'
  width: 15rem;
  height: 4rem;
  background-color: #344054;
  border-radius: 10px 10px 0px 0px;
  padding-left: 3rem;
  padding-top: 1.2rem;
  float: left;
  margin: 0;
  font-size: 1.5rem;
  color: white;
  font-weight: bolder;

  &:hover {
    background-color: darkgray;
    color: white;
  }
`;
export const PageNationReport2Btn = styled.div`
  width: 15rem;
  height: 4rem;
  background-color: #d7d7d7;
  border-radius: 10px 10px 0px 0px;
  padding-left: 3rem;
  padding-top: 1.2rem;
  float: left;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bolder;
  color: gray;
  &:hover {
    background-color: darkgray;
  }
`;
export const PageNationBar = styled.div`
  width: 98%;
  display: flex;
  height: 0.5rem;
  background-color: #344054;
`;

export const ReportList = styled.div`
  width: 100%;
`;
export const ListSet = styled.div`
  width: 100%;
  padding: 2%;
  display: flex;
  justify-content: flex-end;
  color: #344054;
  font-weight: bold;
  font-size: 1.2rem;
`;
export const ListOrder1 = styled.div`
  width: 10%;
`;
export const ListOrder2 = styled.div`
  width: 10%;
`;
export const ListRowName = styled.div`
  width: 100%;
  display: flex;
  float: left;
  padding-left: 2%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  color: #778092;
  font-weight: bold;
  font-size: 1.2rem;
`;
export const ReportIdList = styled.div`
  width: 20%;
`;
export const ReportWarnList = styled.div`
  width: 20%;
`;
export const ReportAccrueList = styled.div`
  width: 20%;
`;
export const ReportDetailList = styled.div`
  width: 20%;
`;
export const ReportHandleList = styled.div`
  width: 20%;
`;

export const ContentNationBar = styled.div`
  display: flex;
  width: 100%;
  height: 0.2rem;
  background-color: #c3c6ce;
`;

//-------------------------------
// 신고된 목록 리스트
//-------------------------------
export const ListContentWrap = styled.div`
  width: 100%;
  height: 960px;
  padding-top: 1%;
`;

export const ListOfLists = styled.div`
  width: 100%;
  height: 8%;
  padding-left: 2%;
  display: flex;
  font-size: 1.2rem;
  box-shadow: 1px 2px 3px 0px #e7e7e7;

  &:hover {
    background-color: #e7e7e7;
  }
`;

export const ReportProfile = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  padding-top: 1.5rem;
  align-items: flex-start;
`;
export const ReportProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  border: #afafaf 0.2rem solid;
  border-radius: 50%;
`;
export const ReportPrifileId = styled.div`
  display: flex;
  height: auto;
  width: 80%;
  align-items: center;
  padding-left: 5%;
  padding-top: 9%;
  font-size: 1.2rem;
`;

export const ReportN = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
`;

export const ReportDetailN = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
`;
export const ReportPostN = styled.div``;
export const ReportDate = styled.div``;

export const ReportContent = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;
export const ReportContentListSet = styled.div``;

export const ReportHandle = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;
export const ReportHandleListSet = styled.div`
  width: 60%;
  height: 30%;
  background-color: black;
  border-radius: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
