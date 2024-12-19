import { createContext, useCallback, useEffect, useState } from "react";
// Config
import { UserTypes } from "../../core/enums/user";
import { localStorageKeys } from "../../shared/config/localStorageKeys";

interface AuthContextValue {
  userRole?: UserTypes;
  // Selects
  signedIn: boolean;
  // Dispatchs
  updateUserRole(UserTypes: string): void;
  updateSignedIn(accessToken: string): void;
  removeSignedIn(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userRole, setUserRole] = useState<UserTypes>();

  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAcessToken = window.localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );

    return !!storedAcessToken;
  });

  // Auth user
  const updateSignedIn = useCallback((accessToken: string) => {
    window.localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  // Exit
  const removeSignedIn = useCallback(() => {
    window.localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);

  const updateUserRole = useCallback((type: UserTypes) => {
    window.localStorage.setItem(localStorageKeys.USER_ROLE, type);

    setUserRole(type);
  }, []);

  useEffect(() => {
    const storedRole = window.localStorage.getItem(localStorageKeys.USER_ROLE);

    if (
      storedRole &&
      Object.values(UserTypes).includes(storedRole as UserTypes)
    ) {
      setUserRole(storedRole as UserTypes);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        // Selects
        userRole: userRole,
        signedIn: signedIn,
        // Dispatchs
        updateSignedIn,
        removeSignedIn,
        updateUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
