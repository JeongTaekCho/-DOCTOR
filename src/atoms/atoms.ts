import { atom } from 'jotai';

const getAuth = (): string | null => {
  const token = sessionStorage.getItem('token');
  return token;
};

export const tokenAtom = atom(getAuth());
