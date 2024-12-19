// Entities
import { UserService } from "../../../core/entities/UserService";
// Interfaces
import { ApiService } from "../../../core/interfaces/api";
import { AdminResponse } from "../../../core/interfaces/response/admin.response";
import { UserResponse } from "../../../core/interfaces/response/user.response";

export class UserServiceImpl implements UserService {
  constructor(private apiService: ApiService) {}

  async getUser(): Promise<UserResponse> {
    try {
      const response = await this.apiService.get<UserResponse>("/user");

      return response;
    } catch (error) {
      throw new Error("Erro ao buscar usuário");
    }
  }

  async getAdmin(): Promise<AdminResponse> {
    try {
      const response = await this.apiService.get<AdminResponse>("/admin");

      return response;
    } catch (error) {
      throw new Error("Erro ao buscar administrador");
    }
  }
}
