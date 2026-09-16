import { Eye, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import "../styles/requests.css";

type RequestStatus = "Completed" | "Pending" | "In Progress" | "Failed";

type Request = {
  id: string;
  trade: string;
  receivedOn: string;
  sourceSystem: string;
  vendor: string;
  commodity: string;
  stage: string;
  status: RequestStatus;
};

const requests: Request[] = [
  {
    id: "REQ-1001",
    trade: "Trade EF",
    receivedOn: "16 Sep 2026",
    sourceSystem: "Core Banking",
    vendor: "Global Commodities Ltd",
    commodity: "Gold",
    stage: "Compliance",
    status: "In Progress",
  },
  {
    id: "REQ-1002",
    trade: "Trade EF",
    receivedOn: "16 Sep 2026",
    sourceSystem: "Trade Portal",
    vendor: "Al Noor Trading",
    commodity: "Silver",
    stage: "Approval",
    status: "Pending",
  },
  {
    id: "REQ-1003",
    trade: "Trade EF",
    receivedOn: "15 Sep 2026",
    sourceSystem: "Core Banking",
    vendor: "Gulf Energy Trading",
    commodity: "Crude Oil",
    stage: "Completed",
    status: "Completed",
  },
  {
    id: "REQ-1004",
    trade: "Trade EF",
    receivedOn: "15 Sep 2026",
    sourceSystem: "Trade Portal",
    vendor: "Eastern Markets",
    commodity: "Copper",
    stage: "Vendor Review",
    status: "In Progress",
  },
  {
    id: "REQ-1005",
    trade: "Trade EF",
    receivedOn: "14 Sep 2026",
    sourceSystem: "Core Banking",
    vendor: "Global Commodities Ltd",
    commodity: "Platinum",
    stage: "Request Received",
    status: "Pending",
  },
  {
    id: "REQ-1006",
    trade: "Trade EF",
    receivedOn: "14 Sep 2026",
    sourceSystem: "Trade Portal",
    vendor: "Al Noor Trading",
    commodity: "Gold",
    stage: "Compliance",
    status: "Failed",
  },
  {
    id: "REQ-1007",
    trade: "Trade EF",
    receivedOn: "13 Sep 2026",
    sourceSystem: "Core Banking",
    vendor: "Eastern Markets",
    commodity: "Silver",
    stage: "Completed",
    status: "Completed",
  },
];

function Requests() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [stageFilter, setStageFilter] = useState("All");

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        request.id.toLowerCase().includes(searchValue) ||
        request.vendor.toLowerCase().includes(searchValue) ||
        request.commodity.toLowerCase().includes(searchValue) ||
        request.sourceSystem.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || request.status === statusFilter;

      const matchesStage =
        stageFilter === "All" || request.stage === stageFilter;

      return matchesSearch && matchesStatus && matchesStage;
    });
  }, [search, statusFilter, stageFilter]);

  return (
    <div className="requests-page">
      <div className="requests-header">
        <div>
          <h1>Requests</h1>
          <p>Monitor and manage business workflow requests.</p>
        </div>

        <div className="request-count">
          {filteredRequests.length} Requests
        </div>
      </div>

      <div className="requests-card">
        <div className="request-toolbar">
          <div className="request-search">
            <Search size={17} />
            <input
              type="text"
              placeholder="Search request, vendor, commodity..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="filter-group">
            <SlidersHorizontal size={16} />

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Failed">Failed</option>
            </select>

            <select
              value={stageFilter}
              onChange={(event) => setStageFilter(event.target.value)}
            >
              <option value="All">All Stages</option>
              <option value="Request Received">Request Received</option>
              <option value="Vendor Review">Vendor Review</option>
              <option value="Compliance">Compliance</option>
              <option value="Approval">Approval</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="requests-table-wrapper">
          <table className="requests-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Trade</th>
                <th>Received On</th>
                <th>Source System</th>
                <th>Vendor</th>
                <th>Commodity</th>
                <th>Current Stage</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((request) => (
                  <tr key={request.id}>
                    <td className="request-id">{request.id}</td>
                    <td>{request.trade}</td>
                    <td>{request.receivedOn}</td>
                    <td>{request.sourceSystem}</td>
                    <td>{request.vendor}</td>
                    <td>{request.commodity}</td>
                    <td>{request.stage}</td>
                    <td>
                      <span
                        className={`request-status status-${request.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td>
                      <button className="view-button" title="View request">
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="empty-state">
                    No requests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Requests;