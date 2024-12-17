import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex justify-around items-center p-4">
        <Link to="/" class="hover:text-yellow-400 text-lg font-semibold">
          Home
        </Link>
        <Link to="/artists" class="hover:text-yellow-400 text-lg font-semibold">
          All Artists
        </Link>
        <Link to="/artists/new" class="hover:text-yellow-400 text-lg font-semibold">
          New Artist
        </Link>
      </nav>
    </header>
  );
}
