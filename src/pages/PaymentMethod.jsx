import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import BottomNav from "../components/BottomNav";

export default function PaymentMethod() {
  const navigate = useNavigate();
  const [showAddCard, setShowAddCard] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [upiId, setUpiId] = useState("");

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Mastercard",
      last4: "4201",
      expiry: "12/28",
      isDefault: true
    },
    {
      id: 2,
      type: "Visa",
      last4: "4221",
      expiry: "11/27",
      isDefault: false
    }
  ]);

  const paymentTypes = [
    { id: "card", icon: "💳", name: "Debit / Credit" },
    { id: "gpay", icon: "🅖", name: "Google Pay" },
    { id: "qrcode", icon: "📱", name: "QR Code" }
  ];

  return (
    <div className="certing">
      {/* HEADER */}
      <div className="certing-header">
        

        <div className="header-center">
          <p className="location">📍 Kerala, India</p>
          <h2>Payment Method</h2>
          <p className="subtitle">Manage your payment options</p>
        </div>

        <img src="https://i.pravatar.cc/40" className="profile-img" />
      </div>

      {/* SAVED CARDS */}
      <h4 className="section-title">My Saved Cards</h4>

      {paymentMethods.map(card => (
        <div key={card.id} className="order-card">
          <div className="order-item">
            <span className="card-icon">💳</span>
            <span>{card.type} •••• {card.last4}</span>
            <span className="card-expiry">{card.expiry}</span>
          </div>

          <div className="order-summarys">
            <span>{card.isDefault ? "Default Card" : "Saved Card"}</span>
            {card.isDefault && <span className="default-badge" style={{marginLeft:"29.3125rem"}}>✓ Active</span>}
          </div>

          <div className="order-status delivered">
            {card.type} ending in {card.last4}
          </div>
        </div>
      ))}

      {/* ADD CARD */}
      <button className="add-card-btn" onClick={() => setShowAddCard(true)}>
        + Add New Card
      </button>

      {/* POPUP */}
      {showAddCard && (
        <div className="popup-overlay" onClick={() => setShowAddCard(false)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowAddCard(false)}>×</button>

            <h3>Add Payment Method</h3>

            {!selectedPaymentType ? (
              <div className="payment-type-selection">
                {paymentTypes.map(type => (
                  <button
                    key={type.id}
                    className="payment-type-btn"
                    onClick={() => setSelectedPaymentType(type.id)}
                  >
                    <span className="payment-type-icon">{type.icon}</span>
                    <span className="payment-type-name">{type.name}</span>
                  </button>
                ))}
              </div>
            ) : selectedPaymentType === "gpay" ? (
              <>
                <div className="popup-form">
                  <input 
                    className="form-input" 
                    placeholder="Phone Number" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    maxLength={10}
                  />
                  <input 
                    className="form-input" 
                    placeholder="UPI ID (e.g., mobile@upi)" 
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                </div>

                <button className="save-card-btn" onClick={() => {
                  if (phoneNumber && upiId) {
                    setPaymentMethods([
                      ...paymentMethods,
                      {
                        id: Date.now(),
                        type: "Google Pay",
                        last4: phoneNumber.slice(-4),
                        expiry: upiId,
                        isDefault: false
                      }
                    ]);
                    setPhoneNumber("");
                    setUpiId("");
                    setShowAddCard(false);
                    setSelectedPaymentType(null);
                  }
                }}>
                  Save Google Pay
                </button>

                <button
                  className="back-to-types-btn"
                  onClick={() => setSelectedPaymentType(null)}
                >
                  ← Back
                </button>
              </>
            ) : selectedPaymentType === "qrcode" ? (
              <>
                <div className="popup-form">
                  <input 
                    className="form-input" 
                    placeholder="UPI ID (e.g., mobile@upi)" 
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                </div>

                <button className="save-card-btn" onClick={() => {
                  if (upiId) {
                    setPaymentMethods([
                      ...paymentMethods,
                      {
                        id: Date.now(),
                        type: "QR Code",
                        last4: "UPI",
                        expiry: upiId,
                        isDefault: false
                      }
                    ]);
                    setUpiId("");
                    setShowAddCard(false);
                    setSelectedPaymentType(null);
                  }
                }}>
                  Save QR Code
                </button>

                <button
                  className="back-to-types-btn"
                  onClick={() => setSelectedPaymentType(null)}
                >
                  ← Back
                </button>
              </>
            ) : (
              <>
                <div className="popup-form">
                  <input 
                    className="form-input" 
                    placeholder="Card Number" 
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength={16}
                  />
                  <input 
                    className="form-input" 
                    placeholder="Card Holder Name" 
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                  />
                  <div className="form-row">
                    <input 
                      className="form-input" 
                      placeholder="MM/YY" 
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      maxLength={5}
                    />
                    <input 
                      className="form-input" 
                      placeholder="CVV" 
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength={4}
                      type="password"
                    />
                  </div>
                </div>

                <button className="save-card-btn" onClick={() => {
                  if (cardNumber && cardHolder && expiry && cvv) {
                    setPaymentMethods([
                      ...paymentMethods,
                      {
                        id: Date.now(),
                        type: selectedPaymentType === "gpay" ? "Google Pay" : selectedPaymentType === "qrcode" ? "QR Code" : "Card",
                        last4: cardNumber.slice(-4),
                        expiry: expiry,
                        isDefault: false
                      }
                    ]);
                    setCardNumber("");
                    setCardHolder("");
                    setExpiry("");
                    setCvv("");
                    setShowAddCard(false);
                    setSelectedPaymentType(null);
                  }
                }}>
                  Save Card
                </button>

                <button
                  className="back-to-types-btn"
                  onClick={() => setSelectedPaymentType(null)}
                >
                  ← Back
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* <BottomNav /> */}
       {/* Back Button at Bottom */}
      <button className="back-btn " onClick={() => navigate("/profile")}>
        ← Back to Profile
      </button>
    </div>
  );
}
