import { useContext } from "react";
// Contexts
import { AuthContext } from "../providers/auth";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useServices must be used within a ServiceProvider");
  }

  return context;
}
