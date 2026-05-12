export interface LoginPayload {
  username: string;
  password: string;
  remember?: boolean;
}

export interface LoginData {
  accessToken: string;
  token: string;
  refreshToken: string;
}

export interface LoginResponse {
  statusCode: number;
  message: string;
  data: LoginData | string;
}