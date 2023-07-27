interface Doctor {
  // Doctor 타입에 관련된 프로퍼티들을 정의하세요
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
