import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function Profile() {
  const navigate = useNavigate();
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [profile, setProfile] = useState({
    name: "Peasy Matt",
    email: "peasymatt@email.com",
    address: "123 Coffee Street, Kochi",
    number: "+91 9876543210",
    location: "Kerala, India"
  });

  const [formData, setFormData] = useState(profile);

  const handleEditClick = () => {
    setFormData(profile);
    setShowEditPopup(true);
  };

  const handleSave = () => {
    setProfile(formData);
    setShowEditPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    setShowEditPopup(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="certing">
      {/* Animated Background Elements */}
      

      {/* Header */}
      <div className="certing-header">
        <div className="header-left">
          <p className="location">📍 Kerala, India</p>
          <h2>Account</h2>
          <p className="subtitle">Manage your profile</p>
        </div>
        <div className="header-right">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Full Width Profile Image */}
      <div className="brewing-guide-full">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile Avatar"
          className="full-guide-image profile-full-avatar"
        />
      </div>

      {/* Profile Content */}
      <div className="brewing-steps">
        <h3>{profile.name}</h3>
        <p>{profile.email}</p>
        <p className="profile-location">{profile.location}</p>
        
        <button className="profile-edit-btn" onClick={handleEditClick}>Edit Profile</button>
        
        <ul className="profile-menu">
          <li onClick={() => navigate("/orderhistory")}>
            <span className="menu-icon">📦</span> Order History
          </li>
          <li onClick={() => navigate("/paymentmethod")}>
            <span className="menu-icon">💳</span> Payment Method
          </li>
          <li onClick={() => navigate("/deliveryaddress")}>
            <span className="menu-icon">📍</span> Delivery Address
          </li>
          <li onClick={() => navigate("/userpreferences")}>
            <span className="menu-icon">⚙️</span> User Preferences
          </li>
        </ul>
      </div>

      <BottomNav />

      {/* Edit Profile Popup */}
      {showEditPopup && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Edit Profile</h3>
              <button className="popup-close" onClick={handleClose}>&times;</button>
            </div>
            <div className="popup-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  rows="3"
                />
              </div>
              <button className="popup-save-btn" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
