import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <NavLink to="/" className="hover:text-blue-500">Dashboard</NavLink>
        <NavLink to="/table" className="hover:text-blue-500">Table</NavLink>
        <NavLink to="/calendar" className="hover:text-blue-500">Calendar</NavLink>
        <NavLink to="/kanban" className="hover:text-blue-500">Kanban Board</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
