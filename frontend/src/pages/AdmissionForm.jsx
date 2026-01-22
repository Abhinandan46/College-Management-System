import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdmissionForm() {
  const [form, setForm] = useState({ address:"", phone:"", dob:"" });
  const navigate = useNavigate();

  const submit = async () => {
    await axios.post("http://localhost:5000/api/students/admission", form, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    alert("Admission Submitted");
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
      <div className="container">
        <div className="card form-container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Admission Form</h2>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                required
                placeholder="Enter your full address"
                onChange={e=>setForm({...form, address:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                onChange={e=>setForm({...form, phone:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                required
                onChange={e=>setForm({...form, dob:e.target.value})}
              />
            </div>

            <div className="form-row">
              <button
                type="button"
                onClick={submit}
                className="btn btn-primary"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="btn btn-secondary"
              >
                Back to Dashboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
