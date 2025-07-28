import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PerShopSaleTable from "../components/PerShopSaleTable";

const pieData = [
  { name: "Shop A", value: 46 },
  { name: "Shop B", value: 25 },
  { name: "Shop C", value: 21 },
  { name: "Others", value: 8 },
];

const COLORS = ["#4f46e5", "#06b6d4", "#f97316", "#facc15"];

const barData = [
  {
    name: "Week 1",
    income: 7000,
    expense: 3000,
  },
  {
    name: "Week 2",
    income: 5000,
    expense: 2000,
  },
  {
    name: "Week 3",
    income: 7500,
    expense: 2500,
  },
  {
    name: "Week 4",
    income: 6000,
    expense: 2500,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Charts and Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {/* Per Shop Sale Pie */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-center font-semibold mb-2">Per Shop Sale</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Tracking Bar */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-center font-semibold mb-2">Revenue Tracking</h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="income" fill="#4ade80" />
                <Bar dataKey="expense" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Production Box */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-center font-semibold mb-2">
            Daily Production & Costing
          </h2>
          <div className="space-y-2 text-sm">
            <div className="bg-gray-100 p-2 rounded">
              Today Total Production : <strong>500</strong>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              Per Costing : <strong>5000 tk</strong>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              Total Costing : <strong>5000 tk</strong>
            </div>
          </div>
        </div>

        {/* Inventory Management Pie */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-center font-semibold mb-2">
            Inventory Management
          </h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Per Shop Sale Table */}
      <div className="overflow-x-auto">
        <PerShopSaleTable />
      </div>
    </div>
  );
}
