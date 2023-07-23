import React, { useState } from 'react';
import * as S from './style';
import Avatar from '@mui/material/Avatar';
import MyManage from '../../components/mypage/Manage';
import List from '../../components/mypage/List';
import { BiPencil } from 'react-icons/bi';

const MyPage = () => {
  const [image, setImage] = useState<string | undefined>(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const [activeTab, setActiveTab] = useState<'manage' | 'list'>('manage');

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
              <BiPencil
                size="48"
                color="gray"
                onClick={() => document.getElementById('profile-img-input')?.click()}
              />
            </S.ChangeDiv>
          </S.AvatarDiv>
          <S.Label htmlFor="profile-img-input">
            <S.Input
              id="profile-img-input"
              type="file"
              accept="image/jpg,image/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
            />
            <S.Name>유승제</S.Name>
            <S.State>
              계정상태: <S.StateSpan>정상</S.StateSpan>
            </S.State>
          </S.Label>
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
            {activeTab === 'manage' && <MyManage />}
            {activeTab === 'list' && <List />}
          </S.MyDetail>
        </S.Detail>
      </S.Container>
    </S.Wrap>
  );
};

export default MyPage;
