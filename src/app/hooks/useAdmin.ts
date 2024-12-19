import { useQuery } from "@tanstack/react-query";
import { UserResponse } from "../../core/interfaces/response/user.response";

export function useAdmin(signedIn: boolean, getAdmin: () => UserResponse) {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["GET", "admin"],
    queryFn: () => getAdmin(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  return {
    user: data,
    isLoading: isFetching,
    isSuccess: isSuccess,
  }
}
