import { ExitIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
// Hooks
import { useAuth } from "../../../app/hooks/useAuth";
// Components
import { Logo } from "../Logo";

export function Header() {
  const { removeSignedIn } = useAuth();

  return (
    <header className="w-full flex justify-between items-center bg-white py-2 px-4 rounded-2xl shadow-sm">
      <Link to="/">
        <Logo className="h-4 w-4" />
      </Link>

      <button onClick={removeSignedIn}>
        <ExitIcon />
      </button>
    </header>
  );
}
