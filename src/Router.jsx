import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import SignUp from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import ForgotPasswordForm from "./pages/auth/ForgotPassword";
import ChangePasswordForm from "./pages/auth/ChangePassword";
import ErrorPage from "./components/ui/ErrorPage"; // Create this component
import NotFoundPage from "./components/ui/NotFoundPage"; // Create this component
import AuthLayout from "./layouts/AuthLayout";
import OnboardingWizard from "./pages/profile/OnboardingWizard";
import BusinessStage from "./pages/profile/BuisnessStage";
import SkillsSelectionPage from "./pages/profile/SkillsSelectionPage";
import SkillsNeededPage from "./pages/profile/SkillsNeededPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthMiddleware>
        <App />
      </AuthMiddleware>
    ),
    errorElement: <ErrorPage />, // Handles errors in this route subtree
    children: [
      {
        index: true, // equivalent to path: "/"
        element: <Signin />,
      },
      {
        path: "notifications",
        element: <Signin />,
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: (
      <AuthLayout>
        <Signin />
      </AuthLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgot-password",
    element: (
      <AuthLayout>
        <ForgotPasswordForm />
      </AuthLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/change-password",
    element: (
      <AuthLayout>
        <ChangePasswordForm />
      </AuthLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/onboarding-wizard",
    element: (
      // <AuthLayout>
      <OnboardingWizard />
      // </AuthLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/buisness-stage",
    element: (
      // <AuthLayout>
      <BusinessStage />
      // </AuthLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/skills-selection",
    element: (
      // <AuthLayout>
      <SkillsSelectionPage />
      // </AuthLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/skills-needed",
    element: (
      // <AuthLayout>
      <SkillsNeededPage />
      // </AuthLayout>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "*", // Catch-all route for 404
    element: <NotFoundPage />,
  },
]);
