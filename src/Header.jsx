import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-black text-white shadow-lg">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-400">
            MyMusic
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/artists" className="hover:text-yellow-400 text-lg font-medium">
            All Artists
          </Link>
          <Link to="/artists/new" className="hover:text-yellow-400 text-lg font-medium">
            New Artist
          </Link>
          <Link to="/signup" className="hover:text-yellow-400 text-lg font-medium">
            Signup
          </Link>
          <Link to="/login" className="hover:text-yellow-400 text-lg font-medium">
            Login
          </Link>
          <Link to="/logout" className="hover:text-yellow-400 text-lg font-medium">
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
