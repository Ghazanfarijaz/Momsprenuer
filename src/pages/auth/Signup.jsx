import { useState } from "react";
import { useNavigate } from "react-router";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign-up clicked");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form submitted:", formData);
  };

  const handleLoginClick = () => {
    console.log("Login clicked");
    navigate("/signin");
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-2 py-3 md:px-20 md:py-5 ">
      {/* Orange Container with responsive sizing */}
      <div
        className="w-full bg-orange-50  sm:px-3 md:px-20 lg:px-[160px] xl:px-[370px]  rounded-3xl shadow-lg transition-all duration-300"
        style={{ backgroundColor: "#F5F1E8" }}
      >
        {/* Content Container - will match orange container on mobile */}
        <div className="w-full  max-w-[400px] mx-auto p-4">
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
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
              Create your account
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: "#5D1A1F" }}>
              Enter you details to get started with us
            </p>
          </div>

          {/* Google Sign Up Button */}
          <button
            onClick={handleGoogleSignUp}
            className="w-full rounded-full py-3 px-4 sm:px-6 flex items-center justify-center gap-2 mb-4 sm:mb-6 transition-colors text-xs sm:text-sm font-medium hover:opacity-90"
            style={{
              backgroundColor: "#C8A8C8",
              color: "#5D1A1F",
              border: "none",
            }}
          >
            <span className="text-xs">G</span>
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span
                className="px-2 sm:px-4 text-xs text-gray-500"
                style={{ backgroundColor: "#F5F1E8" }}
              >
                OR
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange("fullName")}
              className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-full text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent"
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange("email")}
              className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-full text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent"
              required
            />

            {/* Password Fields - responsive layout */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange("password")}
                className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-full text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange("confirmPassword")}
                className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-full text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 sm:gap-3 py-1 sm:py-2">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsChange}
                className="mt-1 w-3 h-3 sm:w-4 sm:h-4 rounded border-gray-400"
              />
              <span className="text-xs" style={{ color: "#5D1A1F" }}>
                Agree with our{" "}
                <button
                  type="button"
                  className="font-bold underline hover:opacity-80"
                  style={{ color: "#5D1A1F" }}
                  onClick={() => console.log("Terms clicked")}
                >
                  terms & Conditions
                </button>
              </span>
            </div>

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
              <span>Sign Up</span>
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

          {/* Login Link */}
          <div className="text-center mt-4 sm:mt-6">
            <span className="text-xs" style={{ color: "#5D1A1F" }}>
              Already have an account?{" "}
            </span>
            <button
              onClick={handleLoginClick}
              className="text-xs font-bold underline hover:opacity-80"
              style={{ color: "#5D1A1F" }}
            >
              Login Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
