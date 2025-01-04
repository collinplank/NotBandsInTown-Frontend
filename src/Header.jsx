import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-purple-600 text-white shadow-lg">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-3xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            MyMusic
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/artists" className="hover:text-yellow-400 text-lg font-medium transition duration-300">
            Artists
          </Link>
          <Link to="/concerts" className="hover:text-yellow-400 text-lg font-medium transition duration-300">
            Concerts
          </Link>
          <Link to="/setlists" className="hover:text-yellow-400 text-lg font-medium transition duration-300">
            Setlists
          </Link>
          <Link to="/artists/new" className="hover:text-yellow-400 text-lg font-medium transition duration-300">
            New Artist
          </Link>
          <Link
            to="/signup"
            className="bg-yellow-400 text-black font-medium text-lg py-1 px-4 rounded-full hover:bg-yellow-500 transition duration-300"
          >
            Signup
          </Link>
          <Link to="/login" className="hover:text-yellow-400 text-lg font-medium transition duration-300">
            Login
          </Link>
          <Link to="/logout" className="hover:text-yellow-400 text-lg font-medium transition duration-300">
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
