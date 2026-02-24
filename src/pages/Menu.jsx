import { useState } from "react";
import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";

const menuProducts = [
  {
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&h=300&fit=crop",
    name: "Espresso",
    price: "$5.00",
    rating: "4.9"
  },
  {
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop",
    name: "Iced Latte",
    price: "$5.00",
    rating: "4.7"
  },
  {
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop",
    name: "Cold Brew",
    price: "$5.00",
    rating: "4.8"
  },
  {
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop",
    name: "Cappuccino",
    price: "$5.00",
    rating: "4.6"
  },
  {
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
    name: "Americano",
    price: "$4.50",
    rating: "4.5"
  },
  {
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=300&fit=crop",
    name: "Mocha",
    price: "$6.00",
    rating: "4.9"
  },
  {
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop",
    name: "Latte",
    price: "$5.50",
    rating: "4.7"
  },
  {
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&h=300&fit=crop",
    name: "Macchiato",
    price: "$5.50",
    rating: "4.6"
  },
  {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop",
    name: "Hot Chocolate",
    price: "$4.00",
    rating: "4.8"
  },
  {
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=300&h=300&fit=crop",
    name: "Flat White",
    price: "$5.00",
    rating: "4.5"
  }
];

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = menuProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page">
      <input
        className="search"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>
            No products found
          </p>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
