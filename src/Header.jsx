import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-purple-600 text-white shadow-lg">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-3xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Definitely Not Bandsintown
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/artists"
            className="text-white font-medium text-lg px-4 py-2 rounded-md hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
          >
            Favorite Artists
          </Link>
          <div className="border-l-4 border-white mx-4 h-8"></div>
          <Link
            to="/signup"
            className="bg-yellow-400 text-black font-medium text-lg py-2 px-6 rounded-full shadow-md hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="text-white font-medium text-lg px-4 py-2 rounded-md hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/logout"
            className="text-white font-medium text-lg px-4 py-2 rounded-md hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
          >
            Logout
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-yellow-400 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

{
  /* <Link
            to="/concerts"
            className="text-white font-medium text-lg px-4 py-2 rounded-md hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
          >
            Concerts
          </Link> */
}
{
  /* <Link
            to="/setlists"
            className="text-white font-medium text-lg px-4 py-2 rounded-md hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
          >
            Setlists
          </Link> */
}
{
  /* <Link
            to="/artists/new"
            className="text-white font-medium text-lg px-4 py-2 rounded-md hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
          >
            New Artist
          </Link> */
}
