import axios from "axios";
import { useState } from "react";

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login" className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h1>
      <ul className="text-red-500 text-sm mb-4">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
}
