// src/pages/DailyProductCost.jsx
import { useState } from "react";

const DailyProductCost = () => {
  const [date, setDate] = useState("2025-07-26");

  const data = [
    {
      name: "Bala Chow",
      quantity: 500,
      rawCost: 5000,
      laborCost: 1000,
      otherCost: 500,
    },
    {
      name: "Chi Jal",
      quantity: 300,
      rawCost: 3000,
      laborCost: 600,
      otherCost: 200,
    },
  ];

  const totalCost = (item) => item.rawCost + item.laborCost + item.otherCost;

  const grandTotal = data.reduce((acc, item) => acc + totalCost(item), 0);
  const totalQty = data.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Title & Date Picker */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Daily Product Cost</h1>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border px-3 py-2 rounded-md shadow-sm"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Raw Material</th>
              <th className="px-4 py-2">Labor</th>
              <th className="px-4 py-2">Other</th>
              <th className="px-4 py-2">Total Cost</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">{item.rawCost} tk</td>
                <td className="px-4 py-2">{item.laborCost} tk</td>
                <td className="px-4 py-2">{item.otherCost} tk</td>
                <td className="px-4 py-2 font-medium">{totalCost(item)} tk</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="text-sm text-blue-700">Total Quantity</h3>
          <p className="text-xl font-semibold text-blue-900">{totalQty}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="text-sm text-green-700">Total Cost</h3>
          <p className="text-xl font-semibold text-green-900">{grandTotal} tk</p>
        </div>
      </div>
    </div>
  );
};

export default DailyProductCost;
