export interface ReportCommentData {
  reports: {
    id: number;
    content: string;
    status: string;
    created_at: string;
  };
  comments: {
    id: number;
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

export interface ReportCommentResponse {
  currentPage: number;
  totalPages: number;
  data: ReportCommentData[];
}
