import { NavLink } from "react-router-dom";
import {
  BarChart3,
  ClipboardList,
  Settings,
  Users,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">F</div>
        <div>
          <h2>FlowDesk</h2>
          <span>Workflow Platform</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-title">MAIN</p>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <BarChart3 size={19} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/requests"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <ClipboardList size={19} />
          <span>Requests</span>
        </NavLink>

        <NavLink
          to="/vendors"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Users size={19} />
          <span>Vendors</span>
        </NavLink>

        <p className="nav-title settings-title">SYSTEM</p>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Settings size={19} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <button className="logout-button">
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;