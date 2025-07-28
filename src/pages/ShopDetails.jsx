// ShopDetails.jsx
import { useState } from "react";

const ShopDetails = () => {
  const [shop] = useState({
    name: "Feri Bazar",
    code: "SHOP001",
    owner: "Rafizul",
    contact: "+880123456789",
    address: "Dhaka, Bangladesh",
    type: "Retail",
    regDate: "2025‑06‑01",
    totalOrders: 24,
    totalProducts: 120,
    totalPaid: 150000,
    totalDue: 20000,
    lastOrder: "2025‑07‑25",
  });

  const [history] = useState([
    { id: "ORD‑20250720", date: "2025‑07‑20", count: 50, amount: 50000, paid: 48000, due: 2000, status: "Delivered" },
    { id: "ORD‑20250615", date: "2025‑06‑15", count: 30, amount: 30000, paid: 28000, due: 2000, status: "Pending" },
  ]);

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 space-y-1">
          <h2 className="text-2xl font-semibold">{shop.name}</h2>
          <p>Owner: {shop.owner}</p>
          <p>Contact: {shop.contact}</p>
          <p>Address: {shop.address}</p>
          <p>Type: {shop.type}</p>
          <p>Registered: {shop.regDate}</p>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="text-lg font-medium">Orders</h3>
            <p className="text-xl">{shop.totalOrders}</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="text-lg font-medium">Products</h3>
            <p className="text-xl">{shop.totalProducts}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <h3 className="text-lg font-medium">Paid</h3>
            <p className="text-xl">{shop.totalPaid} tk</p>
          </div>
          <div className="bg-red-50 p-4 rounded">
            <h3 className="text-lg font-medium">Due</h3>
            <p className="text-xl">{shop.totalDue} tk</p>
          </div>
        </div>
      </div>

      {/* Orders History */}
      <div className="bg-white rounded shadow p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Order History</h3>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2">Order ID</th>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Count</th>
              <th className="px-3 py-2">Amount</th>
              <th className="px-3 py-2">Paid</th>
              <th className="px-3 py-2">Due</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="px-3 py-2">{o.id}</td>
                <td className="px-3 py-2">{o.date}</td>
                <td className="px-3 py-2">{o.count}</td>
                <td className="px-3 py-2">{o.amount}</td>
                <td className="px-3 py-2">{o.paid}</td>
                <td className="px-3 py-2">{o.due}</td>
                <td
                  className={`px-3 py-2 font-medium ${
                    o.status === "Delivered"
                      ? "text-green-700"
                      : o.status === "Pending"
                      ? "text-red-700"
                      : "text-gray-600"
                  }`}
                >
                  {o.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopDetails;
