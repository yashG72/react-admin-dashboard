import { useState } from "react";

const initialData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Viewer" },
  { id: 4, name: "Bob Martin", email: "bob@example.com", role: "Admin" },
];

const Table = () => {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    const order = field === sortField && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sorted = [...data].sort((a, b) => {
      const valA = a[field].toLowerCase();
      const valB = b[field].toLowerCase();
      if (valA < valB) return order === "asc" ? -1 : 1;
      if (valA > valB) return order === "asc" ? 1 : -1;
      return 0;
    });
    setData(sorted);
  };

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase()) ||
      row.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">📋 Users Table</h2>

      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-2 border rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border cursor-pointer" onClick={() => handleSort("name")}>
                Name {sortField === "name" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="p-3 border cursor-pointer" onClick={() => handleSort("email")}>
                Email {sortField === "email" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="p-3 border cursor-pointer" onClick={() => handleSort("role")}>
                Role {sortField === "role" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">{user.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-3 text-gray-500">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
