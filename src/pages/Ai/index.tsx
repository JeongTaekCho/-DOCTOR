import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import * as S from './style';
import { GrClose } from 'react-icons/gr';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import { BsArrowRightShort } from 'react-icons/bs';
import Avatar from '@mui/material/Avatar';
import { tokenAtom } from '../../atoms/atoms';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/routes/routeData';
import Swal from 'sweetalert2';
import { useAtomValue } from 'jotai';
import { usePostDiseaseMutation } from '../../hooks/query/usePostDiseaseMutation';
import { useGetTopVetsQuery } from '../../hooks/query/useGetTopVetsQuery';
import ChatList from '../../components/chats/ChatList';
import { useGetUsersQuery } from '../../hooks/query/useGetUsersQuery';
import { FaCheck } from 'react-icons/fa';

const AiPage = () => {
  const auth = useAtomValue(tokenAtom);
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [result, setResult]: any = useState('');
  const [loading, setLoading] = useState(false);
  const [resultDescription, setResultDescription]: any = useState('');

  const imgInput = useRef<HTMLInputElement | null>(null);

  const mutation = usePostDiseaseMutation();
  const postDisease = mutation.mutate;
  const { data: topVets } = useGetTopVetsQuery();
  const { data: userData } = useGetUsersQuery();

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleMoveChat = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate(ROUTE.CHATLIST.link);
  };

  const handleMoveHospital = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(ROUTE.HOSPITAL.link);
  };

  const DEFAULT_IMAGE = '/images/commons/aipic.png';

  const [AiImage, setAiImage] = useState<string>(DEFAULT_IMAGE);
  const [success, setSuccess] = useState(false);

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
          const firstKey = Object.values(data)[0];
          const secondKey = Object.values(data)[1];
          setResult(firstKey);
          setSuccess(true);
          setResultDescription(secondKey);
        },
        onError: (err: any) => {
          setLoading(false);
          setAiImage(DEFAULT_IMAGE);
          Swal.fire(err.response.data.error);
        }
      });
    } else {
      // 업로드 취소할 시
      setAiImage(DEFAULT_IMAGE);
    }
  };

  const resetAiImage = () => {
    setAiImage(DEFAULT_IMAGE);
    setSuccess(false);
  };

  useEffect(() => {
    if (!auth) {
      navigate(ROUTE.LOGIN.link);
      Swal.fire('로그인 후 서비스 이용이 가능합니다.');
    }
  });

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  return (
    <S.Wrap>
      <S.Title>
        <S.Header>피부질환 AI 진단 {success && '결과'}</S.Header>
        {!success && <S.P>우리 아이 피부질환 AI 자가진단 해보기</S.P>}
      </S.Title>
      {success && (
        <S.PsMent>
          ※ 독터는 AI 분석 서비스일 뿐, 실제와 다를 수 있습니다. <br /> 정확한 진단은 병원을
          방문하여 수의사에게 문의해주세요.
        </S.PsMent>
      )}

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
          !loading &&
          success && (
            <>
              <S.Skin>
                <S.SkinSpan>{result}</S.SkinSpan>
                {result !== '증상 없음' && (
                  <span>
                    이(가) 의심됩니다.
                    <br />
                    수의사와 상담 혹은 병원에 내원해주세요.{' '}
                  </span>
                )}
              </S.Skin>
              <S.ResultDiv>
                <p>
                  <span style={{ color: '#A566FF', marginRight: '0.5rem' }}>
                    <FaCheck size="15" />
                  </span>
                  {resultDescription}
                </p>
              </S.ResultDiv>
              <S.TwoBtnDiv>
                <S.SkinButton2 onClick={resetAiImage}>다시 검사하기</S.SkinButton2>
                <S.SearchBtn onClick={handleMoveHospital}>동물병원 찾기</S.SearchBtn>
              </S.TwoBtnDiv>
              <S.RecommendDiv>
                <S.Recommend>
                  추천 수의사 <span style={{ color: 'blue' }}>TOP5</span>
                </S.Recommend>
              </S.RecommendDiv>
              <S.ChatListContainer>
                <S.ChatLists>
                  {topVets?.map((vet, index) => (
                    <ChatList
                      key={vet.name + index}
                      userToken={auth}
                      name={vet.name}
                      hospitalName={vet.hospital_name}
                      profileImg={vet?.users?.img_path}
                      doctorEmail={vet.user_email}
                      grade={vet.grade}
                      role={userData?.user?.role}
                      description={vet?.description}
                    />
                  ))}
                </S.ChatLists>
              </S.ChatListContainer>
              <S.MoreVetsDiv>
                <S.MoreVets onClick={handleMoveChat}>
                  수의사 더보기
                  <BsArrowRightShort size="12" />
                </S.MoreVets>
              </S.MoreVetsDiv>
            </>
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
