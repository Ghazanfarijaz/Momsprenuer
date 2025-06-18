import Sidebar from "./../components/Sidebar";
import Navbar from "./../components/Navbar";

const SidebarLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="h-screen md:ms-[256px]">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="h-[calc(100dvh-80px)] w-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
