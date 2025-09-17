import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Home(){
return (
<section className="hero">
<div className="container hero-inner">
<motion.div initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.35 }}>
<span className="eyebrow">DJ‑Pizzaria • Since 2010</span>
<h1><span className="gradient-text">Fresh. Hot.</span> Delivered.</h1>
<p>Craft pizzas baked to perfection, delivered fast. Real‑time order tracking included.</p>
<ul className="hero-points">
<li>Hand‑tossed dough daily</li>
<li>100% mozzarella + San Marzano tomatoes</li>
<li>Delivery under 30 minutes</li>
</ul>
<div>
<Link to="/menu" className="cta">Order now</Link>
<Link to="/about" className="cta alt">Learn more</Link>
</div>
</motion.div>
<motion.div className="hero-visual" initial={{ opacity:0, scale:.98 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:.4 }}>
<div className="frame" style={{ backgroundImage:'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'300\' viewBox=\'0 0 400 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3CradialGradient id=\'g\' cx=\'0.7\' cy=\'0.1\' r=\'1\'%3E%3Cstop stop-color=\'%23ff4d4f\' stop-opacity=\'0.10\'/%3E%3Cstop offset=\'1\' stop-color=\'white\' stop-opacity=\'0\'/%3E%3C/radialGradient%3E%3Cpattern id=\'p\' width=\'24\' height=\'24\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23ffebe8\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23p)\'/%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23g)\'/%3E%3C/svg%3E")', backgroundSize:'cover' }}>
<img src="/pizzas/pizza_1.jpg" alt="Signature pizza" style={{ width:'100%', display:'block' }} />
</div>
<div className="glow"></div>
<div className="floating-badge"><span className="star">★</span> 4.9/5 by 10k+ foodies</div>
</motion.div>
</div>
</section>
);
}