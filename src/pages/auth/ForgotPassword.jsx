import { useState } from "react";
import { useNavigate } from "react-router";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    navigate("/change-password");
  };

  const handleBackToLogin = () => {
    console.log("Back to login clicked");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-2 py-3 md:px-20 md:py-5">
      {/* Container with responsive sizing */}
      <div
        className="w-full bg-orange-50 sm:px-3 md:px-20 lg:px-[160px] xl:px-[370px] rounded-3xl shadow-lg transition-all duration-300"
        style={{ backgroundColor: "#F5F1E8" }}
      >
        {/* Content Container */}
        <div className="w-full max-w-[400px] mx-auto p-4">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div
              className="bg-purple-900 p-2 rounded-lg mr-2"
              style={{ backgroundColor: "#5D1A1F" }}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Briefcase-heart icon - using a combination of briefcase and heart paths */}
                <path d="M10 2v2h4V2h-4z" />
                <path d="M4 8v11h16V8H4zm16-2v1H4V6h16z" />
                <path d="M12 10l-1.5 1.5L8 14l2 2 2.5-2.5L15 12l-3-3z" />
              </svg>
            </div>
            <div
              className="text-purple-900 font-bold text-xs"
              style={{ color: "#5D1A1F" }}
            >
              <div>MOMPRENEURS</div>
              <div>MATCH</div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1
              className="text-xl sm:text-2xl font-semibold mb-2"
              style={{ color: "#5D1A1F" }}
            >
              Forgot your password?
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: "#5D1A1F" }}>
              Please enter your email address in the field below. We will send
              you a link to your email, allowing you to create a new password.
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-full text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-full py-2 sm:py-3 px-4 sm:px-6 flex items-center justify-center gap-2 font-medium text-xs sm:text-sm transition-colors hover:opacity-90"
              style={{
                backgroundColor: "#C8A8C8",
                color: "#5D1A1F",
                border: "none",
              }}
            >
              <span>Send link to email</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>

          {/* Back to Login Link */}
          <div className="text-center mt-4 sm:mt-6">
            <button
              onClick={handleBackToLogin}
              className="text-xs font-bold underline hover:opacity-80"
              style={{ color: "#5D1A1F" }}
            >
              Back to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
