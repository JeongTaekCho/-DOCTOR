export interface ChatContent {
  chat_room_id: number;
  created_at: Date;
  from_id: string;
  id: number;
  is_from_user: boolean;
  message: string;
}

export interface ChatUserInfo {
  email: string;
  img_path: string;
  nickname: string;
}

export interface ChatStatus {
  status: string;
  users_chat_rooms_user_emailTousers: ChatUserInfo;
  users_chat_rooms_user_vet_emailTousers: ChatUserInfo;
}

export interface ChatContentsResponse {
  ChatContents: ChatContent[];
  checkStatus: ChatStatus;
  editable: boolean;
  writable: boolean;
}

export interface ChatMessage {
  message: string;
}

export interface ChatListResponse {
  chat_contents: ChatMessage[];
  created_at: Date | null;
  deleted_at: Date | null;
  updated_at: Date | null;
  grade: number | null;
  id: number;
  status: string;
  user_email: string;
  user_vet_email: string;
  users_chat_rooms_user_emailTousers: ChatUserInfo;
  users_chat_rooms_user_vet_emailTousers: ChatUserInfo;
}
