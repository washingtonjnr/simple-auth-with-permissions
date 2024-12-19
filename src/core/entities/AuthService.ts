import { ILogin } from "../interfaces/login";
import { LoginRequest } from "../interfaces/request/login.request";

export interface AuthService {
  login({ username, role, password }: LoginRequest): Promise<ILogin>,
  //
  checkToken(token: string): Promise<boolean>,
}
