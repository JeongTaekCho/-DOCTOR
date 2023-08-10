import React, { ChangeEvent, useState, MouseEvent, useEffect } from 'react';
import * as S from './style';
import { BiSolidUser } from 'react-icons/bi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
// import { BsArrowReturnRight } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import SideLayout from '../../layout/SideBar.tsx';
import { useGetPostsDetailQuery } from '../../../hooks/query/useGetPostsDetailQuery.ts';
import { useDeletePostMutation } from '../../../hooks/query/useDeletePostMutation.ts';
import { useGetUsersQuery } from '../../../hooks/query/useGetUsersQuery.ts';
import Swal from 'sweetalert2';
import { useChangePostMutation } from '../../../hooks/query/useChangePostMutation.ts';
import { useReportPostMutation } from '../../../hooks/query/useReportPostMutation.ts';
import { useRegisterCommentMutation } from '../../../hooks/query/useRegisterCommentMutation.ts';
import { useGetCommentQuery } from '../../../hooks/query/useGetCommentQuery.ts';
import { useDeleteCommentMutation } from '../../../hooks/query/useDeleteCommentMutation.ts';
import { useReportCommentMutation } from '../../../hooks/query/useReportCommentMutation.ts';
import { tokenAtom } from '../../../atoms/atoms.ts';
import { useAtomValue } from 'jotai';
import { useChangeHeartMutation } from '../../../hooks/query/useChangeHeartMutation.ts';

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const FreeDetail = () => {
  const auth = useAtomValue(tokenAtom);
  const { postId } = useParams<{ postId: any }>();
  const parsedPostId = parseInt(postId, 10);

  const [modal, setModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [reason, setReason] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [commentReport, setCommentReport] = useState(false);
  const [commentBody, setCommentBody] = useState('');
  const [commentId, setCommentId]: any = useState();

  const { data: post, refetch } = useGetPostsDetailQuery(postId);
  const { data: commentData, refetch: commentRefetch }: any = useGetCommentQuery(postId);

  const { mutate: deletePostMutation } = useDeletePostMutation(postId);

  const { mutate: deleteComments } = useDeleteCommentMutation(commentId);

  const { mutate: reportComment } = useReportCommentMutation();
  const { mutate: reportPost } = useReportPostMutation();

  const { mutate: changePost } = useChangePostMutation(postId);
  const { mutate: registerComment } = useRegisterCommentMutation();

  const { mutate: changeHeart } = useChangeHeartMutation();
  const { data: userData } = useGetUsersQuery();

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openReport = (commentId: any) => () => {
    setCommentReport(true);
    setCommentId(commentId);
  };

  const closeReport = () => {
    setCommentReport(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditDelete = () => {
    setIsEditing(false);
  };

  const handleDeleteComment = (commentId: any) => () => {
    setDeleteComment(true);
    setCommentId(commentId);
  };

  const handleDeleteComments = () => {
    deleteComments(undefined, {
      onSuccess: () => {
        commentRefetch();
      }
    });
    setDeleteComment(false);
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

  const onChangeReason = (e: ChangeEvent<HTMLSelectElement>) => {
    setReason(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onChangeCommentBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentBody(e.target.value);
  };

  const handleDeleteMyPost = () => {
    deletePostMutation();
    window.history.back();
  };

  const handleChangePost = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    changePost(
      {
        title,
        body
      },
      {
        onSuccess: () => {
          setIsEditing(false);
          refetch();
          Swal.fire('게시물 수정이 완료되었습니다');
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  const handleReportPost = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    reportPost(
      {
        post_id: parsedPostId,
        reason
      },
      {
        onSuccess: () => {
          setModal(false);
          refetch();
          Swal.fire('신고 완료되었습니다');
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  const handleReportComment = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    reportComment(
      {
        comment_id: commentId,
        reason
      },
      {
        onSuccess: () => {
          setCommentReport(false);
          refetch();
          Swal.fire('신고 완료되었습니다');
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  const currentUserEmail: any = userData?.user?.email;
  const isCurrentUserAuthor = userData?.user?.email === post?.author_email;
  //const isCurrentCommentAuthor = currentUserEmail === commentData?.comments?.author_email;

  const handleRegisterComment = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!auth) {
      Swal.fire('댓글을 작성하려면 로그인이 필요합니다');
      return;
    }

    if (userData?.user?.blocked_at !== null) {
      Swal.fire('정지유저는 불가합니다');
      return;
    }

    registerComment(
      {
        post_id: parsedPostId,
        body: commentBody,
        group: 0,
        indent: 0,
        order: 0,
        author_email: currentUserEmail
      },
      {
        onSuccess: () => {
          commentRefetch();
          Swal.fire('댓글이 작성되었습니다');
          setCommentBody('');
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  // const handleBlockComment = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   Swal.fire('정지 유저는 불가합니다');
  // };

  const handleChangeHeart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!auth) {
      Swal.fire('좋아요를 하려면 로그인이 필요합니다');
      return;
    }

    if (userData?.user?.blocked_at !== null) {
      Swal.fire('정지유저는 불가합니다');
      return;
    }

    changeHeart(
      {
        postId: parsedPostId,
        userId: currentUserEmail
      },
      {
        onSuccess: () => {
          refetch();
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  // const handleBlockHeart = (e: MouseEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   Swal.fire('정지 유저는 불가합니다');
  // };

  useEffect(() => {
    if (modal || deleteComment || deletePost || commentReport) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal, deleteComment, deletePost, commentReport]);

  const maxTitleLength = 40;
  const maxBodyLength = 500;
  return (
    <div style={{ width: '100%' }}>
      <SideLayout> </SideLayout>
      <S.Container>
        {isCurrentUserAuthor && auth && userData?.user?.blocked_at === null && (
          <S.DeletePost>
            <S.DeletePostButton onClick={handleDeletePost}>삭제</S.DeletePostButton>
          </S.DeletePost>
        )}
        <S.Header>
          {isEditing ? (
            <S.TitleTextarea maxLength={maxTitleLength} onChange={onChangeTitle}>
              {post?.title}
            </S.TitleTextarea>
          ) : (
            <S.Title>{post?.title}</S.Title>
          )}
          <S.Date>{formatDate(post?.created_at)}</S.Date>
        </S.Header>
        <S.MainDiv>
          <S.MainTextDiv>
            <S.UserWrap>
              <S.SolidUserDiv>
                <div>
                  <BiSolidUser />
                </div>
                <S.Nickname>{post?.users?.nickname}</S.Nickname>
              </S.SolidUserDiv>
            </S.UserWrap>
            {isEditing ? (
              <S.MainTextArea maxLength={maxBodyLength} onChange={onChangeBody}>
                {post?.body}
              </S.MainTextArea>
            ) : (
              <S.Pre>
                <S.MainText>{post?.body}</S.MainText>
              </S.Pre>
            )}
          </S.MainTextDiv>

          <S.HeartIcon onClick={handleChangeHeart}>
            <div>
              {post?.likes?.[0]?.is_like ? <AiFillHeart size="40" /> : <AiOutlineHeart size="40" />}
            </div>
            <S.HeartNumber>{post?.like}</S.HeartNumber>
          </S.HeartIcon>

          <S.ReportTextDiv>
            {auth ? (
              userData?.user?.blocked_at === null ? (
                isEditing ? (
                  <div>
                    <S.ConfirmButton onClick={handleChangePost}>확인</S.ConfirmButton>
                    <S.ReportText onClick={handleEditDelete}>취소</S.ReportText>
                  </div>
                ) : (
                  <div>
                    {isCurrentUserAuthor ? (
                      <S.Correction onClick={handleEditClick}>수정</S.Correction>
                    ) : (
                      <S.ReportText onClick={openModal}>신고</S.ReportText>
                    )}
                  </div>
                )
              ) : null
            ) : null}
          </S.ReportTextDiv>
        </S.MainDiv>
        <S.CommentDiv>댓글</S.CommentDiv>
        {commentData?.map((comment: any) => (
          <S.Comment key={comment.id}>
            <S.UserDiv>
              <S.User>
                {comment.users.nickname}
                <S.CommentDate>{formatDate(comment.created_at)}</S.CommentDate>
              </S.User>
              {currentUserEmail === comment.author_email &&
                auth &&
                userData?.user?.blocked_at === null && (
                  <S.DeleteDiv onClick={handleDeleteComment(comment.id)}>
                    <GrClose />
                  </S.DeleteDiv>
                )}
            </S.UserDiv>
            <S.BottomDiv>
              <S.LeftDiv>{comment.body}</S.LeftDiv>
              {currentUserEmail !== comment.author_email &&
                auth &&
                userData?.user?.blocked_at === null && (
                  <S.RightDiv onClick={openReport(comment.id)} style={{ cursor: 'pointer' }}>
                    신고
                  </S.RightDiv>
                )}
            </S.BottomDiv>
          </S.Comment>
        ))}

        <S.Register>
          <S.RegisterTitle>댓글 쓰기</S.RegisterTitle>
          <S.InputDiv>
            <S.Input value={commentBody} onChange={onChangeCommentBody}></S.Input>
            <S.RegisterButton onClick={handleRegisterComment}>등록</S.RegisterButton>
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
              <S.ReasonBox onChange={onChangeReason}>
                <S.ReasonOption value="">항목을 선택해주세요.</S.ReasonOption>
                <S.ReasonOption value="홍보/상업성">홍보/상업성</S.ReasonOption>
                <S.ReasonOption value="스팸">스팸</S.ReasonOption>
                <S.ReasonOption value="욕설/인신공격">욕설/인신공격</S.ReasonOption>
                <S.ReasonOption value="음란/선정성">음란/선정성</S.ReasonOption>
                <S.ReasonOption value="불법정보">불법정보</S.ReasonOption>
                <S.ReasonOption value="개인정보 노출">개인정보 노출</S.ReasonOption>
              </S.ReasonBox>
            </S.ReasonDiv>
            <S.ButtonDiv>
              <S.BlueButton onClick={handleReportPost}>확인</S.BlueButton>
              <S.RedButton onClick={closeModal}>취소</S.RedButton>
            </S.ButtonDiv>
          </S.Card>
        </S.Modal>
      )}

      {deleteComment && (
        <S.BlackDiv>
          <S.Modal>
            <S.Card>
              <S.Reason>댓글을 삭제하시겠습니까?</S.Reason>
              <S.ReasonDiv></S.ReasonDiv>
              <S.DeleteButtonDiv>
                <S.BlueButton onClick={handleDeleteComments}>확인</S.BlueButton>
                <S.RedButton onClick={handleCloseComment}>취소</S.RedButton>
              </S.DeleteButtonDiv>
            </S.Card>
          </S.Modal>
        </S.BlackDiv>
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

      {commentReport && (
        <S.Modal>
          <S.Card>
            <S.Reason>신고사유</S.Reason>
            <S.ReasonDiv>
              <S.ReasonBox onChange={onChangeReason}>
                <S.ReasonOption value="">항목을 선택해주세요.</S.ReasonOption>
                <S.ReasonOption value="홍보/상업성">홍보/상업성</S.ReasonOption>
                <S.ReasonOption value="스팸">스팸</S.ReasonOption>
                <S.ReasonOption value="욕설/인신공격">욕설/인신공격</S.ReasonOption>
                <S.ReasonOption value="음란/선정성">음란/선정성</S.ReasonOption>
                <S.ReasonOption value="불법정보">불법정보</S.ReasonOption>
                <S.ReasonOption value="개인정보 노출">개인정보 노출</S.ReasonOption>
              </S.ReasonBox>
            </S.ReasonDiv>
            <S.ButtonDiv>
              <S.BlueButton onClick={handleReportComment}>확인</S.BlueButton>
              <S.RedButton onClick={closeReport}>취소</S.RedButton>
            </S.ButtonDiv>
          </S.Card>
        </S.Modal>
      )}
    </div>
  );
};

export default FreeDetail;
