import { ReactNode } from 'react';

export interface VetAuthListData {
  id: number;
  user_email: string;
  name: string;
  hospital_name: string;
  description: string;
  region: string;
  img_path: string;
  chat_count: number | null;
  grade: number | null;
  status: string;
  created_at: ReactNode | string;
  updated_at: ReactNode | string;
  deleted_at: null | Date | string;
  users: {
    img_path: string | null;
  };
}

export interface VetAuthListResponse {
  currentPage: number;
  totalPages: number;
  data: VetAuthListData[];
}
