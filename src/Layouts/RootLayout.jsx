import { Link, useLocation, Outlet } from "react-router-dom";
import { FiHome, FiUser, FiBook, FiBriefcase, FiMail } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaDownload,
  FaGithub,
} from "react-icons/fa";
import MyImage from "../assets/my-image.jpg";

const RootLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <FiHome />, text: "Home" },
    { path: "/about", icon: <FiUser />, text: "About" },
    { path: "/resume", icon: <FiBook />, text: "Resume" },
    { path: "/portfolio", icon: <FiBriefcase />, text: "Portfolio" },
    // { path: "/blog", icon: <FiBook />, text: "Blog" },
    { path: "/contact", icon: <FiMail />, text: "Contact" },
  ];

  return (
    <div className="h-screen flex flex-col lg:flex-row bg-base-200">
      {/* Sidebar Nav - Desktop Only (Original Design) */}
      <div className="hidden lg:flex w-20 xl:w-24 flex-col items-center pt-14 space-y-10 bg-gray-800 border-r border-gray-900">
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`tooltip tooltip-bottom flex flex-col items-center gap-1 py-2 px-2 rounded transition-all ${
                location.pathname === item.path
                  ? "text-blue-500 scale-105"
                  : "text-gray-400 hover:text-blue-500"
              }`}
              data-tip={item.text}
            >
              <span className="text-4xl transition-transform duration-300 hover:scale-110">
                {item.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Profile Section - Desktop Only */}
      <aside className="hidden lg:flex w-[22rem] bg-gray-800 text-white flex-col items-center justify-between py-20 px-6">
        <div className="flex flex-col items-center">
          <div className="avatar mb-6">
            <div className="w-48 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2">
              <img src={MyImage} alt="Profile" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-1">Sabbir Hossain</h2>
          <p className="text-md text-gray-400 mb-4">Web Developer</p>

          <div className="flex gap-4 mt-4 text-xl mb-6">
            <Link
              to="https://www.linkedin.com/in/sabbir-xd/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://www.facebook.com/sabbir.xd.f"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://github.com/Sabbir-XD"
              target="_blank"
              aria-label="Github"
              className="hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FaGithub />
            </Link>
          </div>
          <Link
            href="/cv.pdf"
            download
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2 transition-all hover:shadow-lg animate-bounce"
          >
            <FaDownload />
            <span>Download CV</span>
          </Link>
        </div>

        <div className="text-sm text-gray-400 mt-10">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white pb-16 lg:pb-0">
        {/* Mobile Header - Only on non-home pages */}
        {location.pathname !== "/" && (
          <div className="lg:hidden px-4 py-3 bg-white shadow-sm sticky top-0 z-10">
            <h1 className="text-xl font-bold text-blue-500">
              {navItems.find((item) => item.path === location.pathname)?.text ||
                "Sabbir"}
            </h1>
          </div>
        )}

        <Outlet />
      </main>

      {/* Mobile Bottom Navigation (Instagram Style) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 shadow-lg z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full ${
                location.pathname === item.path
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs mt-1">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
