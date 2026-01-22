import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdmissionForm from "./pages/AdmissionForm";
import Fees from "./pages/Fees";
import Results from "./pages/Results";
import AdmitCard from "./pages/AdmitCard";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admit-card" element={<AdmitCard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
