import { ILogin } from "../interfaces/login";
import { LoginResponse } from "../interfaces/response/login.response";

export class LoginAdapter {
  static fromJson(data: LoginResponse): ILogin {
    return {
      tokenType: data.token_type,
      accessToken: data.access_token,
    }
  }
}
