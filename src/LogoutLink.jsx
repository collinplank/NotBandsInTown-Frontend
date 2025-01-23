import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LogoutLink() {
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      await axios.delete("/sessions.json");
      localStorage.removeItem("email");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <button
        onClick={handleLogout}
        className="w-64 text-center py-4 px-8 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none rounded-lg shadow-lg transition duration-200 ease-in-out"
      >
        Logout
      </button>
    </div>
  );
}
