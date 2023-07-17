import { styled } from 'styled-components';

export const ChatListBox = styled.div`
  width: 100%;
  padding: 2rem 1.4rem;
  background-color: #fff;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
`;

export const ChatContentsBox = styled.div`
  width: 16.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.3rem;
  font-weight: 400;
  color: #000;
`;

export const ChatContent = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 400;
  color: #696969;
`;

export const Status = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
`;

export const ChatNum = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: #eb4335;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 1.4rem;
  transform: translateY(-50%);
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
