import React, { useState, useRef, useEffect } from 'react';
import * as S from './style';
import { GrClose } from 'react-icons/gr';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import Avatar from '@mui/material/Avatar';
import { useAtom } from 'jotai';
import { tokenAtom } from '../../atoms/atoms';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/routes/routeData';
import Swal from 'sweetalert2';

const AiPage = () => {
  const [modal, setModal] = useState(false);
  const [userToken] = useAtom(tokenAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) {
      navigate(ROUTE.LOGIN.link);
      Swal.fire('로그인 후 서비스 이용이 가능합니다.');
    }
  });

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const DEFAULT_IMAGE = '/images/commons/aipic.png';

  const [AiImage, setAiImage] = useState<string>(DEFAULT_IMAGE);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAiImage(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]); //서버에는 이걸로 보냄
    } else {
      // 업로드 취소할 시
      setAiImage('/images/commons/aipic.png');
    }
  };

  const resetAiImage = () => {
    setAiImage('/images/commons/aipic.png');
    window.location.reload();
  };

  const imgInput = useRef<HTMLInputElement | null>(null);

  return (
    <S.Wrap>
      <S.Title>
        <S.Header>피부질환 AI 진단</S.Header>
        <S.P>우리 아이 피부질환 AI 자가진단 해보기</S.P>
      </S.Title>
      <S.Upload>
        <Avatar
          src={AiImage}
          sx={{
            width: 420,
            height: 450,
            margin: 'auto',
            marginTop: '2rem',
            cursor: 'pointer',
            borderRadius: '0.5rem'
          }}
          onClick={() => imgInput.current?.click()}
        />
        <S.Input
          ref={imgInput}
          id="profile-img-input"
          type="file"
          accept="image/jpg,image/png,image/jpeg"
          name="profile_img"
          onChange={onChange}
          style={{ display: 'none' }}
        />
      </S.Upload>
      <S.Example>
        {AiImage === '/images/commons/aipic.png' ? (
          <S.Button onClick={openModal}>올바른 예시 확인</S.Button>
        ) : (
          <S.Skin>
            <S.SkinSpan>각질</S.SkinSpan>이 의심됩니다. 병원에 방문해 주세요.
            <S.SkinButton onClick={resetAiImage}>다시 검사하기</S.SkinButton>
          </S.Skin>
        )}
      </S.Example>
      {modal && (
        <S.Modal>
          <S.Card>
            <S.Close onClick={closeModal}>
              <GrClose size="20" />
            </S.Close>
            <S.Correct>
              <S.CoExample>
                <FcCheckmark />
                올바른 사진 예시
              </S.CoExample>
              <S.CoExplain>진단할 피부 부위가 잘 보이도록 나온 사진</S.CoExplain>
              <S.CoImage>
                <S.CorrectImg src="/images/commons/correct1.jpg"></S.CorrectImg>
                <S.CorrectImg src="/images/commons/correct2.jpg"></S.CorrectImg>
                <S.CorrectImg src="/images/commons/correct3.jpg"></S.CorrectImg>
              </S.CoImage>
            </S.Correct>
            <S.Correct>
              <S.CoExample>
                <FcCancel />
                잘못된 사진 예시
              </S.CoExample>
              <S.CoExplain>진단할 피부 부위가 잘 보이지 않는 사진</S.CoExplain>
              <S.CoImage>
                <S.WrongImg src="/images/commons/wrong1.jpg"></S.WrongImg>
                <S.WrongImg src="/images/commons/wrong2.jpg"></S.WrongImg>
                <S.WrongImg src="/images/commons/wrong3.jpg"></S.WrongImg>
              </S.CoImage>
            </S.Correct>
          </S.Card>
        </S.Modal>
      )}
    </S.Wrap>
  );
};

export default AiPage;
