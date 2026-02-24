import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Certing from "./pages/Certing";
import Menu from "./pages/Menu";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import PaymentMethod from "./pages/PaymentMethod";
import DeliveryAddress from "./pages/DeliveryAddress";
import UserPreferences from "./pages/UserPreferences";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/certing" element={<Certing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path="/deliveryaddress" element={<DeliveryAddress />} />
        <Route path="/userpreferences" element={<UserPreferences />} />
      </Routes>
    </BrowserRouter>
  );
}

