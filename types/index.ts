export interface NavItem {
  name: string;
  path: string;
  icon: string;
  active: boolean;
}


export interface SignupData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}



export interface Users extends SignupData{}


export interface Message {
  id: number;
  sender: string;
  receiver: string;
  text: string;
  timestamp: string; // ISO string
}

export interface Conversation {
  id: number;
  username: string;
  avatar: string; // path to avatar image
  lastMessage: string;
  allMessages: Message[];
  timestamp: string; // last activity timestamp
  unreadCount: number;
  isOnline: boolean;
}















