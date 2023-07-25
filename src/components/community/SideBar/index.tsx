import React from 'react';
import * as S from './style';

const SideBar = ({ activeTab, handleTabChange }) => {
  return (
    <S.Side>
      <S.Free active={activeTab === 'free'} onClick={() => handleTabChange('free')}>
        자유게시판
      </S.Free>
      <S.Info active={activeTab === 'info'} onClick={() => handleTabChange('info')}>
        정보게시판
      </S.Info>
    </S.Side>
  );
};

export default SideBar;
