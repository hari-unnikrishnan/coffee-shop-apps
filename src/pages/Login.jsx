import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import brandingImage from "../assets/image/9d0f9be3-aa03-4299-9439-7315724e0255.__CR285,0,1431,885_PT0_SX970_V1___.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    phone: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading delay for animation effect
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (isLogin) {
      console.log("Login:", formData);
      navigate("/home");
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        setIsLoading(false);
        return;
      }
      console.log("Register:", formData);
      navigate("/home");
    }
    setIsLoading(false);
  };

  // Handle Google Sign-In (Demo Mode)
  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked (Demo Mode)");
    
    // Simulate Google user data
    const mockGoogleUser = {
      email: "user@gmail.com",
      name: "Google User",
      picture: "https://lh3.googleusercontent.com/a/default",
      sub: "123456789"
    };
    
    // Simulate the callback after a short delay
    setTimeout(() => {
      console.log("Google Sign-In Success:", mockGoogleUser);
      
      // Store user info
      localStorage.setItem("googleUser", JSON.stringify(mockGoogleUser));
      localStorage.setItem("userEmail", mockGoogleUser.email);
      localStorage.setItem("userName", mockGoogleUser.name);
      localStorage.setItem("userPicture", mockGoogleUser.picture);
      
      // Navigate to home
      navigate("/home");
    }, 500);
  };

  // Handle Apple Sign-In (Demo Mode)
  const handleAppleSignIn = () => {
    console.log("Apple Sign-In clicked (Demo Mode)");
    
    // Simulate Apple user data
    const mockAppleUser = {
      email: "user@icloud.com",
      name: "Apple User",
      sub: "apple_user_123"
    };
    
    // Simulate the callback after a short delay
    setTimeout(() => {
      console.log("Apple Sign-In Success:", mockAppleUser);
      
      // Store user info
      localStorage.setItem("googleUser", JSON.stringify(mockAppleUser));
      localStorage.setItem("userEmail", mockAppleUser.email);
      localStorage.setItem("userName", mockAppleUser.name);
      
      // Navigate to home
      navigate("/home");
    }, 500);
  };

  // Initialize Google Identity Services (for production use)
  useEffect(() => {
    // Demo mode - Google OAuth disabled
    // To enable: 1. Get Google Client ID from Google Cloud Console
    // 2. Replace the placeholder below with your Client ID
    // 3. Uncomment the code below
    
    /*
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.oauth2.initTokenClient({
          client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
          scope: "email profile openid",
          callback: handleCredentialResponse,
        });
      }
    };
    */

    return () => {
      // Cleanup not needed in demo mode
    };
  }, []);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-wrapper">
      {/* Animated Background Elements */}
      {/* <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="coffee-bean bean-1">☕</div>
        <div className="coffee-bean bean-2">☕</div>
        <div className="coffee-bean bean-3">☕</div>
      </div> */}

      {/* Main Card Container */}
      <div className="auth-container">
        <div className="auth-card-wrapper">
          {/* Left Side - Branding */}
          <div className="auth-branding">
            <div className="branding-bg-image">
              <img src={brandingImage} alt="Coffee Shop" className="bg-img" />
              <div className="bg-overlay"></div>
            </div>
            <div className="branding-content">
              <div className="logo-container">
                {/* <div className="coffee-cup-animated">
                  <div className="cup">
                    <div className="steam steam-1"></div>
                    <div className="steam steam-2"></div>
                    <div className="steam steam-3"></div>
                  </div>
                  <div className="cup-saucer"></div>
                </div> */}
              </div>
              
              <h1 className="brand-name">Coffee House</h1>
              <p className="brand-tagline">
                {isLogin ? "Welcome back! Ready for your perfect brew?" : "Join our coffee community today!"}
              </p>
              
              
              
              <div className="brand-features">
                <div className="feature-pill">
                  <span className="pill-icon">✨</span>
                  <span>Premium Beans</span>
                </div>
                <div className="feature-pill">
                  <span className="pill-icon">🚀</span>
                  <span>Fast Delivery</span>
                </div>
                <div className="feature-pill">
                  <span className="pill-icon">💜</span>
                  <span>Loyalty Rewards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="auth-form-section">
            <div className="form-header">
              <h2>{isLogin ? "Sign In" : "Create Account"}</h2>
              <p className="form-subtitle">
                {isLogin 
                  ? "Enter your credentials to access your account" 
                  : "Fill in your details to get started"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
                <div className="form-group animated-input">
                  <label htmlFor="name">
                    <span className="label-icon">👤</span> Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="form-group animated-input">
                <label htmlFor="email">
                  <span className="label-icon">✉️</span> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              {!isLogin && (
                <div className="form-group animated-input">
                  <label htmlFor="phone">
                    <span className="label-icon">📱</span> Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 234 567 8900"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="form-group animated-input">
                <label htmlFor="password">
                  <span className="label-icon">🔒</span> Password
                </label>
                <div className="password-field">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="form-group animated-input">
                  <label htmlFor="confirmPassword">
                    <span className="label-icon">🔐</span> Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required={!isLogin}
                  />
                </div>
              )}

              {isLogin && (
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <a href="#" className="forgot-link">Forgot password?</a>
                </div>
              )}

              <button 
                type="submit" 
                className={`auth-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Create Account"}
                    <span className="button-arrow">→</span>
                  </>
                )}
              </button>
            </form>

            <div className="social-section">
              <div className="divider">
                <span>or continue with</span>
              </div>
              
              <div className="social-buttons">
                <button className="social-btn google" onClick={handleGoogleSignIn}>
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button className="social-btn apple" onClick={handleAppleSignIn}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Apple
                </button>
              </div>
            </div>

            <div className="auth-switch">
              <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button onClick={toggleMode} className="switch-btn">
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
