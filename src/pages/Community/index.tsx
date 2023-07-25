import React, { useState } from 'react';
import * as S from './style';
import Free from '../../components/community/Free';
import Info from '../../components/community/Info';
import SideBar from '../../components/community/SideBar';

const Community = () => {
  const [activeTab, setActiveTab] = useState<'free' | 'info'>('free');

  const handleTabChange = (tab: 'free' | 'info') => {
    setActiveTab(tab);
  };

  return (
    <S.Wrap>
      <SideBar activeTab={activeTab} handleTabChange={handleTabChange} />
      <S.ListDiv>
        {activeTab === 'free' && <Free />}
        {activeTab === 'info' && <Info />}
      </S.ListDiv>
    </S.Wrap>
  );
};

export default Community;
