import React from 'react';
import { Profile } from './style';

interface ProfileImgProps {
  w: string;
  h: string;
  src: string | null | undefined;
}

const ProfileImg = ({ w, h, src }: ProfileImgProps) => {
  return (
    <Profile
      style={{
        backgroundImage: `url(${src ? src : '/images/commons/kkam.png'})`,
        width: w,
        height: h
      }}
    />
  );
};

export default ProfileImg;
