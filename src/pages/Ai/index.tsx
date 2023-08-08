import React, { useState, useRef, useEffect } from 'react';
import * as S from './style';
import { GrClose } from 'react-icons/gr';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import Avatar from '@mui/material/Avatar';
import { tokenAtom } from '../../atoms/atoms';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/routes/routeData';
import Swal from 'sweetalert2';
import { useAtomValue } from 'jotai';
import { usePostDiseaseMutation } from '../../hooks/query/usePostDiseaseMutation';

const AiPage = () => {
  const auth = useAtomValue(tokenAtom);
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [result, setResult]: any = useState('');
  const [loading, setLoading] = useState(false);

  console.log(result);

  const imgInput = useRef<HTMLInputElement | null>(null);

  const mutation = usePostDiseaseMutation();
  const postDisease = mutation.mutate;

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
      reader.readAsDataURL(e.target.files[0]);

      const formData: any = new FormData();
      formData.append('diseases', e.target.files[0]);

      setLoading(true);

      postDisease(formData, {
        onSuccess: ({ data }: any) => {
          setLoading(false);
          Swal.fire('피부 사진이 업로드되었습니다');
          const firstKey = Object.values(data)[0];
          setResult(firstKey);
          console.log(data);
        },
        onError: (err: any) => {
          setLoading(false);
          Swal.fire(err.response.data.error);
        }
      });
    } else {
      // 업로드 취소할 시
      setAiImage('/images/commons/aipic.png');
    }
  };

  const resetAiImage = () => {
    setAiImage('/images/commons/aipic.png');
    window.location.reload();
  };

  useEffect(() => {
    if (!auth) {
      navigate(ROUTE.LOGIN.link);
      Swal.fire('로그인 후 서비스 이용이 가능합니다.');
    }
  });

  useEffect(() => {
    // Modal이 열릴 때 body에 스크롤 막기
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      // Modal이 닫힐 때 body 스크롤 활성화
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트 언마운트 시에도 body 스크롤 활성화
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

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
            width: '42rem',
            height: '45rem',
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
          !loading && (
            <S.Skin>
              <S.SkinSpan>{result}</S.SkinSpan>
              {result !== '증상 없음' && <span>이(가) 의심됩니다. 병원에 방문해 주세요.</span>}
              <S.SkinButton2 onClick={resetAiImage}>다시 검사하기</S.SkinButton2>
            </S.Skin>
          )
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
      {loading && (
        <S.Loader>
          <S.Circle1></S.Circle1>
          <S.Circle2></S.Circle2>
          <S.Circle3></S.Circle3>
          <S.Circle4></S.Circle4>
        </S.Loader>
      )}
    </S.Wrap>
  );
};

export default AiPage;
