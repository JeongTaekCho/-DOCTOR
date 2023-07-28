import React, { useState } from 'react';
import * as S from './style';
import { BiHeart } from 'react-icons/bi';
import { BsArrowReturnRight } from 'react-icons/bs';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import SideLayout from '../../layout/SideBar.tsx';
const FreeDetail = () => {
  const [modal, setModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditDelete = () => {
    setIsEditing(false);
  };

  const text = '안녕하세요';
  return (
    <div style={{ width: '100%' }}>
      <SideLayout />

      <S.Container>
        <S.Header>
          <S.Title>안녕하세요</S.Title>
          <S.Date>2023-07-23</S.Date>
        </S.Header>
        <S.MainDiv>
          <S.MainTextDiv>
            {isEditing ? <S.MainTextArea>{text}</S.MainTextArea> : <S.MainText>{text}</S.MainText>}
          </S.MainTextDiv>
          <S.HeartIcon>
            <BiHeart size="40" />
          </S.HeartIcon>
          <S.ReportTextDiv>
            {isEditing ? (
              <div>
                <S.ConfirmButton>확인</S.ConfirmButton>
                <S.ReportText onClick={handleEditDelete}>취소</S.ReportText>
              </div>
            ) : (
              <div>
                <S.Correction onClick={handleEditClick}>수정</S.Correction>
                <S.ReportText onClick={openModal}>신고</S.ReportText>
              </div>
            )}
          </S.ReportTextDiv>
        </S.MainDiv>
        <S.CommentDiv>댓글</S.CommentDiv>
        <S.Comment>
          <S.UserDiv>
            <S.User>
              유승제<S.CommentDate>2023-07-23</S.CommentDate>
            </S.User>
          </S.UserDiv>
          <S.BottomDiv>
            <S.LeftDiv>안녕하세요~</S.LeftDiv>
            <S.RightDiv>신고</S.RightDiv>
          </S.BottomDiv>
        </S.Comment>
        <S.CoComment>
          <S.UserDiv>
            <S.User>
              <BsArrowReturnRight /> 유승제<S.CommentDate>2023-07-23</S.CommentDate>
            </S.User>
          </S.UserDiv>
          <S.BottomDiv>
            <S.LeftDiv>안녕하세요~</S.LeftDiv>
            <S.RightDiv>신고</S.RightDiv>
          </S.BottomDiv>
        </S.CoComment>
        <S.Register>
          <S.RegisterTitle>댓글 쓰기</S.RegisterTitle>
          <S.InputDiv>
            <S.Input></S.Input>
            <S.RegisterButton>등록</S.RegisterButton>
          </S.InputDiv>
        </S.Register>
        <S.ListDiv>
          <S.ListButton to={ROUTE.COMMUNITY.link}>목록</S.ListButton>
        </S.ListDiv>
      </S.Container>
      {modal && (
        <S.Modal>
          <S.Card>
            <S.Reason>신고사유</S.Reason>
            <S.ReasonDiv>
              <S.ReasonBox>
                <S.ReasonOption value="">홍보/상업성</S.ReasonOption>
                <S.ReasonOption value="학생">스팸</S.ReasonOption>
                <S.ReasonOption value="회사원">욕설/인신공격</S.ReasonOption>
                <S.ReasonOption value="기타">음란/선정성</S.ReasonOption>
                <S.ReasonOption value="기타">불법정보</S.ReasonOption>
                <S.ReasonOption value="기타">개인정보 노출</S.ReasonOption>
              </S.ReasonBox>
            </S.ReasonDiv>
            <S.ButtonDiv>
              <S.BlueButton>확인</S.BlueButton>
              <S.RedButton onClick={closeModal}>취소</S.RedButton>
            </S.ButtonDiv>
          </S.Card>
        </S.Modal>
      )}
    </div>
  );
};

export default FreeDetail;
