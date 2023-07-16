import React from 'react';
import { Profile } from './style';

interface ProfileImgProps {
  w: string;
  h: string;
  src: string;
}

const ProfileImg = ({ w, h, src }: ProfileImgProps) => {
  return <Profile style={{ backgroundImage: `url(${src})`, width: w, height: h }} />;
};

export default ProfileImg;
