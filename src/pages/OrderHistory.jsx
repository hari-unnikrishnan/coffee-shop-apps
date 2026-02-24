import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderHistory() {
  const navigate = useNavigate();
  const [swipedOrder, setSwipedOrder] = useState(null);

  const [orders, setOrders] = useState([
    {
      id: 1,
      items: [
        { name: "Espresso", price: 9.5, quantity: 1, image: "../assets/image/images.jpg"  }
      ],
      total: 10.5,
      status: "Delivered",
      date: "15 Feb 2026"
    },
     {
      id: 2,
      items: [
        {  name: "Iced Latte", price: 7.5, quantity: 2, image: "../assets/image/Latte-kaves-pohar-keszlet-6-db-285-ml6.webp"  }
      ],
      total: 123.5,
      status: "Delivered",
      date: "12 Feb 2026"
    },
   
    {
      id: 3,
      items: [
        { name: "Cappuccino", price: 10.5, quantity: 1, image: "../assets/image/starbucks-coffee-by-nescafe-dolce-gusto-latte-macchiato-coffee-pods-12-capsules.jpg" }
      ],
      total: 10.5,
      status: "Cancelled",
      date: "10 Feb 2026"
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(orders[0]);

  // Delete order handler
  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder(null);
    }
  };

  // Decrease quantity handler
  const handleDecreaseQuantity = (orderId, itemIndex) => {
    setOrders(orders.map(order => {
      if (order.id === orderId) {
        const newItems = [...order.items];
        if (newItems[itemIndex].quantity > 1) {
          newItems[itemIndex].quantity -= 1;
          // Recalculate total
          const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          return { ...order, items: newItems, total: newTotal };
        }
      }
      return order;
    }));
  };

  // Increase quantity handler
  const handleIncreaseQuantity = (orderId, itemIndex) => {
    setOrders(orders.map(order => {
      if (order.id === orderId) {
        const newItems = [...order.items];
        newItems[itemIndex].quantity += 1;
        // Recalculate total
        const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return { ...order, items: newItems, total: newTotal };
      }
      return order;
    }));
  };

  return (
    <div className="page">
      <div className="page-header">
        {/* <div style="width: 40px;"></div> */}

        <h2>Order History</h2>

        <div className="profile-icon">
          <img 
            src="https://i.pravatar.cc/100" 
            alt="Profile" 
          />
        </div>
      </div>

      {/* Orders List */}
      {orders.map((order) => (
        <div className="order-card-wrapper" key={order.id}>
          
          <div
            className="order-card"
            onClick={() => setSelectedOrder(order)}
          >
          {order.items.map((item, i) => (
            <div key={i} className="order-item">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="order-item-image"
                />
              )}
              <span className="order-item-name">{item.name}</span>
              <span>
                ${item.price.toFixed(2)} × {item.quantity}
              </span>
            </div>
          ))}
          <div className="order-actions">
            <button className="action-btn delete-btn" onClick={(e) => { e.stopPropagation(); handleDeleteOrder(order.id); }}>
              🗑️
            </button>
            <button className="action-btn minus-btn" onClick={(e) => { e.stopPropagation(); handleDecreaseQuantity(order.id, 0); }}>
              −
            </button>
            <button className="action-btn plus-btn" onClick={(e) => { e.stopPropagation(); handleIncreaseQuantity(order.id, 0); }}>
              +
            </button>
          </div>
          <div className="order-summary">
            <span>Total</span>
            <strong>${order.total.toFixed(2)}</strong>
          </div>

          <div className={`order-status ${order.status.toLowerCase()}`}>
            {order.status}
          </div>

          
        </div>
        </div>
      ))}

      {/* FULL POPUP DETAILS */}
      {selectedOrder && (
        <div
          className="popup-overlay"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setSelectedOrder(null)}
            >
              ×
            </button>

            <h3>Order Details</h3>
            <p className="popup-date">Date: {selectedOrder.date}</p>

            <div className="popup-items">
              {selectedOrder.items.map((item, index) => (
                <div key={index} className="popup-item">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="popup-item-image"
                    />
                  )}
                  <span>{item.name}</span>
                  <span>
                    ${item.price.toFixed(2)} × {item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="popup-total">
              <span>Total</span>
              <strong>${selectedOrder.total.toFixed(2)}</strong>
            </div>

            <div
              className={`popup-status ${selectedOrder.status.toLowerCase()}`}
            >
              {selectedOrder.status}
            </div>
          </div>
        </div>
      )}

      {/* Back Button at Bottom */}
      <button className="back-btn bottom-back" onClick={() => navigate("/profile")}>
        ← Back to Profile
      </button>
    </div>
  );
}
