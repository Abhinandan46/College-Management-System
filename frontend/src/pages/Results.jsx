import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from '../components/Layout';

export default function Results() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/results/my", {
        headers: { Authorization: localStorage.getItem("token") }
      });
      setResults(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error("Failed to fetch results:", error);
    }
  };

  const downloadResult = async (resultId, semester) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/results/download/${resultId}`, {
        headers: { Authorization: localStorage.getItem("token") },
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `result_semester_${semester}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert("Failed to download result");
    }
  };

  return (
    <Layout userType="student">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">My Results</h2>

        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Semester {result.semester}</h3>
                {result.filePath ? (
                  <button
                    onClick={() => downloadResult(result._id, result.semester)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                  >
                    Download Result
                  </button>
                ) : (
                  <div>
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="px-4 py-2 text-left">Subject</th>
                          <th className="px-4 py-2 text-left">Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.subjects.map((subject, i) => (
                          <tr key={i} className="border-t">
                            <td className="px-4 py-2">{subject.name}</td>
                            <td className="px-4 py-2">{subject.marks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-4">
                      <p className="font-semibold">Total: {result.total}</p>
                      <p className="font-semibold">Grade: {result.grade}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p>No results available</p>
          </div>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </Layout>
  );
}
