interface Doctor {
  id: number;
  name: string;
  hospital_name: string;
  img_path: string;
  user_email: string;
  grade: number;
  chat_count: number | null;
  created_at: Date;
  deleted_at: Date | null;
  description: string;
  region: string;
  status: string;
  updated_at: Date | null;
  users: {
    img_path: string;
  };
}

export interface DoctorListResponse {
  data: Doctor[];
  currentPage: number;
  totalPages: number;
}
