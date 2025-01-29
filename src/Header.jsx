import { Link } from "react-router-dom";

const linkBaseClasses =
  "text-gray-800 font-medium text-lg transition duration-300 ease-in-out transform hover:scale-105";
const hoverClasses = "hover:text-blue-600 focus:outline-none";
const buttonClasses =
  "bg-blue-600 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 focus:ring-2 focus:ring-blue-400";
const NavLink = ({ to, children, className, ariaLabel }) => (
  <Link to={to} className={`${linkBaseClasses} ${hoverClasses} ${className}`} aria-label={ariaLabel}>
    {children}
  </Link>
);

export function Header() {
  return (
    <header className="bg-white text-gray-900 shadow-xl">
      <nav className="flex justify-between items-center px-10 py-6 max-w-screen-xl mx-auto">
        <div className="text-4xl font-bold tracking-tight">
          <Link to="/" className={`${linkBaseClasses} text-gray-900 hover:text-blue-600`} aria-label="Go to homepage">
            Definitely Not Bandsintown
          </Link>
        </div>

        <div className="flex items-center space-x-14">
          <NavLink to="/artists" ariaLabel="View favorite artists">
            Favorite Artists
          </NavLink>
          <NavLink to="/signup" className={buttonClasses} ariaLabel="Sign up">
            Signup
          </NavLink>
          <NavLink to="/login" ariaLabel="Login">
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
