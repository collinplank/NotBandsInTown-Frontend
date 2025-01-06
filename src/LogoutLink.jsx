import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.href = "/";
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <a
        href="#"
        className="w-64 text-center py-4 px-8 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg shadow-lg transition duration-200 ease-in-out cursor-pointer"
        onClick={handleClick}
      >
        Logout
      </a>
    </div>
  );
}
