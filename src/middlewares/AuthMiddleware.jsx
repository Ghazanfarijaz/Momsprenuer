import Cookies from "js-cookie";

const AuthMiddleware = ({ children }) => {
  const accessToken = Cookies.get("accessToken");
  const userData = localStorage.getItem("userData");

  if (!accessToken || !userData) {
    // Redirect to login page if access token is not present
    window.location.href = "/signin";
    return null;
  }

  return <>{children}</>;
};

export default AuthMiddleware;
