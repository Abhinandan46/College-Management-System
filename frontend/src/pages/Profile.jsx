import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [student, setStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
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
        setFormData(response.data);
      } catch (error) {
        alert("Failed to load profile");
        navigate("/");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put("http://localhost:5000/api/students/update-profile", formData, {
        headers: { Authorization: token }
      });
      setStudent(response.data.student);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile");
    }
  };

  if (!student) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="loading"></div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        <div className="card fade-in">
          <div className="flex-between" style={{ marginBottom: '2rem' }}>
            <h1>👤 Student Profile</h1>
            <button onClick={() => navigate('/dashboard')} className="btn btn-secondary">
              Back to Dashboard
            </button>
          </div>

          {!isEditing ? (
            <div className="profile-info">
              <div className="profile-section">
                <h3>Personal Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <label>Name:</label>
                    <span>{student.name}</span>
                  </div>
                  <div className="info-item">
                    <label>Email:</label>
                    <span>{student.email}</span>
                  </div>
                  <div className="info-item">
                    <label>Phone:</label>
                    <span>{student.phone || 'Not provided'}</span>
                  </div>
                  <div className="info-item">
                    <label>Date of Birth:</label>
                    <span>{student.dob || 'Not provided'}</span>
                  </div>
                  <div className="info-item">
                    <label>Address:</label>
                    <span>{student.address || 'Not provided'}</span>
                  </div>
                  <div className="info-item">
                    <label>Course:</label>
                    <span>{student.course}</span>
                  </div>
                  <div className="info-item">
                    <label>Admission Status:</label>
                    <span style={{
                      color: student.admissionStatus === 'Approved' ? '#27ae60' : '#f39c12',
                      fontWeight: '600'
                    }}>{student.admissionStatus}</span>
                  </div>
                  <div className="info-item">
                    <label>Fee Status:</label>
                    <span style={{
                      color: student.feePaid ? '#27ae60' : '#e74c3c',
                      fontWeight: '600'
                    }}>{student.feePaid ? 'Paid' : 'Pending'}</span>
                  </div>
                </div>
              </div>

              <div className="profile-actions" style={{ marginTop: '2rem' }}>
                <button onClick={() => setIsEditing(true)} className="btn btn-primary">
                  ✏️ Edit Profile
                </button>
                <button onClick={() => navigate('/change-password')} className="btn btn-secondary">
                  🔐 Change Password
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleUpdateProfile} className="profile-form">
              <h3>Edit Profile</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address:</label>
                  <textarea
                    name="address"
                    value={formData.address || ''}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>
              </div>

              <div className="form-actions" style={{ marginTop: '2rem' }}>
                <button type="submit" className="btn btn-primary">
                  💾 Save Changes
                </button>
                <button type="button" onClick={() => setIsEditing(false)} className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}