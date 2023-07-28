export interface ChatContent {
  chat_room_id: number;
  created_at: Date;
  from_id: string;
  id: number;
  is_from_user: boolean;
  message: string;
}

export interface ChatContentsResponse {
  ChatContents: ChatContent[];
  editable: boolean;
  email: string;
  img_path: string | null;
  nickname: string;
  writable: boolean;
}
