import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [showCreateAdmin, setShowCreateAdmin] = useState(false);
  const [adminData, setAdminData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/admin/students", {
          headers: { Authorization: token },
        });
        setStudents(response.data);
      } catch (error) {
        alert("Failed to fetch students");
      }
    };
    fetchStudents();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/api/admin/students/${id}`, { admissionStatus: status }, {
        headers: { Authorization: token },
      });
      alert("Status updated");
      window.location.reload();
    } catch (error) {
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:5000/api/admin/students/${id}`, {
          headers: { Authorization: token },
        });
        alert("Student deleted");
        setStudents(students.filter(student => student._id !== id));
      } catch (error) {
        alert("Failed to delete student");
      }
    }
  };

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/students/register-admin", adminData, {
        headers: { Authorization: token },
      });
      alert("Admin created successfully");
      setAdminData({ name: '', email: '', password: '' });
      setShowCreateAdmin(false);
    } catch (error) {
      alert("Failed to create admin");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        <div className="card fade-in">
          <div className="flex-between" style={{ marginBottom: '2rem' }}>
            <div>
              <h1 style={{ margin: '0', fontSize: '2.5rem' }}>Admin Panel</h1>
              <p style={{ color: '#7f8c8d', margin: '0.5rem 0 0 0', fontSize: '1.1rem' }}>
                Manage students and system administration
              </p>
            </div>
            <div className="flex" style={{ gap: '1rem' }}>
              <button onClick={() => setShowCreateAdmin(!showCreateAdmin)} className="btn btn-primary">
                👤 Create Admin
              </button>
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#34495e', marginBottom: '1rem' }}>👥 Student Management</h3>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Admission Status</th>
                <th>Fee Paid</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student._id}>
                  <td style={{ fontWeight: '500' }}>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.5rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      backgroundColor: student.admissionStatus === 'Approved' ? '#d4edda' : '#fff3cd',
                      color: student.admissionStatus === 'Approved' ? '#155724' : '#856404'
                    }}>
                      {student.admissionStatus}
                    </span>
                  </td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.5rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      backgroundColor: student.feePaid ? '#d4edda' : '#f8d7da',
                      color: student.feePaid ? '#155724' : '#721c24'
                    }}>
                      {student.feePaid ? 'Paid' : 'Pending'}
                    </span>
                  </td>
                  <td>
                    <div className="flex" style={{ gap: '0.5rem' }}>
                      <button onClick={() => handleUpdateStatus(student._id, 'Approved')} className="btn btn-success" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Approve</button>
                      <button onClick={() => handleUpdateStatus(student._id, 'Rejected')} className="btn btn-danger" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Reject</button>
                      <button onClick={() => handleDelete(student._id)} className="btn btn-danger" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showCreateAdmin && (
            <div className="card slide-up" style={{ marginTop: '2rem', maxWidth: '500px' }}>
              <h3 style={{ color: '#34495e', marginBottom: '1.5rem' }}>👤 Create New Administrator</h3>
              <form onSubmit={handleCreateAdmin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="form-group">
                  <label style={{ fontSize: '1.1rem', fontWeight: '600' }}>Full Name</label>
                  <input
                    type="text"
                    value={adminData.name}
                    onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
                    required
                    placeholder="Enter admin full name"
                    style={{ fontSize: '1.1rem' }}
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '1.1rem', fontWeight: '600' }}>Email Address</label>
                  <input
                    type="email"
                    value={adminData.email}
                    onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
                    required
                    placeholder="Enter admin email address"
                    style={{ fontSize: '1.1rem' }}
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '1.1rem', fontWeight: '600' }}>Password</label>
                  <input
                    type="password"
                    value={adminData.password}
                    onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
                    required
                    placeholder="Create a strong password"
                    style={{ fontSize: '1.1rem' }}
                  />
                </div>
                <div className="flex" style={{ gap: '1rem', justifyContent: 'flex-end' }}>
                  <button type="button" onClick={() => setShowCreateAdmin(false)} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create Admin
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}