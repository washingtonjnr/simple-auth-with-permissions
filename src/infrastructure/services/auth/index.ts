// Entities
import { AuthService } from "../../../core/entities/AuthService";
// Interfaces
import { ApiService } from "../../../core/interfaces/api";
import { ILogin } from "../../../core/interfaces/login";
import { LoginRequest } from "../../../core/interfaces/request/login.request";
import { LoginResponse } from "../../../core/interfaces/response/login.response";

export class AuthServiceImpl implements AuthService {
  constructor(private apiService: ApiService) {}

  async login({ username, role, password }: LoginRequest): Promise<ILogin> {
    try {
      const body = {
        username,
        role,
        password,
      };

      const params = new URLSearchParams(body).toString();

      const response = await this.apiService.post<LoginResponse>(`/token?${params}`);

      return {
        tokenType: response.token_type,
        accessToken: response.access_token,
      } as ILogin;
    } catch (error) {
      throw new Error("Erro ao buscar usuário");
    }
  }

  async checkToken(token: string): Promise<boolean> {
    const response = await this.apiService.post<boolean>("", { token });

    return response;
  }
}


// https://api-onecloud.multicloud.tivit.com/fake/token?username=user&role=user&password=L0XuwPOdS5U

// https://api-onecloud.multicloud.tivit.com/fake/token/?username=user&role=user&password=L0XuwPOdS5U
