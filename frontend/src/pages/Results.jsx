import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/students/results", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setResults(res.data));
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
      <div className="container">
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Results</h2>

          {results ? (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Semester 1</td>
                    <td style={{ fontWeight: 'bold', color: results.semester1 ? '#27ae60' : '#7f8c8d' }}>
                      {results.semester1 || "Not Available"}
                    </td>
                  </tr>
                  <tr>
                    <td>Semester 2</td>
                    <td style={{ fontWeight: 'bold', color: results.semester2 ? '#27ae60' : '#7f8c8d' }}>
                      {results.semester2 || "Not Available"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div className="loading" style={{ margin: '0 auto 1rem' }}></div>
              <p>Loading results...</p>
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
