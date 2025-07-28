import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OrderPage from "./pages/OrderPage";
import DashboardPage from "./pages/Dashboard";
import ShopDetails from "./pages/ShopDetails";
import DailyProductCost from "./pages/DailyProductCost";
import InventoryManagement from "./pages/InventoryManagement";
import RevenueTracking from "./pages/RevenueTracking";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="p-4 md:p-6 flex-1">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/shop-details" element={<ShopDetails />} /> 
           <Route path="/daily-product-cost" element={<DailyProductCost />} />
           <Route path="/inventory" element={<InventoryManagement />} />
           <Route path="/revenue-tracking" element={<RevenueTracking />} />
           <Route
              path="/"
              element={
                <h2 className="text-lg text-gray-700 font-semibold">
                  Welcome, Feri Bazar!
                </h2>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
