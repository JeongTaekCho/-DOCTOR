export interface ReportPostData {
  reports: {
    id: number;
    content: string;
    status: string;
    created_at: string;
  };
  posts: {
    id: number;
    category: string;
    title: string;
    body: string;
    created_at: string | Date;
    users: {
      email: string;
      nickname: string;
      img_path: string;
      blocked_at: string | null;
      deleted_at: string | null;
    };
  };
}

export interface ReportPostResponse {
  currentPage: number;
  totalPages: number;
  data: ReportPostData[];
}
