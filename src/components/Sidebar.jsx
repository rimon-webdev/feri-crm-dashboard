import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Store,
  ShoppingCart,
  DollarSign,
  Boxes,
  LineChart,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white border-b px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow">
        <h2 className="text-xl font-bold text-gray-800">Feri Bazar</h2>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-800 focus:outline-none"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white w-64 h-screen fixed top-0 left-0 z-40 border-r shadow-md transform transition-transform duration-300 ease-in-out 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block pt-14 md:pt-0 overflow-y-auto`}
      >
        <div className="p-5 border-b hidden md:block">
          <h2 className="text-2xl font-bold text-gray-800">Feri Bazar</h2>
        </div>

        <nav className="p-6 text-sm text-gray-700 space-y-2">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                Order
              </NavLink>
            </li>
              <li>
              <NavLink
                to="/shop-details"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                Shop Details
              </NavLink>
            </li>
           <li>
  <NavLink
    to="/daily-product-cost"
    className={({ isActive }) =>
      `flex items-center gap-2 px-3 py-2 rounded-md transition ${
        isActive
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "hover:bg-gray-100 hover:text-blue-600"
      }`
    }
    onClick={() => setOpen(false)}
  >
    <ShoppingCart className="w-4 h-4" />
    Daily Product Cost
  </NavLink>
</li>

            <li>
  <NavLink
    to="/inventory"
    className={({ isActive }) =>
      `flex items-center gap-2 px-3 py-2 rounded-md transition ${
        isActive
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "hover:bg-gray-100 hover:text-blue-600"
      }`
    }
    onClick={() => setOpen(false)}
  >
    <Boxes className="w-4 h-4" />
    Inventory Management
  </NavLink>
</li>

            <li>
  <NavLink
    to="/revenue-tracking"
    className={({ isActive }) =>
      `flex items-center gap-2 px-3 py-2 rounded-md transition ${
        isActive
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "hover:bg-gray-100 hover:text-blue-600"
      }`
    }
    onClick={() => setOpen(false)}
  >
    <LineChart className="w-4 h-4" />
     Revenue Tracking
  </NavLink>
</li>
          

          </ul>
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
