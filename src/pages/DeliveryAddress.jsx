import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function DeliveryAddress() {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Home",
      address: "123 Coffee Street, Apt 4B",
      city: "Kochi",
      state: "Kerala",
      phone: "+91 812 345 6789",
      isDefault: true
    },
    {
      id: 2,
      label: "Office",
      address: "456 Business Ave, Floor 3",
      city: "Thiruvananthapuram",
      state: "Kerala",
      phone: "+91 812 345 6789",
      isDefault: false
    }
  ]);

  const [newAddress, setNewAddress] = useState({
    label: "",
    address: "",
    city: "",
    state: "",
    phone: ""
  });

  const handleSaveAddress = () => {
    if (newAddress.label && newAddress.address && newAddress.city && newAddress.state && newAddress.phone) {
      const address = {
        id: Date.now(),
        label: newAddress.label,
        address: newAddress.address,
        city: newAddress.city,
        state: newAddress.state,
        phone: newAddress.phone,
        isDefault: false
      };
      setAddresses([...addresses, address]);
      setSelectedAddress(address);
      setNewAddress({ label: "", address: "", city: "", state: "", phone: "" });
      setShowAddForm(false);
    }
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className="certing">

      {/* HEADER */}
      <div className="certing-header">
        <div>
          <p className="location">📍 Kerala, India</p>
          <h2>Delivery Address</h2>
          <p className="subtitle">Select your delivery location</p>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="profile-img"
        />
      </div>

      {/* MAP */}
      <div className="delivery-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5015.551018667858!2d76.18823491712326!3d10.544252317343138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b55355555555%3A0x1234567890abcdef!2sKerala%2C+India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '24px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Delivery Location Map"
        ></iframe>
        {selectedAddress && (
          <div 
            className="route-info"
            onClick={() => {
              const destination = encodeURIComponent(`${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state}`);
              window.open(`https://www.google.com/maps/dir/Kerala+India/${destination}`, '_blank');
            }}
          >
            <span>📍 Route: Kerala → {selectedAddress.label}</span>
          </div>
        )}
      </div>

      {/* ADDRESS LIST */}
      <div className="order-card">
        {addresses.map((item) => (
          <div 
            key={item.id} 
            className={`order-item ${selectedAddress?.id === item.id ? 'selected' : ''}`}
            onClick={() => handleSelectAddress(item)}
          >
            <div className="address-info">
              <div className="address-card-header">
                <span className="address-label">{item.label}</span>
                {item.isDefault && <span className="address-default">Default</span>}
              </div>
              <p className="address-line">{item.address}</p>
              <p className="address-city">{item.city}, {item.state}</p>
              <p className="address-phone">📞 {item.phone}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ADD ADDRESS BUTTON */}
      <button
        className="add-address-btn"
        onClick={() => setShowAddForm(true)}
      >
        + Add New Address
      </button>
        <button className="back-btn " onClick={() => navigate("/profile")}>
        ← Back to Profile
      </button>

      {/* ADD ADDRESS MODAL */}
      {showAddForm && (
        <div
          className="popup-overlay"
          onClick={() => setShowAddForm(false)}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setShowAddForm(false)}
            >
              ×
            </button>

            <h3>Add New Address</h3>

            <div className="modal-form-group">
              <label>Label</label>
              <input 
                placeholder="Home / Office" 
                value={newAddress.label}
                onChange={(e) => setNewAddress({...newAddress, label: e.target.value})}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveAddress()}
              />
            </div>

            <div className="modal-form-group">
              <label>Street</label>
              <input 
                placeholder="Street address" 
                value={newAddress.address}
                onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveAddress()}
              />
            </div>

            <div className="modal-form-group">
              <label>City</label>
              <input 
                placeholder="City" 
                value={newAddress.city}
                onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveAddress()}
              />
            </div>

            <div className="modal-form-group">
              <label>State</label>
              <input 
                placeholder="State" 
                value={newAddress.state}
                onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveAddress()}
              />
            </div>

            <div className="modal-form-group">
              <label>Phone</label>
              <input 
                placeholder="+91 xxxx xxx xxxx" 
                value={newAddress.phone}
                onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveAddress()}
              />
            </div>

            <button className="modal-save-btn" onClick={handleSaveAddress}>Save Address</button>
          </div>
        </div>
      )}

      
    </div>
  );
}
