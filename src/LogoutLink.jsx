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
    <a
      href="#"
      className="nav-link text-lg font-semibold text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 p-2 rounded-md transition duration-200 ease-in-out"
      onClick={handleClick}
    >
      Logout
    </a>
  );
}
