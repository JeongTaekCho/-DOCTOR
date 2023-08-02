export interface postData {
  author_email: string;
  body: string;
  category: string;
  created_at: string;
  deleted_at: string | null;
  id: number;
  like: number;
  title: string;
  updated_at: string | null;
}

export interface PostsResponse {
  currentPage: number;
  pageSize: number;
  total: number | undefined;
  posts: postData[];
}
