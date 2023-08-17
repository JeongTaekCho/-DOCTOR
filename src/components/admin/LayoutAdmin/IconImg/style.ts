import { styled } from 'styled-components';

interface IconProps {
  w: string;
  h: string;
  src: string | null | undefined;
}

export const Icon = styled.div<IconProps>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  opacity: 70%;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  //border: 1px solid #999;
  //border-radius: 50%;
  //background-color: #fff;
`;
