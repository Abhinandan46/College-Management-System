import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students/register", {
        name,
        email,
        password,
        course,
      });
      alert("Registration successful! Please login.");
      navigate("/");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="card fade-in" style={{ maxWidth: '500px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #667eea, #764ba2)'
        }}></div>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            color: '#2c3e50',
            marginBottom: '0.5rem',
            fontSize: '2.2rem',
            fontWeight: '700'
          }}>Join Our Platform</h2>
          <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Create your account to get started</p>
        </div>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label style={{ fontSize: '1.1rem', fontWeight: '600' }}>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
              style={{ fontSize: '1.1rem' }}
            />
          </div>
          <div className="form-group">
            <label style={{ fontSize: '1.1rem', fontWeight: '600' }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              style={{ fontSize: '1.1rem' }}
            />
          </div>
          <div className="form-group">
            <label style={{ fontSize: '1.1rem', fontWeight: '600' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a strong password"
              style={{ fontSize: '1.1rem' }}
            />
          </div>
          <div className="form-group">
            <label style={{ fontSize: '1.1rem', fontWeight: '600' }}>Course</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              style={{ fontSize: '1.1rem' }}
            >
              <option value="">Select your course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business">Business</option>
              <option value="Arts">Arts</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginTop: '1rem'
          }}>
            Create Account
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e1e5e9' }}>
          <p style={{ color: '#7f8c8d', marginBottom: '0' }}>Already have an account?</p>
          <Link to="/" style={{
            color: '#667eea',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}>
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}