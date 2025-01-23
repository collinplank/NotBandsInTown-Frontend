import { Link } from "react-router-dom";

const navLinkClasses =
  "text-gray-200 font-medium text-base hover:text-yellow-500 focus:outline-none transition duration-300";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-800 text-white shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        <div className="text-3xl font-semibold tracking-tight">
          <Link to="/" className="hover:text-yellow-500 transition duration-300" aria-label="Go to homepage">
            Definitely Not Bandsintown
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/artists" className={navLinkClasses} aria-label="View favorite artists">
            Favorite Artists
          </Link>
          <Link
            to="/signup"
            className="bg-yellow-500 text-black font-medium text-base py-2 px-6 rounded-lg shadow-md hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-300"
            aria-label="Sign up"
          >
            Signup
          </Link>
          <Link to="/login" className={navLinkClasses} aria-label="Login">
            Login
          </Link>
          <Link to="/logout" className={navLinkClasses} aria-label="Logout">
            Logout
          </Link>
        </div>
      </nav>
    </header>
  );
}
