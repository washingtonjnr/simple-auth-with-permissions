import { useNavigate } from "react-router-dom";

export function useDashboardController() {
  const navigate = useNavigate();

  const goToAdmin = () => {
    navigate("/admin");
  };

  const goToUser = () => {
    navigate("/user");
  };


  return {
    goToAdmin,
    goToUser
  };
}
