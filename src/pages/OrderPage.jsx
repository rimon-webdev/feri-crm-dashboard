import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { useState } from "react";

const statusStyles = {
  Delivered: "bg-green-100 text-green-700",
  Pending: "bg-red-100 text-red-700",
  "In transit": "bg-yellow-100 text-yellow-700",
};

const orders = [
  {
    id: "ORD-20240223",
    name: "iPhone 15 Pro Max",
    image: "https://i.imgur.com/QzK2YFz.png",
    category: "Electronics",
    payment: "Pending",
    route: "Jakarta - Surabaya",
    shipDate: "2025-02-15",
    status: "Pending",
    price: "$1,499.00",
  },
  {
    id: "ORD-20240224",
    name: "Samsung Galaxy S24 Ultra",
    image: "https://i.imgur.com/QzK2YFz.png",
    category: "Electronics",
    payment: "Delivered",
    route: "Bandung - Medan",
    shipDate: "2025-02-16",
    status: "Delivered",
    price: "$1,399.00",
  },
  {
    id: "ORD-20240225",
    name: "MacBook Air M2",
    image: "https://i.imgur.com/QzK2YFz.png",
    category: "Computers",
    payment: "In transit",
    route: "Semarang - Yogyakarta",
    shipDate: "2025-02-17",
    status: "In transit",
    price: "$1,199.00",
  },
];

export default function OrderPage() {
  const [search, setSearch] = useState("");
  const tabs = ["All", "Active", "Draft", "In transit", "Completed", "Canceled"];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="space-y-6">
      {/* Tabs + Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b pb-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all font-medium ${
                activeTab === tab
                  ? "bg-blue-100 text-blue-600 border-blue-300"
                  : "text-gray-500 hover:text-blue-500 hover:border-blue-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-4 py-2 rounded-md border text-sm focus:outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Date Picker */}
          <button className="flex items-center text-sm border rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50">
            <Calendar className="w-4 h-4 mr-2" />
            30 Jan - 28 Feb
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md border bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-semibold">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">Cargo ID</th>
              <th className="px-4 py-2 whitespace-nowrap">Item</th>
              <th className="px-4 py-2 whitespace-nowrap">Category</th>
              <th className="px-4 py-2 whitespace-nowrap">Payment</th>
              <th className="px-4 py-2 whitespace-nowrap">Route</th>
              <th className="px-4 py-2 whitespace-nowrap">Ship date</th>
              <th className="px-4 py-2 whitespace-nowrap">Status</th>
              <th className="px-4 py-2 whitespace-nowrap">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {orders
              .filter((order) =>
                order.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <img
                      src={order.image}
                      alt=""
                      className="w-9 h-9 rounded object-cover"
                    />
                    <span>{order.name}</span>
                  </td>
                  <td className="px-4 py-3">{order.category}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statusStyles[order.payment] || "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {order.payment}
                    </span>
                  </td>
                  <td className="px-4 py-3">{order.route}</td>
                  <td className="px-4 py-3">{order.shipDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statusStyles[order.status] || "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{order.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-3">
        <span>1–14 of 126 results</span>
        <div className="flex items-center gap-2">
          <button className="p-1 border rounded hover:bg-gray-100">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-2">1</span>
          <button className="p-1 border rounded hover:bg-gray-100">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
