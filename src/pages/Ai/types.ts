export interface VetResponse {
  id: number;
  user_email: string;
  name: string;
  hospital_name: string;
  description: string;
  region: string;
  img_path: string;
  chat_count: null;
  grade: number;
  status: string;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
  users: {
    img_path: string;
  };
}
