export interface UserRequest {
  username: string;
  password: string;
  role: "user" | "admin";
};
