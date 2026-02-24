import { useNavigate } from "react-router-dom";
import coffeeSplash from "../assets/image/coffee-splash-with-coffee-beans-isolated-transparent-background_251268-925-removebg-preview.png";

export default function Splash() {
  const nav = useNavigate();

  return (
    <div className="splash">
      {/* Background overlay */}
      <div className="splash-overlay"></div>

      {/* Coffee Image */}
        <img
          src={coffeeSplash}
          alt="Coffee Splash"
          className="splash-image"
        />

      {/* Content */}
      <div className="splash-content">
        <h1>Brewed Just for You</h1>
        <p>
          Experience coffee at its finest. Discover unique blends, rich aromas,
          and expert brewing guides.
        </p>

        <button onClick={() => nav("/login")}>
          Get Started for free
        </button>
      </div>
    </div>
  );
}
