import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPreferences() {
  const navigate = useNavigate();

  // Load preferences from localStorage on component mount
  const [bellNotify, setBellNotify] = useState(() => {
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
      return JSON.parse(saved).bellNotify;
    }
    return true;
  });
  
  const [pushNotify, setPushNotify] = useState(() => {
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
      return JSON.parse(saved).pushNotify;
    }
    return true;
  });
  
  const [emailNotify, setEmailNotify] = useState(() => {
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
      return JSON.parse(saved).emailNotify;
    }
    return false;
  });
  
  const [darkTheme, setDarkTheme] = useState(() => {
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
      return JSON.parse(saved).darkTheme;
    }
    return false;
  });

  const handleSave = () => {
    // Save preferences to localStorage
    const preferences = {
      bellNotify,
      pushNotify,
      emailNotify,
      darkTheme
    };
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    
    // Show alert that preferences are saved (instead of navigating)
    alert('Preferences saved successfully!');
  };

  return (
    <div className="up-page">
      {/* Animated Background Elements */}
      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="coffee-bean bean-1">☕</div>
        <div className="coffee-bean bean-2">☕</div>
        <div className="coffee-bean bean-3">☕</div>
      </div>

      {/* HEADER */}
      <div className="up-header">
        
        <div className="up-header-text slide-from-left">
          <p className="up-location">📍 Kerala, India</p>
          {/* <h2 className="up-title">User Preferences</h2> */}
          <p className="up-subtitle">Customize your experience</p>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="up-avatar"
        />
      </div>

      {/* CONTENT CARD */}
      <div className="up-card">

        <div className="up-item">
          <div className="up-item-text">
            <h4>BELL Notifications</h4>
            <p>Notifications</p>
          </div>

          <label className="up-switch">
            <input
              type="checkbox"
              checked={bellNotify}
              onChange={() => setBellNotify(!bellNotify)}
            />
            <span className="up-slider"></span>
          </label>
        </div>

        <div className="up-item">
          <div className="up-item-text">
            <h4>Push Notifications</h4>
            <p>Receive order and offer alerts</p>
          </div>

          <label className="up-switch">
            <input
              type="checkbox"
              checked={pushNotify}
              onChange={() => setPushNotify(!pushNotify)}
            />
            <span className="up-slider"></span>
          </label>
        </div>

        <div className="up-item">
          <div className="up-item-text">
            <h4>Email Updates</h4>
            <p>Get news and promotions</p>
          </div>

          <label className="up-switch">
            <input
              type="checkbox"
              checked={emailNotify}
              onChange={() => setEmailNotify(!emailNotify)}
            />
            <span className="up-slider"></span>
          </label>
        </div>

        <div className="up-item">
          <div className="up-item-text">
            <h4>Dark Mode</h4>
            <p>Reduce eye strain at night</p>
          </div>

          <label className="up-switch">
            <input
              type="checkbox"
              checked={darkTheme}
              onChange={() => setDarkTheme(!darkTheme)}
            />
            <span className="up-slider"></span>
          </label>
        </div>

      </div>

      {/* SAVE BUTTON */}
      <button className="up-save-btn" onClick={handleSave}>
        Save Preferences
      </button>
      <button className="back-btn bottom-back" onClick={() => navigate("/profile")}>
        ← Back to Profile
      </button>
     

    </div>
  );
}
