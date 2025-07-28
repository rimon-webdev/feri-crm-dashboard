const PerShopSaleTable = () => {
  const tableData = [
    {
      shop: "Shopnno",
      product: 100,
      type: "Bala Chow",
      date: "6/14/2025",
      amount: 10000,
      due: 3000,
      pay: 7000,
    },
    {
      shop: "Shopnno",
      product: 50,
      type: "Chi jal",
      date: "6/14/2025",
      amount: 8000,
      due: 2000,
      pay: 6000,
    },
    {
      shop: "Shopnno",
      product: 75,
      type: "Rice",
      date: "6/14/2025",
      amount: 9000,
      due: 1000,
      pay: 8000,
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Per Shop Sale Summary
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Shop Name</th>
              <th className="px-4 py-3 text-left">Total Product</th>
              <th className="px-4 py-3 text-left">Product Type</th>
              <th className="px-4 py-3 text-left">Delivery Date</th>
              <th className="px-4 py-3 text-left">Total Amount</th>
              <th className="px-4 py-3 text-left">Due</th>
              <th className="px-4 py-3 text-left">Paid</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{idx + 1}</td>
                <td className="px-4 py-3 font-semibold">{item.shop}</td>
                <td className="px-4 py-3">{item.product}</td>
                <td className="px-4 py-3">{item.type}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3 text-green-600 font-medium">
                  ৳{item.amount}
                </td>
                <td className="px-4 py-3 text-red-600">৳{item.due}</td>
                <td className="px-4 py-3 text-blue-600 font-semibold">
                  ৳{item.pay}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerShopSaleTable;
