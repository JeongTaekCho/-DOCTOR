import React, { useState } from 'react';
import * as S from './style';
import { BiHeart } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
// import { BsArrowReturnRight } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import SideLayout from '../../layout/SideBar.tsx';
import { useGetPostsDetailQuery } from '../../../hooks/query/useGetPostsDetailQuery.ts';
import { useDeletePostMutation } from '../../../hooks/query/useDeletePostMutation.ts';
const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const options: any = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('en-US', options).split('/').reverse().join('/');
};

const FreeDetail = () => {
  const [modal, setModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const { postId } = useParams<{ postId: any }>();

  const { data: post } = useGetPostsDetailQuery(postId);
  const postMutation = useDeletePostMutation(postId);
  const deletePostMutation = postMutation.mutate;

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

  const handleDeleteComment = () => {
    setDeleteComment(true);
  };

  const handleCloseComment = () => {
    setDeleteComment(false);
  };

  const handleDeletePost = () => {
    setDeletePost(true);
  };

  const handleClosePost = () => {
    setDeletePost(false);
  };

  const getCurrentUserEmail = () => {
    // localStorage에서 'email' 키로 저장된 값을 가져옵니다.
    const userEmail = localStorage.getItem('email');

    if (userEmail) {
      try {
        // userEmail이 JSON 형식인 경우에만 파싱하여 반환합니다.
        const user = JSON.parse(userEmail);
        return user;
      } catch (error) {
        // userEmail이 JSON 형식이 아니라면 그대로 반환합니다.
        return userEmail;
      }
    }

    return null;
  };

  const handleDeleteMyPost = () => {
    deletePostMutation();
    window.history.back();
  };

  const currentUserEmail = getCurrentUserEmail();
  const isCurrentUserAuthor = currentUserEmail === post?.author_email;

  return (
    <div style={{ width: '100%' }}>
      <SideLayout> </SideLayout>
      <S.Container>
        {isCurrentUserAuthor && (
          <S.DeletePost>
            <S.DeletePostButton onClick={handleDeletePost}>삭제</S.DeletePostButton>
          </S.DeletePost>
        )}
        <S.Header>
          <S.Title>{post?.title}</S.Title>
          <S.Date>{formatDate(post?.created_at)}</S.Date>
        </S.Header>
        <S.MainDiv>
          <S.MainTextDiv>
            {isEditing ? (
              <S.MainTextArea>{post?.body}</S.MainTextArea>
            ) : (
              <S.MainText>{post?.body}</S.MainText>
            )}
          </S.MainTextDiv>
          <S.HeartIcon>
            <div>
              <BiHeart size="40" />
            </div>
            <S.HeartNumber>{post?.like}</S.HeartNumber>
          </S.HeartIcon>
          <S.ReportTextDiv>
            {isEditing ? (
              <div>
                <S.ConfirmButton>확인</S.ConfirmButton>
                <S.ReportText onClick={handleEditDelete}>취소</S.ReportText>
              </div>
            ) : (
              <div>
                {/* currentUserEmail과 post?.author_email이 같을 경우 수정 버튼 렌더링 */}
                {isCurrentUserAuthor ? (
                  <S.Correction onClick={handleEditClick}>수정</S.Correction>
                ) : (
                  <S.ReportText onClick={openModal}>신고</S.ReportText>
                )}
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
            <S.DeleteDiv onClick={handleDeleteComment}>
              <GrClose />
            </S.DeleteDiv>
          </S.UserDiv>
          <S.BottomDiv>
            <S.LeftDiv>안녕하세요~</S.LeftDiv>
            <S.RightDiv>신고</S.RightDiv>
          </S.BottomDiv>
        </S.Comment>
        {/* <S.CoComment>
          <S.UserDiv>
            <S.User>
              <BsArrowReturnRight /> 유승제<S.CommentDate>2023-07-23</S.CommentDate>
            </S.User>
          </S.UserDiv>
          <S.BottomDiv>
            <S.LeftDiv>안녕하세요~</S.LeftDiv>
            <S.RightDiv>신고</S.RightDiv>
          </S.BottomDiv>
        </S.CoComment> */}
        <S.Register>
          <S.RegisterTitle>댓글 쓰기</S.RegisterTitle>
          <S.InputDiv>
            <S.Input></S.Input>
            <S.RegisterButton>등록</S.RegisterButton>
          </S.InputDiv>
        </S.Register>
        <S.ListDiv>
          <S.ListButton to={ROUTE.FREECOMMUNITY.link}>목록</S.ListButton>
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

      {deleteComment && (
        <S.Modal>
          <S.Card>
            <S.Reason>댓글을 삭제하시겠습니까?</S.Reason>
            <S.ReasonDiv></S.ReasonDiv>
            <S.DeleteButtonDiv>
              <S.BlueButton>확인</S.BlueButton>
              <S.RedButton onClick={handleCloseComment}>취소</S.RedButton>
            </S.DeleteButtonDiv>
          </S.Card>
        </S.Modal>
      )}

      {deletePost && (
        <S.Modal>
          <S.Card>
            <S.Reason>게시물을 삭제하시겠습니까?</S.Reason>
            <S.ReasonDiv></S.ReasonDiv>
            <S.DeleteButtonDiv>
              <S.BlueButton onClick={handleDeleteMyPost}>확인</S.BlueButton>
              <S.RedButton onClick={handleClosePost}>취소</S.RedButton>
            </S.DeleteButtonDiv>
          </S.Card>
        </S.Modal>
      )}
    </div>
  );
};

export default FreeDetail;
