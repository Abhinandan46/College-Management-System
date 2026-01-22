import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students/profile", {
          headers: { Authorization: token }
        });
        setStudent(response.data);
      } catch (error) {
        alert("Failed to load profile");
        navigate("/");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!student) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="loading"></div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        <div className="card fade-in" style={{ marginBottom: '2rem' }}>
          <div className="flex-between" style={{ marginBottom: '2rem' }}>
            <div>
              <h1 style={{ margin: '0', fontSize: '2.5rem' }}>Dashboard</h1>
              <p style={{ color: '#7f8c8d', margin: '0.5rem 0 0 0', fontSize: '1.1rem' }}>
                Welcome back, {student.name}!
              </p>
            </div>
            <button onClick={handleLogout} className="btn btn-secondary">
              Logout
            </button>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card slide-up" style={{ animationDelay: '0.1s' }}>
              <h3>📚 Course Information</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '500', color: '#34495e' }}>
                {student.course}
              </p>
              <p style={{ color: '#7f8c8d', marginTop: '0.5rem' }}>
                Admission Status: <span style={{
                  color: student.admissionStatus === 'Approved' ? '#27ae60' : '#f39c12',
                  fontWeight: '600'
                }}>{student.admissionStatus}</span>
              </p>
            </div>

            <div className="dashboard-card slide-up" style={{ animationDelay: '0.2s' }}>
              <h3>💰 Fee Status</h3>
              <p style={{
                fontSize: '1.1rem',
                fontWeight: '500',
                color: student.feePaid ? '#27ae60' : '#e74c3c'
              }}>
                {student.feePaid ? 'Paid' : 'Pending'}
              </p>
              <p style={{ color: '#7f8c8d', marginTop: '0.5rem' }}>
                {student.feePaid ? 'All fees have been paid' : 'Please complete your fee payment'}
              </p>
            </div>

            <div className="dashboard-card slide-up" style={{ animationDelay: '0.3s' }}>
              <h3>📊 Academic Progress</h3>
              <p style={{ color: '#7f8c8d' }}>
                Track your semester results and academic performance
              </p>
            </div>
          </div>

          <div className="dashboard-actions">
            <button onClick={() => navigate('/admission')} className="btn btn-primary">
              📝 Update Admission Details
            </button>
            <button onClick={() => navigate('/fees')} className="btn btn-success">
              💳 Manage Fees
            </button>
            <button onClick={() => navigate('/results')} className="btn btn-secondary">
              📈 View Results
            </button>
            <button onClick={() => navigate('/admit-card')} className="btn btn-primary">
              🎓 Download Admit Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}