import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Requests from "./pages/Requests";
import Vendors from "./pages/Vendors";
import  RequestDetails  from "./pages/RequestDetails";
import VendorDetails from "./pages/VendorDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/vendors" element={<Vendors />} />
        </Route>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
        <Route path="/requests/:id" element={<RequestDetails />} />
        <Route path="/vendors/:id" element={<VendorDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;