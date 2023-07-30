/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';
import ProfileImg from '../../../commons/ProfileImg';
import AdminLayout from '../../AdminLayouts/AdminNavLayout';
import ReportAdminPagination from '../../AdminLayouts/ReportAdminPaginationBtn';
import Select from '../../AdminLayouts/ReportSelectBox';

const ReportAdminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AdminLayout>
      <S.Wrap>
        <S.Content>
          <S.Container>
            {isModalOpen && (
              <S.Modal>
                <p>게시물내용</p>
                <S.ExitBtn onClick={closeModal}>Close</S.ExitBtn>
              </S.Modal>
            )}
            <S.ContentTitle>
              <S.CTitleName>신고접수</S.CTitleName>
            </S.ContentTitle>
            <ReportAdminPagination></ReportAdminPagination>
            <S.ReportList>
              <S.ListSet>
                <S.ListOrder>▼ 처리 내용 순</S.ListOrder>
                <S.ListOrder>▼ 신고 건수 순</S.ListOrder>
              </S.ListSet>
              <S.ListRowName>
                <S.ReportIdList>신고된 계정</S.ReportIdList>
                <S.ReportWarnList>누적 경고 수</S.ReportWarnList>
                <S.ReportAccrueList>누적 신고 수</S.ReportAccrueList>
                <S.ReportDetailList>신고된 항목</S.ReportDetailList>
                <S.ReportHandleList>처리 내용</S.ReportHandleList>
              </S.ListRowName>
              <S.ContentNationBar></S.ContentNationBar>
              <S.ListContentWrap>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportProfileId>신고된 계정 ID</S.ReportProfileId>
                  </S.ReportProfile>
                  <S.ReportN>10</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN onClick={openModal}>게시물10건/댓글2건</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet>스팸</S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <Select></Select>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportProfileId>신고된 계정 ID</S.ReportProfileId>
                  </S.ReportProfile>
                  <S.ReportN>10</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN onClick={openModal}>게시물10건/댓글2건</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet>스팸</S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <Select></Select>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportProfileId>신고된 계정 ID</S.ReportProfileId>
                  </S.ReportProfile>
                  <S.ReportN>10</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN onClick={openModal}>게시물10건/댓글2건</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet>스팸</S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <Select></Select>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportProfileId>신고된 계정 ID</S.ReportProfileId>
                  </S.ReportProfile>
                  <S.ReportN>10</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN onClick={openModal}>게시물10건/댓글2건</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet>스팸</S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <Select></Select>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportProfileId>신고된 계정 ID</S.ReportProfileId>
                  </S.ReportProfile>
                  <S.ReportN>10</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN onClick={openModal}>게시물10건/댓글2건</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet>스팸</S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <Select></Select>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportProfileId>신고된 계정 ID</S.ReportProfileId>
                  </S.ReportProfile>
                  <S.ReportN>10</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN onClick={openModal}>게시물10건/댓글2건</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet>스팸</S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <Select></Select>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportProfileId>신고된 계정 ID</S.ReportProfileId>
                  </S.ReportProfile>
                  <S.ReportN>10</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN onClick={openModal}>게시물10건/댓글2건</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet>스팸</S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <Select></Select>
                  </S.ReportHandle>
                </S.ListOfLists>
                <S.ListOfLists>
                  <S.ReportProfile>
                    <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                    <S.ReportProfileId>신고된 계정 ID</S.ReportProfileId>
                  </S.ReportProfile>
                  <S.ReportN>10</S.ReportN>
                  <S.ReportDetailN>
                    <S.ReportPostN onClick={openModal}>게시물10건/댓글2건</S.ReportPostN>
                  </S.ReportDetailN>
                  <S.ReportContent>
                    <S.ReportContentListSet>스팸</S.ReportContentListSet>
                  </S.ReportContent>
                  <S.ReportHandle>
                    <Select></Select>
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

export default ReportAdminPage;
