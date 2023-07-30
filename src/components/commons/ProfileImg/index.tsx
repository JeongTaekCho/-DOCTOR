import React from 'react';
import { Profile } from './style';

interface ProfileImgProps {
  w: string;
  h: string;
  src: string | null | undefined;
}

const ProfileImg = ({ w, h, src }: ProfileImgProps) => {
  return <Profile w={w} h={h} src={src ? src : '/images/commons/kkam.png'} />;
};

export default ProfileImg;
