// import { createBrowserRouter } from "react-router";
// // import Dashboard from "./pages/Dashboard";
// import App from "./App";
// import AuthMiddleware from "./middlewares/AuthMiddleware";
// // import Deliveries from "./pages/Deliveries";
// // import Tickets from "./pages/Tickets";
// // import DeliveryDetails from "./pages/DeliveryDetails";
// // import TicketDetails from "./pages/TicketDetails";
// // import Login from "./pages/Login";

// // import SidebarLayout from "./layouts/SidebarLayout";
// // import ResetPassword from "./pages/ResetPassword";
// // import UserList from "./pages/users/UserList";
// // import AddNewUser from "./pages/users/add-new-user/AddNewUser";
// // import EditUserDetails from "./pages/users/edit-user-details/EditUserDetails";
// // import ProfileSettings from "./pages/admin/ProfileSettings";

// import SignUp from "./pages/auth/Signup";
// import Signin from "./pages/auth/Signin";
// import ForgotPasswordForm from "./pages/auth/ForgotPassword";
// import ChangePasswordForm from "./pages/auth/ChangePassword";

// export const router = createBrowserRouter([
//   {
//     path: "",
//     element: (
//       <AuthMiddleware>
//         {/* <SidebarLayout> */}
//         <App />
//         {/* </SidebarLayout> */}
//       </AuthMiddleware>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <Signin />,
//       },

//       {
//         path: "/notifications",
//         element: <Signin />,
//       },
//     ],
//   },
//   {
//     path: "/Signup",
//     element: (
//       // <AuthLayout>
//       <SignUp />
//     ),
//   },
//   {
//     path: "/Signin",
//     element: (
//       // <AuthLayout>
//       <Signin />
//     ),
//   },
//   {
//     path: "/forgot-password",
//     element: (
//       // <AuthLayout>
//       <ForgotPasswordForm />
//     ),
//   },
//   {
//     path: "/change-password",
//     element: (
//       // <AuthLayout>
//       <ChangePasswordForm />
//     ),
//   },
// ]);

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
    path: "*", // Catch-all route for 404
    element: <NotFoundPage />,
  },
]);
