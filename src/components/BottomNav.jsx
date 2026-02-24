import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/home">🏠</Link>
      {/* <Link to="/certing">☕</Link> */}
      <Link to="/menu">❤️</Link>
      <Link to="/cart">➕</Link>
      <Link to="/profile">👤</Link>
    </nav>
  );
}
