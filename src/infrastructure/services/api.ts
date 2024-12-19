import axios, { AxiosInstance } from "axios";
import toast from "react-hot-toast";
// Interfaces
import { ApiService } from "../../core/interfaces/api";
// Utils
import { localStorageKeys } from "../../shared/config/localStorageKeys";

export class ApiServiceImpl implements ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    this.axiosInstance.interceptors.request.use(
      async (config) => {
        const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    this.axiosInstance.interceptors.response.use(undefined, async (err) => {
      const msgError = err.response?.data?.message;

      if (err.response?.status === 401) {
        toast.error("Sessão expirada!");

        localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

        window.location.href = "/login";
      }

      return Promise.reject(msgError || err.message);
    });
  }

  async get<T>(url: string, config?: object): Promise<T> {
    return this.axiosInstance.get(url, config).then((response) => response.data);
  }

  async post<T>(url: string, data?: Record<string, any>, params?: Record<string, any>, config?: object): Promise<T> {
    if (params && typeof params === 'object') {
      const urlWithParams = new URL(url, this.axiosInstance.defaults.baseURL);

      Object.keys(params).forEach(key => {
        urlWithParams.searchParams.append(key, params[key]);
      });

      return this.axiosInstance.post(urlWithParams.toString(), config).then((response) => response.data);
    }

    return this.axiosInstance.post(url, data, config).then((response) => response.data);
  }

  async put<T>(url: string, data?: object, config?: object): Promise<T> {
    return this.axiosInstance.put(url, data, config).then((response) => response.data);
  }

  async delete<T>(url: string, config?: object): Promise<T> {
    return this.axiosInstance.delete(url, config).then((response) => response.data);
  }
}
