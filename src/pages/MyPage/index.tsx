import React, { useState, useRef } from 'react';
import * as S from './style';
import Avatar from '@mui/material/Avatar';
import MyManage from '../../components/mypage/Manage';
import List from '../../components/mypage/List';
import { BiPencil } from 'react-icons/bi';
// import { useGetUsersQuery } from '../../hooks/query/useGetUsersQuery';
import { GrClose } from 'react-icons/gr';

const MyPage = () => {
  const [image, setImage] = useState<string | undefined>(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const [activeTab, setActiveTab] = useState<'manage' | 'list'>('manage');
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      // 업로드 취소할 시
      setImage(undefined);
    }
  };

  const handleTabChange = (tab: 'manage' | 'list') => {
    setActiveTab(tab);
  };

  const imgInput = useRef<HTMLInputElement | null>(null);

  // const { data: userData } = useGetUsersQuery();
  const certification = 'vet';
  const vetStatus = 'pending';
  return (
    <S.Wrap>
      <S.Container>
        <S.Profile>
          <S.AvatarDiv>
            <Avatar
              src={image}
              sx={{ width: 150, height: 150, margin: 'auto', marginTop: '2rem' }}
            />
            <S.ChangeDiv>
              <BiPencil size="48" color="gray" onClick={() => imgInput.current?.click()} />
            </S.ChangeDiv>
          </S.AvatarDiv>
          <S.Label htmlFor="profile-img-input">
            <S.Input
              ref={imgInput}
              id="profile-img-input"
              type="file"
              accept="image/jpg,image/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
            />
            {/* <S.Name>{userData?.data?.user?.nickname}</S.Name> */}
            <S.Name>유승제</S.Name>
            <S.State>
              계정상태: <S.StateSpan>정상</S.StateSpan>
            </S.State>
          </S.Label>
          {certification === 'user' && (
            <S.CertificationDiv>
              <S.Certification onClick={openModal}>수의사 인증</S.Certification>
            </S.CertificationDiv>
          )}
          {vetStatus === 'pending' && (
            <S.CertificationDiv>
              <S.Certification>인증 대기중</S.Certification>
            </S.CertificationDiv>
          )}
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
            {activeTab === 'manage' && <MyManage vetStatus={vetStatus} />}
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
                  <S.FileInput type="file" />
                </S.InputDiv>
              </S.MainBox>
              <S.MainBox2>
                <S.LeftText>
                  <S.CenteredText>이름</S.CenteredText>
                </S.LeftText>
                <S.InputDiv>
                  <S.RightInput />
                </S.InputDiv>
              </S.MainBox2>
              <S.MainBox2>
                <S.LeftText>
                  <S.CenteredText>병원</S.CenteredText>
                </S.LeftText>
                <S.InputDiv>
                  <S.RightInput />
                </S.InputDiv>
              </S.MainBox2>
              <S.MainBox2>
                <S.LeftText>
                  <S.CenteredText>병원 소재지</S.CenteredText>
                </S.LeftText>
                <S.InputDiv>
                  <S.Select>
                    <option value="">지역선택</option>
                    <option value="학생">서울</option>
                    <option value="회사원">경기</option>
                    <option value="기타">인천</option>
                    <option value="기타">대전</option>
                    <option value="기타">대구</option>
                    <option value="기타">광주</option>
                    <option value="기타">울산</option>
                    <option value="기타">부산</option>
                    <option value="기타">강원도</option>
                    <option value="기타">충청도</option>
                    <option value="기타">전라도</option>
                    <option value="기타">경상도</option>
                    <option value="기타">제주도</option>
                  </S.Select>
                </S.InputDiv>
              </S.MainBox2>
              <S.MainBox3>
                <S.LeftText>
                  <S.CenteredText>병원 소개</S.CenteredText>
                </S.LeftText>
                <S.InputDiv2>
                  <S.RightInput2 />
                </S.InputDiv2>
              </S.MainBox3>
              <S.ButtonDiv>
                <S.BlueButton>확인</S.BlueButton>
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
              <S.RejectButton>확인</S.RejectButton>
            </S.RejectButtonDiv>
          </S.RejectCard>
        </S.Modal>
      )}
    </S.Wrap>
  );
};

export default MyPage;
