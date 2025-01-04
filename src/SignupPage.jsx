import axios from "axios";
import { useState } from "react";
import { createContext, useState as useAuthState } from "react";
import { useAuth } from "./useAuth";
import { Link } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useAuthState(!!localStorage.getItem("email"));

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("email");
  };

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
}

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        login();
        window.location.href = "/";
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Signup</h1>
      <ul className="text-red-500 text-sm mb-4">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
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
        <div>
          <label htmlFor="password_confirmation" className="block text-gray-700 font-medium">
            Password Confirmation:
          </label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export function Header() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Home
        </Link>
        <div>
          {isLoggedIn ? (
            <button onClick={logout} className="text-lg font-semibold">
              Logout
            </button>
          ) : (
            <>
              <Link to="/signup" className="text-lg font-semibold mr-4">
                Signup
              </Link>
              <Link to="/login" className="text-lg font-semibold">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export function LoginPage() {
  const { login } = useAuth();

  const handleLogin = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("/login.json", params).then((response) => {
      if (response.data.logged_in) {
        localStorage.setItem("email", response.data.email);
        login();
        window.location.href = "/";
      }
    });
  };

  return <form onSubmit={handleLogin}>{/* Login form fields */}</form>;
}
