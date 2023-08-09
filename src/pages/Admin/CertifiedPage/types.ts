import { ReactNode } from 'react';

export interface VetAuthListData {
  id: number;
  user_email: string;
  name: string;
  hospital_name: string;
  description: string;
  region: string;
  img_path: string;//'수의사인증서'
  chat_count: number | null;
  grade: number | null;
  status: string;
  created_at: ReactNode | string;
  updated_at: ReactNode | string;
  deleted_at: null | Date | string;
  users: {
    img_path: string | null;//'프로필이미지'
  };
}

export interface VetAuthListResponse {
  currentPage: number;
  totalPages: number;
  data: VetAuthListData[];
}
