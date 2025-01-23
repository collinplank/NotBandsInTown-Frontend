import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      const response = await axios.post("/sessions.json", formData);
      localStorage.setItem("email", response.data.email);
      navigate("/");
    } catch {
      setErrors(["Invalid email or password"]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login to Your Account</h1>

        {errors.length > 0 && (
          <ul className="text-red-500 text-sm mb-4">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium text-sm">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium text-sm">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
