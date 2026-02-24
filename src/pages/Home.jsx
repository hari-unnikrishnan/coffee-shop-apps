import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
import coffeeImg from "../assets/image/coffee-splash-with-coffee-beans-isolated-transparent-background_251268-925-removebg-preview.png";
import Cookies from "../assets/image/360_F_1665715634_guHGh76bJOrdWEOxj78u5uIOIF3TbWqR.jpg";

const products = {
  featured: [
    {
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop",
      name: "Pancake",
      rating: "4.5",
      price: "$9.00"
    },
    {
      image: Cookies,
      name: "Cookies",
      rating: "4.5",
      price: "$14.00"
    }
  ],
  coldbrew: [
    {
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop",
      name: "Cold Brew Classic",
      rating: "4.8",
      price: "$5.50"
    },
    {
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=300&h=300&fit=crop",
      name: "Vanilla Cold Brew",
      rating: "4.6",
      price: "$6.00"
    }
  ],
  espresso: [
    {
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&h=300&fit=crop",
      name: "Espresso Shot",
      rating: "4.9",
      price: "$3.00"
    },
    {
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop",
      name: "Double Espresso",
      rating: "4.7",
      price: "$4.50"
    }
  ]
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("featured");
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Header */}
      <div className="home-header">
        <div>
          <p className="location">📍 Kerala, India</p>
          <h2>Brewed Fresh</h2>
          <p className="subtitle">Rich aroma, strong taste</p>
        </div>

        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="profile-img"
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Promo Card */}
      <div className="promo-card">
        <div className="promo-text">
          <h3>Brewed Fresh</h3>
          <p>Best coffee for your mood</p>
          <button>Order Now</button>
        </div>

        <img
          src={coffeeImg}
          alt="Coffee"
          className="promo-img"
        />
      </div>

      {/* Tabs */}
      <div className="tabs">
        <span 
          className={activeTab === "featured" ? "active" : ""}
          onClick={() => setActiveTab("featured")}
        >
          Featured
        </span>
        <span 
          className={activeTab === "coldbrew" ? "active" : ""}
          onClick={() => setActiveTab("coldbrew")}
        >
          Cold Brew
        </span>
        <span 
          className={activeTab === "espresso" ? "active" : ""}
          onClick={() => setActiveTab("espresso")}
        >
          Espresso
        </span>
      </div>

      {/* Products */}
      <div className="grid">
        {products[activeTab].map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
