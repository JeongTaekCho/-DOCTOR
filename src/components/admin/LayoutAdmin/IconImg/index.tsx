import React from 'react';
import { Icon } from './style';

interface IconImgProps {
  w: string;
  h: string;
  src: string | null | undefined;
}

const IconImg = ({ w, h, src }: IconImgProps) => {
  return <Icon w={w} h={h} src={src ? src : '/images/commons/certified1.png'} />;
};

export default IconImg;
