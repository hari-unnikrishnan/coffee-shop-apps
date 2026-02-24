import { useState } from "react";
import BottomNav from "../components/BottomNav";

export default function Certing() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  const orders = [
    {
      id: 1,
      items: [
        { name: "Espresso", price: 9.50, quantity: 1, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=100&h=100&fit=crop" },
        { name: "Iced Latte", price: 7.50, quantity: 2, image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=100&h=100&fit=crop" }
      ],
      total: 24.50,
      status: "Delivered",
      date: "2026-02-15"
    },
    {
      id: 2,
      items: [
        { name: "Cappuccino", price: 10.50, quantity: 1, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=100&h=100&fit=crop" }
      ],
      total: 10.50,
      status: "Cancelled",
      date: "2026-02-10"
    }
  ];
  
  return (
    <div className="certing">
      {/* Header */}
      <div className="certing-header">
        <div>
          <p className="location">📍 Uyo, Nigeria</p>
          <h2>Order History</h2>
          <p className="subtitle">Your past orders</p>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="profile-img"
        />
      </div>

      {/* Order History Cards */}
      <div 
        key={orders[0].id}
        className="order-card" 
        onClick={() => setSelectedOrder(orders[0])}
      >
        {orders[0].items.map((item, index) => (
          <div key={index} className="order-item">
            <img src={item.image} alt={item.name} className="order-item-image" />
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)} × {item.quantity}</span>
          </div>
        ))}

        <div className="order-summary">
          <span>Total</span>
          <strong>${orders[0].total.toFixed(2)}</strong>
        </div>

        <div className="order-status delivered">
          {orders[0].status}
        </div>
      </div>

      <div 
        key={orders[1].id}
        className="order-card" 
        onClick={() => setSelectedOrder(orders[1])}
      >
        {orders[1].items.map((item, index) => (
          <div key={index} className="order-item">
            <img src={item.image} alt={item.name} className="order-item-image" />
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)} × {item.quantity}</span>
          </div>
        ))}

        <div className="order-summary">
          <span>Total</span>
          <strong>${orders[1].total.toFixed(2)}</strong>
        </div>

        <div className="order-status cancelled">
          {orders[1].status}
        </div>
      </div>

      {/* Full Width Brewing Guide Image */}
      <div className="brewing-guide-full">
        <img
          src="/assets/image/how-to-brew-the-perfect-cup-of-coffee-873x524.jpg"
          alt="How to Brew the Perfect Cup of Coffee - Complete Guide"
          className="full-guide-image"
        />
      </div>

      {/* Brewing Steps Description */}
      <div className="brewing-steps">
        <h3>Perfect Coffee Every Time</h3>
        <p>Follow our step-by-step guide to brew the perfect cup of coffee at home.</p>
        
        <div className="step-list">
          <div className="step-item">
            <span className="step-number">1</span>
            <span className="step-text">Choose quality beans</span>
          </div>
          <div className="step-item">
            <span className="step-number">2</span>
            <span className="step-text">Grind to the right size</span>
          </div>
          <div className="step-item">
            <span className="step-number">3</span>
            <span className="step-text">Use correct water temperature</span>
          </div>
          <div className="step-item">
            <span className="step-number">4</span>
            <span className="step-text">Measure proper ratios</span>
          </div>
          <div className="step-item">
            <span className="step-number">5</span>
            <span className="step-text">Brew for right duration</span>
          </div>
          <div className="step-item">
            <span className="step-number">6</span>
            <span className="step-text">Serve and enjoy</span>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedOrder && (
        <div className="popup-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setSelectedOrder(null)}>×</button>
            <h3>Order Details</h3>
            <p className="popup-date">Date: {selectedOrder.date}</p>
            
            <div className="popup-items">
              <h4>Items:</h4>
              {selectedOrder.items.map((item, index) => (
                <div key={index} className="popup-item">
                  <img src={item.image} alt={item.name} className="popup-item-image" />
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)} × {item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="popup-total">
              <span>Total:</span>
              <strong>${selectedOrder.total.toFixed(2)}</strong>
            </div>
            
            <div className={`popup-status ${selectedOrder.status.toLowerCase()}`}>
              {selectedOrder.status}
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
