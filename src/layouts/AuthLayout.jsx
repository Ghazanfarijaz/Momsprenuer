const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-2 py-3 md:px-20 md:py-5 ">
      {/* Orange Container with responsive sizing */}
      <div
        className="w-full  bg-orange-50 py-5 sm:px-3 md:px-20 lg:px-[160px] xl:px-[370px]  rounded-3xl shadow-lg transition-all duration-300"
        style={{ backgroundColor: "#F5F1E8" }}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
