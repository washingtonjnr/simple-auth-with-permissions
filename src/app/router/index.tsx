import { BrowserRouter, Route, Routes } from "react-router-dom";
// Auth
import { AdminGuard, AuthGuard, UserGuard } from "./AuthGuard";
// Layouts
import { AuthLayout } from "../../shared/layouts/AuthLayout";
import { DashLayout } from "../../shared/layouts/DashLayout";
// Views
import { Admin } from "../../modules/Admin";
import { Dashboard } from "../../modules/Dashboard";
import { Login } from "../../modules/Login";
import { User } from "../../modules/User";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>

        {/* Dashboard */}
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashLayout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>

        {/* Admin Page */}
        <Route element={<AdminGuard />}>
          <Route element={<DashLayout />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route>

        {/* User Page */}
        <Route element={<UserGuard />}>
          <Route element={<DashLayout />}>
            <Route path="/user" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
