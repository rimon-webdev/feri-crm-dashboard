import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow border-b px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* Title */}
      <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative text-gray-600 hover:text-blue-600">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=11"
            alt="Avatar"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="leading-tight hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">Rafizul Islam</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
