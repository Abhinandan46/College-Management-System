import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Fees() {
  const [fees, setFees] = useState(null);
  const navigate = useNavigate();

  const fetchStatus = async () => {
    const res = await axios.get("http://localhost:5000/api/fees/status", {
      headers: { Authorization: localStorage.getItem("token") }
    });
    setFees(res.data);
  };

  const payFees = async () => {
    await axios.post("http://localhost:5000/api/fees/pay", {}, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    alert("Fees Paid");
    fetchStatus();
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
      <div className="container">
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Fees Section</h2>

          {fees?.paid ? (
            <div className="alert alert-success" style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#27ae60', marginBottom: '0.5rem' }}>✅ Fees Paid Successfully</h3>
              <p>Your fees have been processed.</p>
            </div>
          ) : (
            <div>
              <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Fee Details</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50' }}>
                  Amount: ₹{fees?.amount || 50000}
                </p>
              </div>

              <button
                onClick={payFees}
                className="btn btn-success"
                style={{ width: '100%', padding: '1rem' }}
              >
                Pay Fees
              </button>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={() => navigate("/dashboard")}
              className="btn btn-secondary"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
