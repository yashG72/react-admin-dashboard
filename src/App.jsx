import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Table from "./pages/Table.jsx";
import Calendar from "./pages/Calendar.jsx";
import Kanban from "./pages/Kanban.jsx";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="p-6 bg-gray-50 min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/table" element={<Table />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
