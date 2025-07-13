import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 800 },
  { name: 'Mar', users: 600 },
  { name: 'Apr', users: 1200 },
  { name: 'May', users: 900 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-gray-500">📈 Total Revenue</h3>
          <p className="text-2xl font-semibold">$12,400</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-gray-500">👥 Users</h3>
          <p className="text-2xl font-semibold">1,200</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-gray-500">✅ Completed Tasks</h3>
          <p className="text-2xl font-semibold">89</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">📊 Monthly Active Users</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
