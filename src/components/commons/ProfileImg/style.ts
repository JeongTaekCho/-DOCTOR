import { styled } from 'styled-components';

interface ProfileProps {
  w: string | undefined;
  h: string | undefined;
  src: string | null | undefined;
}

export const Profile = styled.div<ProfileProps>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #999;
  border-radius: 50%;
  background-color: #fff;
`;
