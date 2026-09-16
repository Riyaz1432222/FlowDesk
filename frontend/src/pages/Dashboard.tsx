import {
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock3,
  FileText,
  TrendingUp,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../styles/dashboard.css";

const statusData = [
  { name: "Completed", value: 42 },
  { name: "Pending", value: 18 },
  { name: "In Progress", value: 25 },
  { name: "Failed", value: 5 },
];

const stageData = [
  { stage: "Request Received", requests: 18 },
  { stage: "Vendor Review", requests: 14 },
  { stage: "Compliance", requests: 11 },
  { stage: "Approval", requests: 9 },
  { stage: "Completed", requests: 42 },
];

const recentRequests = [
  {
    id: "REQ-1001",
    trade: "Trade EF",
    vendor: "Global Commodities Ltd",
    commodity: "Gold",
    stage: "Compliance",
    status: "In Progress",
  },
  {
    id: "REQ-1002",
    trade: "Trade EF",
    vendor: "Al Noor Trading",
    commodity: "Silver",
    stage: "Approval",
    status: "Pending",
  },
  {
    id: "REQ-1003",
    trade: "Trade EF",
    vendor: "Gulf Energy Trading",
    commodity: "Crude Oil",
    stage: "Completed",
    status: "Completed",
  },
  {
    id: "REQ-1004",
    trade: "Trade EF",
    vendor: "Eastern Markets",
    commodity: "Copper",
    stage: "Vendor Review",
    status: "In Progress",
  },
  {
    id: "REQ-1005",
    trade: "Trade EF",
    vendor: "Global Commodities Ltd",
    commodity: "Platinum",
    stage: "Request Received",
    status: "Pending",
  },
];

const statusIcons = {
  Completed: <CheckCircle2 size={17} />,
  Pending: <Clock3 size={17} />,
  "In Progress": <Activity size={17} />,
  Failed: <AlertCircle size={17} />,
};

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Overview of your business workflow and requests.</p>
        </div>

        <div className="dashboard-date">Today</div>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={21} />
          </div>

          <div>
            <span>Total Requests</span>
            <strong>90</strong>
            <small>
              <TrendingUp size={13} /> 12% from last month
            </small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon pending-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Pending</span>
            <strong>18</strong>
            <small>Awaiting action</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon progress-icon">
            <Activity size={21} />
          </div>

          <div>
            <span>In Progress</span>
            <strong>25</strong>
            <small>Currently processing</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon completed-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Completed</span>
            <strong>42</strong>
            <small>Successfully completed</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon failed-icon">
            <AlertCircle size={21} />
          </div>

          <div>
            <span>Failed</span>
            <strong>5</strong>
            <small>Requires attention</small>
          </div>
        </div>
      </div>

      <div className="chart-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>Request Status</h3>
              <p>Current distribution of requests</p>
            </div>
          </div>

          <div className="status-chart">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={3}
                >
                  {statusData.map((entry, index) => (
                    <Cell key={entry.name} fill={`hsl(${145 + index * 45}, 55%, 42%)`} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="chart-legend">
              {statusData.map((item) => (
                <div key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>Requests by Stage</h3>
              <p>Requests currently moving through the workflow</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stageData} margin={{ top: 15, right: 10, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="stage" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="requests" radius={[5, 5, 0, 0]} fill="#1e8e5a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="dashboard-card recent-requests">
        <div className="card-header">
          <div>
            <h3>Recent Requests</h3>
            <p>Latest business workflow requests</p>
          </div>

          <button>View all</button>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Trade</th>
                <th>Vendor</th>
                <th>Commodity</th>
                <th>Current Stage</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentRequests.map((request) => (
                <tr key={request.id}>
                  <td className="request-id">{request.id}</td>
                  <td>{request.trade}</td>
                  <td>{request.vendor}</td>
                  <td>{request.commodity}</td>
                  <td>{request.stage}</td>
                  <td>
                    <span
                      className={`status-badge status-${request.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {statusIcons[request.status as keyof typeof statusIcons]}
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;