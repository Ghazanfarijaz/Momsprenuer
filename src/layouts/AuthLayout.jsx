import food from "../assets/signupfood.svg";
import food2 from "../assets/food2.svg";
import customer from "../assets/foodeating.svg";
import logo from "../assets/icons/logo.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen min-w-full bg-white">
      {/* Main content area - always centered */}
      <div className="flex flex-1 items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-[440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="Campus Cravings Logo" className="mb-4" />

            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl font-bold">Login</h2>
              <p className="text-[#545454] text-lg">
                Please Login using given Email and Password
              </p>
            </div>

            {children}
          </div>
        </div>
      </div>

      {/* Right side illustration - hidden on mobile */}
      <div className="hidden lg:flex w-1/2 bg-[#F4F4F4] items-center justify-center p-8 relative">
        <div className="flex gap-4 absolute top-8 justify-center w-full">
          <img src={food} alt="Food Icon 1" className="h-14" />
          <img src={food2} alt="Food Icon 2" className="h-14" />
        </div>

        <div className="max-w-xl w-full">
          <img
            src={customer}
            alt="Chef Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
