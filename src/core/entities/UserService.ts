import { AdminResponse } from "../interfaces/response/admin.response";
import { UserResponse } from "../interfaces/response/user.response";

export interface UserService {
  getUser(): Promise<UserResponse>,
  //
  getAdmin(): Promise<AdminResponse>,
}
