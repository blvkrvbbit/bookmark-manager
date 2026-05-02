import { createBrowserRouter, Navigate } from "react-router-dom";

// Layouts
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

// Route Guard
import ProtectedRoute from "../shared/guards/ProtectedRoute";

// Auth Pages
import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";
import ForgotPassword from "../features/auth/ForgotPassword";
import ResetPassword from "../features/auth/ResetPassword";

// App Pages
import Dashboard from "../features/dashboard/Dashboard";
import Archived from "../features/archived/Archived";
import PublicRoute from "../shared/guards/PublicRoute";

export const router = createBrowserRouter([
  // Auth routes
  {
    element: <AuthLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          { path: "/auth/sign-in", element: <SignIn /> },
          { path: "/auth/sign-up", element: <SignUp /> },
          { path: "/auth/forgot-password", element: <ForgotPassword /> },
          { path: "/auth/reset-password", element: <ResetPassword /> },
        ],
      },
    ],
  },

  // Protected Routes
  {
    element: <AppLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/", element: <Navigate to="/dashboard" /> },
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/archived", element: <Archived /> },
        ],
      },
    ],
  },
]);
