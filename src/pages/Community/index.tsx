import React, { useState } from 'react';
import * as S from './style';
import Free from '../../components/community/Free';
import Info from '../../components/community/Info';

const Community = () => {
  const [activeTab, setActiveTab] = useState<'free' | 'info'>('free');

  const handleTabChange = (tab: 'free' | 'info') => {
    setActiveTab(tab);
  };

  return (
    <S.Wrap>
      <S.Side>
        <S.Free active={activeTab === 'free'} onClick={() => handleTabChange('free')}>
          자유게시판
        </S.Free>
        <S.Info active={activeTab === 'info'} onClick={() => handleTabChange('info')}>
          정보게시판
        </S.Info>
      </S.Side>
      <S.ListDiv>
        {activeTab === 'free' && <Free />}
        {activeTab === 'info' && <Info />}
      </S.ListDiv>
    </S.Wrap>
  );
};

export default Community;
