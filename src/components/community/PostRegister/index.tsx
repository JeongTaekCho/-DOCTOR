import React, { ChangeEvent, useState, useEffect } from 'react';
import * as S from './style';
import PropTypes from 'prop-types';
import { useCreatePostMutation } from '../../../hooks/query/useCreatePostMutation';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../../constants/routes/routeData';
import { tokenAtom } from '../../../atoms/atoms';
import { useAtomValue } from 'jotai';
interface PostRegisterProps {
  onCancel: () => void; // onCancel 함수의 타입을 명시적으로 지정
  isFree: boolean;
}

const PostRegister: React.FC<PostRegisterProps> = ({ onCancel, isFree }) => {
  const navigate = useNavigate();
  const auth = useAtomValue(tokenAtom);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { mutate } = useCreatePostMutation();

  const handleCancelClick = () => {
    onCancel();
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    if (!auth) {
      navigate(ROUTE.LOGIN.link);
      Swal.fire('로그인 후 서비스 이용이 가능합니다.');
    }
  });

  const handleCreatePost = () => {
    if (!title) {
      Swal.fire('제목을 입력해주세요.');
    } else if (!body) {
      Swal.fire('내용을 입력해주세요.');
    } else {
      mutate(
        {
          title,
          body,
          category: isFree ? 'free' : 'info'
        },
        {
          onSuccess: ({ data }) => {
            Swal.fire('게시글 등록이 완료되었습니다.');
            navigate(`${ROUTE.FREEDETAIL.link}/${data.id}`);
          },
          onError: (err: any) => {
            Swal.fire(err.response.data.error);
          }
        }
      );
    }
  };

  return (
    <S.Container>
      <S.TitleDiv>
        <S.Title
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={handleChangeTitle}
        ></S.Title>
      </S.TitleDiv>
      <S.DetailDiv>
        <S.Detail
          placeholder="내용을 입력해주세요."
          value={body}
          onChange={handleChangeBody}
        ></S.Detail>
      </S.DetailDiv>
      <S.ButtonDiv>
        <S.Register onClick={handleCreatePost}>등록</S.Register>
        <S.Cancel onClick={handleCancelClick}>취소</S.Cancel>
      </S.ButtonDiv>
    </S.Container>
  );
};

PostRegister.propTypes = {
  onCancel: PropTypes.func.isRequired
};

export default PostRegister;
