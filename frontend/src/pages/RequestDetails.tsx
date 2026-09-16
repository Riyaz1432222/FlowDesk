import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  FileText,
  Server,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/request-details.css";

type TimelineItem = {
  title: string;
  description: string;
  date: string;
  status: "completed" | "current" | "pending";
};

const requestDetails = {
  id: "REQ-1001",
  trade: "Trade EF",
  receivedOn: "16 Sep 2026, 09:42 AM",
  sourceSystem: "Trade Management System",
  vendor: "Global Commodities Ltd",
  commodityRequested: "Gold",
  commodityPurchased: "Gold",
  currentStage: "Settlement",
  status: "In Progress",
  priority: "High",
};

const timeline: TimelineItem[] = [
  {
    title: "Request Received",
    description: "Request received from Trade Management System.",
    date: "16 Sep 2026, 09:42 AM",
    status: "completed",
  },
  {
    title: "Vendor Validation",
    description: "Vendor details and eligibility were validated.",
    date: "16 Sep 2026, 10:05 AM",
    status: "completed",
  },
  {
    title: "Commodity Validation",
    description: "Requested commodity was validated successfully.",
    date: "16 Sep 2026, 10:28 AM",
    status: "completed",
  },
  {
    title: "Purchase Processing",
    description: "Commodity purchase processing completed.",
    date: "16 Sep 2026, 11:15 AM",
    status: "completed",
  },
  {
    title: "Settlement",
    description: "Settlement processing is currently in progress.",
    date: "16 Sep 2026, 11:40 AM",
    status: "current",
  },
  {
    title: "Completed",
    description: "Request will be marked completed after settlement.",
    date: "Pending",
    status: "pending",
  },
];

function RequestDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="request-details-page">
      <div className="details-topbar">
        <button
          className="back-button"
          onClick={() => navigate("/requests")}
        >
          <ArrowLeft size={18} />
          Back to Requests
        </button>

        <div className="details-actions">
          <button className="secondary-action">
            <FileText size={17} />
            Documents
          </button>

          <button className="primary-action">
            Update Request
          </button>
        </div>
      </div>

      <div className="request-header-card">
        <div>
          <div className="request-id-label">
            REQUEST DETAILS
          </div>

          <h1>{id || requestDetails.id}</h1>

          <p>
            Complete business workflow and request processing journey
          </p>
        </div>

        <div className="request-header-status">
          <span className="status-label">Current Status</span>
          <span className="status-badge status-progress">
            {requestDetails.status}
          </span>
        </div>
      </div>

      <div className="detail-summary-grid">
        <div className="detail-card">
          <div className="detail-card-icon">
            <ShoppingCart size={19} />
          </div>
          <div>
            <span>Trade</span>
            <strong>{requestDetails.trade}</strong>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-card-icon">
            <Clock3 size={19} />
          </div>
          <div>
            <span>Received On</span>
            <strong>{requestDetails.receivedOn}</strong>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-card-icon">
            <Server size={19} />
          </div>
          <div>
            <span>Source System</span>
            <strong>{requestDetails.sourceSystem}</strong>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-card-icon">
            <UserRound size={19} />
          </div>
          <div>
            <span>Vendor</span>
            <strong>{requestDetails.vendor}</strong>
          </div>
        </div>
      </div>

      <div className="details-content-grid">
        <section className="details-section">
          <div className="section-heading">
            <div>
              <h2>Request Information</h2>
              <p>Business and transaction details</p>
            </div>
          </div>

          <div className="information-grid">
            <div className="information-item">
              <span>Request ID</span>
              <strong>{requestDetails.id}</strong>
            </div>

            <div className="information-item">
              <span>Trade</span>
              <strong>{requestDetails.trade}</strong>
            </div>

            <div className="information-item">
              <span>Source System</span>
              <strong>{requestDetails.sourceSystem}</strong>
            </div>

            <div className="information-item">
              <span>Vendor</span>
              <strong>{requestDetails.vendor}</strong>
            </div>

            <div className="information-item">
              <span>Commodity Requested</span>
              <strong>{requestDetails.commodityRequested}</strong>
            </div>

            <div className="information-item">
              <span>Commodity Purchased</span>
              <strong>{requestDetails.commodityPurchased}</strong>
            </div>

            <div className="information-item">
              <span>Current Stage</span>
              <strong>{requestDetails.currentStage}</strong>
            </div>

            <div className="information-item">
              <span>Priority</span>
              <strong>{requestDetails.priority}</strong>
            </div>
          </div>
        </section>

        <section className="details-section">
          <div className="section-heading">
            <div>
              <h2>Workflow Journey</h2>
              <p>End-to-end request processing</p>
            </div>
          </div>

          <div className="workflow-timeline">
            {timeline.map((item, index) => (
              <div
                className={`timeline-item timeline-${item.status}`}
                key={item.title}
              >
                <div className="timeline-marker">
                  {item.status === "completed" ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                <div className="timeline-content">
                  <div className="timeline-title-row">
                    <h3>{item.title}</h3>

                    {item.status === "current" && (
                      <span className="current-tag">Current</span>
                    )}
                  </div>

                  <p>{item.description}</p>
                  <span className="timeline-date">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="details-section activity-section">
        <div className="section-heading">
          <div>
            <h2>Activity History</h2>
            <p>Recent actions performed on this request</p>
          </div>
        </div>

        <div className="activity-table-wrapper">
          <table className="activity-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Activity</th>
                <th>Performed By</th>
                <th>System</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>16 Sep 2026, 11:40 AM</td>
                <td>Settlement processing started</td>
                <td>Workflow Engine</td>
                <td>FlowDesk</td>
                <td>
                  <span className="table-status progress">
                    In Progress
                  </span>
                </td>
              </tr>

              <tr>
                <td>16 Sep 2026, 11:15 AM</td>
                <td>Commodity purchase completed</td>
                <td>System</td>
                <td>Trade Management System</td>
                <td>
                  <span className="table-status success">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>16 Sep 2026, 10:28 AM</td>
                <td>Commodity validation completed</td>
                <td>Riyaz Shaik</td>
                <td>FlowDesk</td>
                <td>
                  <span className="table-status success">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>16 Sep 2026, 10:05 AM</td>
                <td>Vendor validation completed</td>
                <td>Workflow Engine</td>
                <td>FlowDesk</td>
                <td>
                  <span className="table-status success">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default RequestDetails;