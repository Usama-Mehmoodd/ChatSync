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