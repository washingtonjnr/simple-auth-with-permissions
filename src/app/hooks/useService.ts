import { useContext } from "react";
// Contexts
import { ServicesContext } from "../providers/service";

export function useServices() {
  const context = useContext(ServicesContext);

  if (!context) {
    throw new Error("useServices must be used within a ServiceProvider");
  }

  return context;
}
