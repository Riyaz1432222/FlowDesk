import {
  ArrowLeft,
  CheckCircle2,
  Package,
  Server,
  UserRound,
  XCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/vendor-details.css";

const vendor = {
  id: "VEN-001",
  name: "Global Commodities Ltd",
  type: "Commodity Supplier",
  status: "Active",
  sourceSystem: "Trade Management System",
  contact: "vendor.support@globalcommodities.com",
  commodities: ["Gold", "Platinum", "Silver"],
  totalRequests: 28,
  completedRequests: 19,
  pendingRequests: 6,
  failedRequests: 3,
};

const requests = [
  {
    id: "REQ-1001",
    commodity: "Gold",
    receivedOn: "16 Sep 2026, 09:42 AM",
    stage: "Settlement",
    status: "In Progress",
  },
  {
    id: "REQ-0988",
    commodity: "Platinum",
    receivedOn: "15 Sep 2026, 02:18 PM",
    stage: "Completed",
    status: "Completed",
  },
  {
    id: "REQ-0974",
    commodity: "Gold",
    receivedOn: "14 Sep 2026, 11:25 AM",
    stage: "Vendor Validation",
    status: "Pending",
  },
  {
    id: "REQ-0959",
    commodity: "Silver",
    receivedOn: "13 Sep 2026, 04:10 PM",
    stage: "Completed",
    status: "Completed",
  },
];

function VendorDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="vendor-details-page">
      <div className="vendor-details-topbar">
        <button
          className="vendor-back-button"
          onClick={() => navigate("/vendors")}
        >
          <ArrowLeft size={18} />
          Back to Vendors
        </button>

        <button className="vendor-edit-button">
          Edit Vendor
        </button>
      </div>

      <div className="vendor-header-card">
        <div className="vendor-header-left">
          <div className="vendor-avatar">
            <UserRound size={26} />
          </div>

          <div>
            <span className="vendor-id">
              {id || vendor.id}
            </span>

            <h1>{vendor.name}</h1>

            <p>{vendor.type}</p>
          </div>
        </div>

        <span className="vendor-active-status">
          <CheckCircle2 size={15} />
          {vendor.status}
        </span>
      </div>

      <div className="vendor-stat-grid">
        <div className="vendor-stat-card">
          <div className="vendor-stat-icon">
            <Package size={19} />
          </div>
          <div>
            <span>Total Requests</span>
            <strong>{vendor.totalRequests}</strong>
          </div>
        </div>

        <div className="vendor-stat-card">
          <div className="vendor-stat-icon">
            <CheckCircle2 size={19} />
          </div>
          <div>
            <span>Completed</span>
            <strong>{vendor.completedRequests}</strong>
          </div>
        </div>

        <div className="vendor-stat-card">
          <div className="vendor-stat-icon">
            <Server size={19} />
          </div>
          <div>
            <span>Pending</span>
            <strong>{vendor.pendingRequests}</strong>
          </div>
        </div>

        <div className="vendor-stat-card">
          <div className="vendor-stat-icon">
            <XCircle size={19} />
          </div>
          <div>
            <span>Failed</span>
            <strong>{vendor.failedRequests}</strong>
          </div>
        </div>
      </div>

      <div className="vendor-main-grid">
        <section className="vendor-section">
          <div className="vendor-section-heading">
            <h2>Vendor Information</h2>
            <p>Basic vendor and integration details</p>
          </div>

          <div className="vendor-information-grid">
            <div>
              <span>Vendor ID</span>
              <strong>{vendor.id}</strong>
            </div>

            <div>
              <span>Vendor Name</span>
              <strong>{vendor.name}</strong>
            </div>

            <div>
              <span>Vendor Type</span>
              <strong>{vendor.type}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong className="active-text">{vendor.status}</strong>
            </div>

            <div>
              <span>Source System</span>
              <strong>{vendor.sourceSystem}</strong>
            </div>

            <div>
              <span>Contact</span>
              <strong>{vendor.contact}</strong>
            </div>
          </div>
        </section>

        <section className="vendor-section">
          <div className="vendor-section-heading">
            <h2>Commodities</h2>
            <p>Commodities supplied by this vendor</p>
          </div>

          <div className="commodity-list">
            {vendor.commodities.map((commodity) => (
              <div className="commodity-item" key={commodity}>
                <Package size={17} />
                <span>{commodity}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="vendor-section vendor-requests-section">
        <div className="vendor-section-heading">
          <h2>Recent Requests</h2>
          <p>Requests associated with this vendor</p>
        </div>

        <div className="vendor-table-wrapper">
          <table className="vendor-request-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Commodity</th>
                <th>Received On</th>
                <th>Current Stage</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td className="request-link">
                    {request.id}
                  </td>
                  <td>{request.commodity}</td>
                  <td>{request.receivedOn}</td>
                  <td>{request.stage}</td>
                  <td>
                    <span
                      className={
                        request.status === "Completed"
                          ? "vendor-request-status completed"
                          : request.status === "Pending"
                            ? "vendor-request-status pending"
                            : "vendor-request-status progress"
                      }
                    >
                      {request.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="view-request-button"
                      onClick={() =>
                        navigate(`/requests/${request.id}`)
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default VendorDetails;