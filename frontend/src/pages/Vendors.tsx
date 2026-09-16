import { Eye, Search, UsersRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import "../styles/vendors.css";

type VendorStatus = "Active" | "Inactive";

type Vendor = {
  id: string;
  name: string;
  type: string;
  commodities: string;
  sourceSystem: string;
  totalRequests: number;
  completed: number;
  pending: number;
  status: VendorStatus;
};

const vendors: Vendor[] = [
  {
    id: "VEN-001",
    name: "Global Commodities Ltd",
    type: "Commodity Supplier",
    commodities: "Gold, Platinum, Silver",
    sourceSystem: "Trade Management System",
    totalRequests: 28,
    completed: 19,
    pending: 6,
    status: "Active",
  },
  {
    id: "VEN-002",
    name: "Al Noor Trading",
    type: "Commodity Supplier",
    commodities: "Silver, Copper",
    sourceSystem: "Trade Management System",
    totalRequests: 21,
    completed: 15,
    pending: 4,
    status: "Active",
  },
  {
    id: "VEN-003",
    name: "Gulf Energy Trading",
    type: "Energy Supplier",
    commodities: "Crude Oil",
    sourceSystem: "Energy Trading System",
    totalRequests: 17,
    completed: 12,
    pending: 3,
    status: "Active",
  },
  {
    id: "VEN-004",
    name: "Eastern Markets",
    type: "Commodity Supplier",
    commodities: "Copper, Gold",
    sourceSystem: "Market Integration System",
    totalRequests: 14,
    completed: 9,
    pending: 3,
    status: "Active",
  },
  {
    id: "VEN-005",
    name: "Prime Metals Trading",
    type: "Metal Supplier",
    commodities: "Gold, Silver",
    sourceSystem: "Trade Management System",
    totalRequests: 10,
    completed: 6,
    pending: 2,
    status: "Inactive",
  },
];

function Vendors() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | VendorStatus>(
    "All"
  );

  const filteredVendors = useMemo(() => {
    return vendors.filter((vendor) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        vendor.id.toLowerCase().includes(searchValue) ||
        vendor.name.toLowerCase().includes(searchValue) ||
        vendor.type.toLowerCase().includes(searchValue) ||
        vendor.commodities.toLowerCase().includes(searchValue) ||
        vendor.sourceSystem.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || vendor.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="vendors-page">
      <div className="vendors-header">
        <div>
          <span className="page-label">MASTER DATA</span>
          <h1>Vendors</h1>
          <p>
            Manage vendors, commodities and connected business systems.
          </p>
        </div>

        <button className="add-vendor-button">
          + Add Vendor
        </button>
      </div>

      <div className="vendor-summary-grid">
        <div className="vendor-summary-card">
          <div className="vendor-summary-icon">
            <UsersRound size={20} />
          </div>

          <div>
            <span>Total Vendors</span>
            <strong>{vendors.length}</strong>
          </div>
        </div>

        <div className="vendor-summary-card">
          <div className="vendor-summary-icon">
            <UsersRound size={20} />
          </div>

          <div>
            <span>Active Vendors</span>
            <strong>
              {vendors.filter((vendor) => vendor.status === "Active").length}
            </strong>
          </div>
        </div>

        <div className="vendor-summary-card">
          <div className="vendor-summary-icon">
            <UsersRound size={20} />
          </div>

          <div>
            <span>Total Requests</span>
            <strong>
              {vendors.reduce(
                (total, vendor) => total + vendor.totalRequests,
                0
              )}
            </strong>
          </div>
        </div>

        <div className="vendor-summary-card">
          <div className="vendor-summary-icon">
            <UsersRound size={20} />
          </div>

          <div>
            <span>Pending Requests</span>
            <strong>
              {vendors.reduce(
                (total, vendor) => total + vendor.pending,
                0
              )}
            </strong>
          </div>
        </div>
      </div>

      <div className="vendors-table-card">
        <div className="vendors-toolbar">
          <div className="vendor-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search vendor, commodity or system..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(
                event.target.value as "All" | VendorStatus
              )
            }
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="vendors-table-wrapper">
          <table className="vendors-table">
            <thead>
              <tr>
                <th>Vendor ID</th>
                <th>Vendor</th>
                <th>Type</th>
                <th>Commodities</th>
                <th>Source System</th>
                <th>Requests</th>
                <th>Completed</th>
                <th>Pending</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredVendors.map((vendor) => (
                <tr key={vendor.id}>
                  <td className="vendor-id-cell">
                    {vendor.id}
                  </td>

                  <td>
                    <div className="vendor-name-cell">
                      <div className="vendor-small-avatar">
                        {vendor.name.charAt(0)}
                      </div>

                      <strong>{vendor.name}</strong>
                    </div>
                  </td>

                  <td>{vendor.type}</td>

                  <td>
                    <div className="commodity-text">
                      {vendor.commodities}
                    </div>
                  </td>

                  <td>{vendor.sourceSystem}</td>

                  <td>{vendor.totalRequests}</td>

                  <td className="completed-number">
                    {vendor.completed}
                  </td>

                  <td className="pending-number">
                    {vendor.pending}
                  </td>

                  <td>
                    <span
                      className={`vendor-status ${
                        vendor.status === "Active"
                          ? "active"
                          : "inactive"
                      }`}
                    >
                      {vendor.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="vendor-view-button"
                      title="View vendor details"
                      onClick={() =>
                        navigate(`/vendors/${vendor.id}`)
                      }
                    >
                      <Eye size={16} />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredVendors.length === 0 && (
            <div className="vendors-empty-state">
              <UsersRound size={28} />
              <h3>No vendors found</h3>
              <p>Try changing your search or status filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Vendors;