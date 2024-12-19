import { useQuery } from "@tanstack/react-query";
//
import { UserResponse } from "../../core/interfaces/response/user.response";

// TODO: ajustar o código para verificar isso
export function useUser(getUser: () => Promise<UserResponse>) {
  const { data, isFetching, isSuccess } = useQuery<UserResponse>({
    queryKey: ["GET", "user"],
    queryFn: getUser,
    staleTime: Infinity,
  });

  return {
    user: data,
    isLoading: isFetching,
    isSuccess,
  };
}
