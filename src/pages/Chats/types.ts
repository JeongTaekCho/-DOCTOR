interface Doctor {
  id: number;
  name: string;
  hospital_name: string;
  img_path: string;
  user_email: string;
  grade: string;
  chat_count: number | null;
  created_at: Date;
  deleted_at: Date | null;
  description: string;
  region: string;
  status: string;
  updated_at: Date | null;
}

export interface DoctorListResponse {
  data: Doctor[];
  currentPage: number;
  totalPages: number;
}
