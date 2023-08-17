import React, { useState, useRef, MouseEvent, ChangeEvent, useEffect } from 'react';
import * as S from './style';
import Avatar from '@mui/material/Avatar';
import MyManage from '../../components/mypage/Manage';
import List from '../../components/mypage/List';
import { useGetUsersQuery } from '../../hooks/query/useGetUsersQuery';
import { GrClose } from 'react-icons/gr';
import { useRegisterVetMutation } from '../../hooks/query/useRegisterVetMutation';
import Swal from 'sweetalert2';
import { useChangeUserMutation } from '../../hooks/query/useChangeUserMutation';
import { useDeleteVetMutation } from '../../hooks/query/useDeleteVetMutation';
import { useDeleteUserMutation } from '../../hooks/query/useDeleteUserMutation';
import { ROUTE } from '../../constants/routes/routeData';
import { useNavigate } from 'react-router-dom';
import { imgUrl } from '../../api';
import { calculateRemainingDays } from '../../util/getRemaingTime';
import { formatDate } from '../../util/formatDate';
import { useAtomValue } from 'jotai';
import { tokenAtom } from '../../atoms/atoms';

const MyPage = () => {
  const navigate = useNavigate();
  const auth = useAtomValue(tokenAtom);
  const [, setImage] = useState<string | undefined>();
  const [activeTab, setActiveTab] = useState<'manage' | 'list'>('manage');
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [file, setFile] = useState<File>();
  const [name, setName] = useState('');
  const [hospital, setHospital] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');

  const mutation = useChangeUserMutation();
  const registerMutate = mutation.mutate;

  const vetMutation = useDeleteVetMutation();
  const deleteVetMutation = vetMutation.mutate;

  const deleteMutation = useDeleteUserMutation();

  const handleDeleteVet = () => {
    deleteVetMutation();
    refetch();
  };

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    sessionStorage.removeItem('token');
  };

  const { mutate: registerVet } = useRegisterVetMutation();

  const handleDeleteUser = async () => {
    try {
      await deleteMutation.mutateAsync();
      handleLogout();
      navigate(ROUTE.HOME.link);
      window.location.reload();
    } catch (error) {
      Swal.fire('회원 탈퇴 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (!auth) {
      navigate(ROUTE.HOME.link);
    }
  });

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'file') {
      const target = e.currentTarget;
      const files = (target.files as FileList)[0];
      if (files === undefined) {
        return;
      }
      setFile(files);
    }

    if (name === 'name') {
      setName(value);
    }

    if (name === 'hospital') {
      setHospital(value);
    }
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const { data: userData, refetch } = useGetUsersQuery();

  const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData: any = new FormData();
    formData.append('vets', file);
    formData.append('name', name);
    formData.append('hospitalName', hospital);
    formData.append('description', description);
    formData.append('region', region);

    registerVet(formData, {
      onSuccess: () => {
        Swal.fire('신청이 완료되었습니다');
        setModal(false);
        refetch();
      },
      onError: (err: any) => {
        Swal.fire(err.response.data.error);
      }
    });
  };

  const imgInput = useRef<HTMLInputElement | null>(null);

  const handleRegisterImg = (e: MouseEvent<HTMLButtonElement>) => {
    imgInput.current?.click();
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = async () => {
        if (reader.readyState === 2) {
          // 이미지 미리보기
          setImage(reader.result as string);
        }
      };

      const formData: any = new FormData();
      formData.append('users', e.target.files[0]); // img_path 필드 추가

      registerMutate(formData, {
        onSuccess: () => {
          Swal.fire('프로필 사진이 업로드되었습니다');
          refetch();
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleTabChange = (tab: 'manage' | 'list') => {
    setActiveTab(tab);
  };

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

  const certification = userData?.user?.role;
  const vetStatus: any = userData?.vet?.status;
  const userImage = userData?.user?.img_path;
  const userBlockDate = calculateRemainingDays(formatDate(userData?.user?.blocked_at));

  return (
    <S.Wrap>
      <S.Container>
        <S.Profile>
          <S.AvatarDiv>
            <Avatar
              src={`${imgUrl}${userImage}`}
              sx={{ width: '15rem', height: '15rem', margin: 'auto', marginTop: '2rem' }}
            />
            <S.ChangeDiv>
              <S.ResponsiveBiPencil color="gray" onClick={handleRegisterImg} />
            </S.ChangeDiv>
          </S.AvatarDiv>
          <S.LabelDiv>
            <S.Label>
              <S.Input
                ref={imgInput}
                id="profile-img-input"
                type="file"
                accept="image/jpg,image/png,image/jpeg"
                name="img_path"
                onChange={onChange}
              />
              <S.Name>{userData?.user?.nickname}</S.Name>
              {userData?.user?.blocked_at === null ? (
                <S.State>
                  계정상태 <S.StateSpan>정상</S.StateSpan>
                </S.State>
              ) : userBlockDate < 9999 ? (
                <S.State>
                  정지해제 <S.StateSpan>D-{userBlockDate}</S.StateSpan>
                </S.State>
              ) : (
                <S.State style={{ color: 'red' }}>영구정지</S.State>
              )}
            </S.Label>
            {certification === 'user' && (!vetStatus || vetStatus !== 'pending') && (
              <S.CertificationDiv>
                <S.Certification onClick={openModal}>수의사 인증</S.Certification>
              </S.CertificationDiv>
            )}
            {vetStatus === 'pending' && (
              <S.CertificationDiv>
                <S.Certification>인증 대기중</S.Certification>
              </S.CertificationDiv>
            )}
          </S.LabelDiv>
        </S.Profile>
        <S.Detail>
          <S.DetailTop>
            <S.TabItem active={activeTab === 'manage'} onClick={() => handleTabChange('manage')}>
              계정관리
            </S.TabItem>
            <S.TabItem active={activeTab === 'list'} onClick={() => handleTabChange('list')}>
              게시글
            </S.TabItem>
          </S.DetailTop>
          <S.MyDetail>
            {activeTab === 'manage' && (
              <>
                <MyManage vetStatus={vetStatus} />
                <S.DeleteUser>
                  <S.DeleteUserP onClick={openDeleteModal}>회원탈퇴</S.DeleteUserP>
                </S.DeleteUser>
              </>
            )}
            {activeTab === 'list' && <List />}
          </S.MyDetail>
        </S.Detail>
      </S.Container>
      {modal && (
        <S.Modal>
          <S.Card>
            <S.Close onClick={closeModal}>
              <GrClose size="20" />
            </S.Close>
            <S.CardWrap>
              <S.Title2>
                <S.BasicHeader>수의사 정보</S.BasicHeader>
              </S.Title2>
              <S.MainBox>
                <S.LeftText>
                  <S.CenteredText>면허증 첨부</S.CenteredText>
                </S.LeftText>
                <S.InputDiv>
                  <S.FileInput type="file" name="file" onChange={handleChangeInput} />
                </S.InputDiv>
              </S.MainBox>
              <S.MainBox2>
                <S.LeftText>
                  <S.CenteredText>이름</S.CenteredText>
                </S.LeftText>
                <S.InputDiv>
                  <S.RightInput type="text" name="name" value={name} onChange={handleChangeInput} />
                </S.InputDiv>
              </S.MainBox2>
              <S.MainBox2>
                <S.LeftText>
                  <S.CenteredText>병원</S.CenteredText>
                </S.LeftText>
                <S.InputDiv>
                  <S.RightInput
                    type="text"
                    name="hospital"
                    value={hospital}
                    onChange={handleChangeInput}
                  />
                </S.InputDiv>
              </S.MainBox2>
              <S.MainBox2>
                <S.LeftText>
                  <S.CenteredText>병원 소재지</S.CenteredText>
                </S.LeftText>
                <S.InputDiv>
                  <S.Select name="region" value={region} onChange={handleChangeSelect}>
                    <option value="">지역선택</option>
                    <option value="Seoul">서울</option>
                    <option value="Gyeonggi">경기</option>
                    <option value="Incheon">인천</option>
                    <option value="Daejeon">대전</option>
                    <option value="Daegu">대구</option>
                    <option value="Gwangju">광주</option>
                    <option value="Ulsan">울산</option>
                    <option value="Busan">부산</option>
                    <option value="Gangwon">강원도</option>
                    <option value="Chungcheong">충청도</option>
                    <option value="Jeolla">전라도</option>
                    <option value="Gyeongsang">경상도</option>
                    <option value="Jeju">제주도</option>
                  </S.Select>
                </S.InputDiv>
              </S.MainBox2>
              <S.MainBox3>
                <S.LeftText>
                  <S.CenteredText>병원 소개</S.CenteredText>
                </S.LeftText>
                <S.InputDiv2>
                  <S.RightInput2
                    name="description"
                    value={description}
                    onChange={handleChangeTextarea}
                  />
                </S.InputDiv2>
              </S.MainBox3>
              <S.ButtonDiv>
                <S.BlueButton onClick={handleRegister}>확인</S.BlueButton>
                <S.RedButton onClick={closeModal}>취소</S.RedButton>
              </S.ButtonDiv>
            </S.CardWrap>
          </S.Card>
        </S.Modal>
      )}
      {vetStatus === 'rejected' && (
        <S.Modal>
          <S.RejectCard>
            <S.Reject>
              수의사 인증이
              <br /> 거절되었습니다.
            </S.Reject>
            <S.RejectButtonDiv>
              <S.RejectButton onClick={handleDeleteVet}>확인</S.RejectButton>
            </S.RejectButtonDiv>
          </S.RejectCard>
        </S.Modal>
      )}
      {deleteModal && (
        <S.Modal2>
          <S.Card2>
            <S.Reason>정말로 탈퇴하시겠습니까?</S.Reason>
            <S.ReasonDiv></S.ReasonDiv>
            <S.DeleteButtonDiv>
              <S.BlueButton2 onClick={handleDeleteUser}>확인</S.BlueButton2>
              <S.RedButton2 onClick={closeDeleteModal}>취소</S.RedButton2>
            </S.DeleteButtonDiv>
          </S.Card2>
        </S.Modal2>
      )}
    </S.Wrap>
  );
};

export default MyPage;
