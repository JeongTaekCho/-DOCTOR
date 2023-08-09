import { User } from './userType';

interface IsLike {
  is_like: boolean;
}

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
  users: User;
  likes: IsLike[];
}

export interface PostsResponse {
  currentPage: number;
  pageSize: number;
  total: number | undefined;
  posts: postData[];
}

export interface UserCommentResponse {
  id: number;
  post_id: number;
  author_email: string;
  body: string;
  group: 0;
  order: 0;
  indent: 0;
  created_at: Date;
  update_at: Date | null;
  deleted_at: Date | null;
  users: User;
}

export interface UserCommentDetail {
  comments: UserCommentResponse[];
}
