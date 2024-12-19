export interface LoginRequest {
  username: string;
  password: string;
  role: "admin" | "user";
};
