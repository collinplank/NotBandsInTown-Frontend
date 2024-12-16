import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/artists">All Artists</Link>
      </nav>
      <nav>
        <Link to="/artists/new">New Artist</Link>
      </nav>
    </header>
  );
}
