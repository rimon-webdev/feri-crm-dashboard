import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Bala Chow", category: "Snacks", quantity: 100, price: 50 },
    { id: 2, name: "Chips", category: "Snacks", quantity: 50, price: 20 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", category: "", quantity: "", price: "" });
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    const id = Date.now();
    setInventory([...inventory, { ...newItem, id, quantity: +newItem.quantity, price: +newItem.price }]);
    setNewItem({ name: "", category: "", quantity: "", price: "" });
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setNewItem(item);
  };

  const handleUpdate = () => {
    setInventory(
      inventory.map((item) =>
        item.id === editId ? { ...newItem, id: editId, quantity: +newItem.quantity, price: +newItem.price } : item
      )
    );
    setEditId(null);
    setNewItem({ name: "", category: "", quantity: "", price: "" });
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Inventory Management</h2>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 rounded"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="border p-2 rounded"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="border p-2 rounded"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 rounded"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <div className="col-span-1 md:col-span-4">
          {editId ? (
            <button
              onClick={handleUpdate}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              <Plus className="inline w-4 h-4 mr-1" /> Add Product
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.category}</td>
                <td className="px-4 py-2 border">{item.quantity}</td>
                <td className="px-4 py-2 border">{item.price} tk</td>
                <td className="px-4 py-2 border flex gap-2">
                  <button onClick={() => handleEdit(item)} className="text-blue-500 hover:underline">
                    <Pencil className="w-4 h-4 inline" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:underline">
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryManagement;
