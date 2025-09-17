import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import orderReducer from "./store/orderSlice";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Confirmation from "./pages/Confirmation";
import "./styles.css";

const store = configureStore({
reducer: {
cart: cartReducer,
order: orderReducer,
},
});

function AnimatedRoutes(){
const location = useLocation();
return (
<AnimatePresence mode="wait">
<motion.main key={location.pathname} style={{ minHeight:'70vh' }}
 initial={{ opacity:0, y:8 }}
 animate={{ opacity:1, y:0 }}
 exit={{ opacity:0, y:-8 }}
 transition={{ duration:.25 }}>
<Routes location={location}>
<Route path="/" element={<Home />} />
<Route path="/menu" element={<Menu />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/track" element={<OrderTracking />} />
<Route path="/confirmation" element={<Confirmation />} />
{/* 404 fallback could be added here if desired */}
</Routes>
</motion.main>
</AnimatePresence>
);
}

export default function App() {
return (
<Provider store={store}>
<Router>
<Navbar />
<AnimatedRoutes />
<Footer />
</Router>
</Provider>
);
}