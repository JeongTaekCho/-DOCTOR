export interface UserPostResponse {
  id: number;
  author_email: string;
  category: string;
  title: string;
  body: string;
  like: number;
  created_at: Date;
  update_at: Date | null;
  deleted_at: Date | null;
  currentPage: number;
  totalPages: number;
}
