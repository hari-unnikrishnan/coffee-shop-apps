import starbucksImg from "../assets/image/starbucks-coffee-by-nescafe-dolce-gusto-latte-macchiato-coffee-pods-12-capsules.jpg";
import imagesImg from "../assets/image/images.jpg";
import BottomNav from "../components/BottomNav";
import { useState } from "react";

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Espresso", price: "$5.00", img: starbucksImg, title: "Espresso Shot", subtitle: "Strong Coffee Base" },
    { id: 2, name: "Milk", price: "$3.50", img: imagesImg, title: "Fresh Milk", subtitle: "Creamy Texture" },
    { id: 3, name: "Vanilla Syrup", price: "$2.00", img: starbucksImg, title: "Vanilla Syrup", subtitle: "Sweet Flavor" },
    { id: 4, name: "Caramel Drizzle", price: "$2.50", img: imagesImg, title: "Caramel Drizzle", subtitle: "Sweet Caramel" },
    { id: 5, name: "Whipped Cream", price: "$1.50", img: starbucksImg, title: "Whipped Cream", subtitle: "Light Topping" },
  ];

  const [selectedItem, setSelectedItem] = useState(cartItems[0]);
  const [showPopup, setShowPopup] = useState(false);
  const [phone] = useState("+91 123456789");
  const [message, setMessage] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = "$21.50";

  const handleOrderNow = () => {
    setShowPopup(true);
  };

  const handleSendOrder = () => {
    if (message) {
      // Create SMS link with pre-filled phone and message
      const smsLink = `sms:${phone}?body=${encodeURIComponent(message)}`;
      window.location.href = smsLink;
      
      setOrderPlaced(true);
      setTimeout(() => {
        setShowPopup(false);
        setOrderPlaced(false);
        setMessage("");
      }, 2000);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="cart-page-full">
      {/* Full Width Coffee Image with Scrolling */}
      <div className="cart-full-image">
        <div className="cart-image-scroll">
          <img
            src={selectedItem.img}
            alt={selectedItem.title}
            className="scroll-img"
          />
          <img
            src={cartItems[1]?.img || imagesImg}
            alt="Coffee"
            className="scroll-img"
          />
          <img
            src={cartItems[2]?.img || starbucksImg}
            alt="Coffee 2"
            className="scroll-img"
          />
          <img
            src={cartItems[3]?.img || imagesImg}
            alt="Coffee 3"
            className="scroll-img"
          />
        </div>
      </div>

      {/* Cart Details */}
      <div className="cart-details">
        <h2>{selectedItem.title}</h2>
        <p className="subtitle">{selectedItem.subtitle}</p>

        {/* Scrollable Order Items */}
        <div className="cart-orders">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className={`cart-order-item ${selectedItem.id === item.id ? 'active' : ''}`}
              onClick={() => setSelectedItem(item)}
            >
              <img src={item.img} alt={item.name} className="order-item-img" />
              <div className="order-item-info">
                <span className="order-item-name">{item.name}</span>
                <span className="order-item-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <strong>Total</strong>
          <strong>{total}</strong>
        </div>

        <button className="order-btn" onClick={handleOrderNow}>Order Now</button>
      </div>

      {/* Order Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {orderPlaced ? (
              <div className="order-success">
                <span className="success-icon">✓</span>
                <h3>Message Sent!</h3>
                <p>Order sent to {phone}</p>
              </div>
            ) : (
              <>
                <div className="popup-header">
                  <h3>Send Order via SMS</h3>
                  <button className="close-btn" onClick={handleClosePopup}>×</button>
                </div>
                
                <div className="popup-body">
                  <div className="order-summary">
                    <p><strong>Item:</strong> {selectedItem.title}</p>
                    <p><strong>Total:</strong> {total}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                  </div>
                  
                  <div className="input-group">
                    <label>Your Message</label>
                    <textarea 
                      placeholder="Enter your message or delivery address"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="4"
                    />
                  </div>
                  
                  <button 
                    className="send-btn" 
                    onClick={handleSendOrder}
                    disabled={!message}
                  >
                    Send SMS
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
