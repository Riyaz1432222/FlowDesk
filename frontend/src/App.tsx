import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Requests from "./pages/Requests";
import Vendors from "./pages/Vendors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;