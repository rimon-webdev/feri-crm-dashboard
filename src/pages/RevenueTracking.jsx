import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const data = [
  { month: "Jan", revenue: 40000, cost: 25000 },
  { month: "Feb", revenue: 35000, cost: 20000 },
  { month: "Mar", revenue: 45000, cost: 27000 },
  { month: "Apr", revenue: 50000, cost: 30000 },
  { month: "May", revenue: 42000, cost: 25000 },
  { month: "Jun", revenue: 47000, cost: 28000 },
];

const RevenueLineChart = () => {
  return (
    <div className="bg-white p-6 rounded shadow w-full">
      <h2 className="text-lg font-semibold mb-4">Monthly Revenue vs Cost</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#4b5563" />
          <YAxis stroke="#4b5563" tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip formatter={(value) => `${value} tk`} />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Revenue" />
          <Line type="monotone" dataKey="cost" stroke="#ef4444" strokeWidth={2} name="Cost" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueLineChart;
