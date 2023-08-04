export interface AdminUserData {
  nickname: string;
  role: string;
  img_path: string;
  created_at: string;
  blocked_at: string;
  deleted_at: string;
  email: string;
}

export interface AdminUserResponse {
  totalUsersCnt: number;
  currentPage: number;
  totalPages: number;
  data: AdminUserData[];
}
