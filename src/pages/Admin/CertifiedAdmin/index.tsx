import React, { useState } from 'react';
import * as S from './style';
import ProfileImg from '../../../components/commons/ProfileImg';
import AdminLayout from '../../../components/layout/AdminLayout';

const CertifiedAdminPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClickBtn1 = () => {
    setIsActive(false);
  };

  const handleClickBtn2 = () => {
    setIsActive(true);
  };

  return (
    <AdminLayout>
      <S.Wrap>
        <S.Content>
          <S.Container>
            <S.ContentTitle>
              <S.CTitleName>수의사 인증 접수</S.CTitleName>
            </S.ContentTitle>
            <S.PageNation>
              <S.PageNationBtn>
                <S.PageNationBox>
                  <S.PageNationReportBtn
                    onClick={handleClickBtn1}
                    className={isActive ? '' : 'active'}
                  >
                    인증 대기 목록
                  </S.PageNationReportBtn>
                  <S.PageNationReportBtn
                    className={isActive ? 'active' : ''}
                    onClick={handleClickBtn2}
                  >
                    인증 완료 목록
                  </S.PageNationReportBtn>
                </S.PageNationBox>
                <S.PageNationBar></S.PageNationBar>
              </S.PageNationBtn>
            </S.PageNation>
            <S.ReportList>
              <S.ListSet>
                <S.ListOrder>▼ 요청 일자 순</S.ListOrder>
                <S.ListOrder>▼ 승인 일자 순</S.ListOrder>
                <S.ListOrder>▼ 처리 상태 순</S.ListOrder>
              </S.ListSet>
              <S.ListRowName>
                <S.ReportIdList>수의사 인증 신청 대기 계정</S.ReportIdList>
                <S.ReportWarnList>요청 일자</S.ReportWarnList>
                <S.ReportAccrueList>승인 일자</S.ReportAccrueList>
                <S.ReportDetailList>인증 자료</S.ReportDetailList>
                <S.ReportHandleList>처리 상태</S.ReportHandleList>
              </S.ListRowName>
              <S.ContentNationBar></S.ContentNationBar>
              <S.ListContentWrap>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportPrifileId>asjlfjaklsjfklasf@naver.com</S.ReportPrifileId>
                  </S.ReportProfile>
                  <S.ReportN>2023-07-20</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN>2023-07-25</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet></S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
                  </S.ReportHandle>
                </S.ListOfLists>
              </S.ListContentWrap>
            </S.ReportList>
          </S.Container>
        </S.Content>
      </S.Wrap>
    </AdminLayout>
  );
};

export default CertifiedAdminPage;
