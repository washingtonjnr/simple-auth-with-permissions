import React, { createContext, ReactNode, useMemo } from "react";
//
import { AuthService } from "../../core/entities/AuthService";
import { UserService } from "../../core/entities/UserService";
import { ApiServiceImpl } from "../../infrastructure/services/api";
import { AuthServiceImpl } from "../../infrastructure/services/auth";
import { UserServiceImpl } from "../../infrastructure/services/user";

interface Services {
  apiService: ApiServiceImpl;
  //
  authService: AuthService;
  userService: UserService;
}

interface ServiceProviderProps {
  children: ReactNode;
}

export const ServicesContext = createContext<Services | undefined>(undefined);

export const ServiceProvider: React.FC<ServiceProviderProps> = ({
  children,
}) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const apiService = useMemo(() => new ApiServiceImpl(apiUrl), [apiUrl]);
  //
  const authService = useMemo(
    () => new AuthServiceImpl(apiService),
    [apiService]
  );
  const userService = useMemo(
    () => new UserServiceImpl(apiService),
    [apiService]
  );

  return (
    <ServicesContext.Provider value={{ apiService, authService, userService }}>
      {children}
    </ServicesContext.Provider>
  );
};
