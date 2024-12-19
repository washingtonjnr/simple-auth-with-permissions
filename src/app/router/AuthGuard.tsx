import { Navigate, Outlet } from "react-router-dom";
// Hooks
import toast from "react-hot-toast";
import { UserTypes } from "../../core/enums/user";
import { useAuth } from "../hooks/useAuth";

type AuthGuardProps = {
  isPrivate: boolean;
};

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  } else {
    return <Outlet />;
  }
}

export function AdminGuard() {
  const { signedIn, userRole } = useAuth();

  if (!signedIn) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== UserTypes.ADMIN) {
    toast.error("Você não tem permissão para acessar a área do administrador.");

    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export function UserGuard() {
  const { signedIn, userRole } = useAuth();

  if (!signedIn) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== UserTypes.USER) {
    toast.error("Você não tem permissão para acessar a área do usuário.");

    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
