export interface User {
  id: number;
  nama_lengkap: string;
  avatar: string;
  email: string;
   token?: string
}

export interface AuthResponse {
  isLoggedIn: boolean;
  user?: User;
}