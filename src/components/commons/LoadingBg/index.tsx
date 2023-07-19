import React from 'react';
import { LoadingBox, Wrap } from './style';

const LoadingBg = () => {
  return (
    <Wrap>
      <LoadingBox>
        <img src="/images/commons/loading.png" alt="로딩 아이콘" />
      </LoadingBox>
    </Wrap>
  );
};

export default LoadingBg;
