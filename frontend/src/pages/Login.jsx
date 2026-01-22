import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/students/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      const decoded = jwtDecode(response.data.token);
      alert("Login successful!");
      if (decoded.role === 'admin') {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="card fade-in" style={{ maxWidth: '450px', width: '100%', position: 'relative', overflow: 'hidden' }}>
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
          }}>Welcome Back</h2>
          <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Sign in to your account</p>
        </div>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
              placeholder="Enter your password"
              style={{ fontSize: '1.1rem' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginTop: '1rem'
          }}>
            Sign In
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e1e5e9' }}>
          <p style={{ color: '#7f8c8d', marginBottom: '0' }}>New to our platform?</p>
          <Link to="/register" style={{
            color: '#667eea',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}>
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}   