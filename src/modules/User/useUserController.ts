import { useCallback, useEffect, useState } from "react";
//
import { UserService } from "../../core/entities/UserService";
import { UserResponse } from "../../core/interfaces/response/user.response";

export function useUserController(userService: UserService) {
  const [user, setUser] = useState<UserResponse>();
  //
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  //
  const [error, setError] = useState<string>();

  const memoizedUserService = useCallback(() => userService, [userService]);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      setError(undefined);
      setIsSuccess(false);

      try {
        const fetchedUser = await memoizedUserService().getUser();
        setUser(fetchedUser);
        setIsSuccess(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [memoizedUserService]);

  return {
    user,
    isLoading,
    isSuccess,
    error,
  };
}
