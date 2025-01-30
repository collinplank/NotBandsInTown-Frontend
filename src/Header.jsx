import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const navItemClasses =
  "text-gray-700 font-medium text-lg transition duration-300 ease-in-out hover:text-blue-600 hover:scale-105";
const buttonClasses =
  "bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-full shadow-md hover:bg-blue-500 transition duration-300";

export function Header() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("name") || "");

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      setSearchParams({ name: query.trim() });
      navigate(`/artists?name=${query.trim()}`);
    } else {
      setSearchParams({});
      navigate("/artists");
    }
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <Link to="/" className="text-3xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition">
          Definitely Not Bandsintown
        </Link>

        <form onSubmit={handleSearch} className="relative w-full sm:w-96 max-w-lg">
          <input
            type="text"
            name="name"
            placeholder="Search events, artists, or venues..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-5 py-3 w-full rounded-full bg-white/70 backdrop-blur-md border border-gray-300 shadow-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:bg-white transition-all duration-300"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
          ></button>
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 10A7 7 0 1 1 3 10a7 7 0 0 1 14 0z"
            />
          </svg>
        </form>

        <div className="flex items-center space-x-6">
          <Link to="/artists" className={navItemClasses}>
            Favorite Artists
          </Link>
          <Link to="/signup" className={buttonClasses}>
            Signup
          </Link>
          <Link to="/login" className={navItemClasses}>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
