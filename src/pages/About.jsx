import { motion } from 'framer-motion';
export default function About(){
return (
<section className="page">
<div className="section alt">
<h2 style={{ marginTop:0 }}>About DJ-Pizzaria</h2>
<motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration:.35 }}>
<p>We started with a simple goal: craft unforgettable pizzas and deliver delight, fast.</p>
<ul className="timeline">
<li>2015 — Founded</li>
<li>2018 — Expanded to 3 locations</li>
<li>2022 — Launched online ordering</li>
</ul>
<div className="stats">
<div className="stat-card"><div className="stat-value">10k+</div><div className="stat-label">Happy customers</div></div>
<div className="stat-card"><div className="stat-value">30 min</div><div className="stat-label">Avg delivery</div></div>
<div className="stat-card"><div className="stat-value">50+</div><div className="stat-label">Unique toppings</div></div>
</div>
</motion.div>
</div>

<div className="section" style={{ marginTop:16 }}>
<h3 style={{ marginTop:0 }}>Our Story</h3>
<motion.p initial={{ opacity:0, y:6 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.3 }}>From a tiny brick oven to a citywide favorite — our journey is fueled by fresh ingredients, bold flavors, and the people who keep coming back for more.</motion.p>
<div className="values" style={{ marginTop:12 }}>
<motion.div className="value-card" initial={{ opacity:0, y:6 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.25 }}><div className="value-icon">🍕</div><strong>Quality</strong><p className="muted">Hand‑picked produce, premium cheeses, and authentic sauces.</p></motion.div>
<motion.div className="value-card" initial={{ opacity:0, y:6 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.25, delay:.05 }}><div className="value-icon">⚡</div><strong>Speed</strong><p className="muted">Optimized kitchens and routes to deliver under 30 minutes.</p></motion.div>
<motion.div className="value-card" initial={{ opacity:0, y:6 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.25, delay:.1 }}><div className="value-icon">💛</div><strong>Care</strong><p className="muted">Smiles in every box and support for our community.</p></motion.div>
</div>
</div>

<div className="section alt" style={{ marginTop:16 }}>
<h3 style={{ marginTop:0 }}>Meet the Team</h3>
<div className="team">
<motion.div className="team-card" initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.25 }}><img className="avatar" src="/pizzas/pizza_2.jpg" alt="Head Chef" /><strong>Marco Rossi</strong><p className="muted">Head Chef</p></motion.div>
<motion.div className="team-card" initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.25, delay:.05 }}><img className="avatar" src="/pizzas/pizza_5.jpg" alt="Operations" /><strong>Priya Patel</strong><p className="muted">Operations Lead</p></motion.div>
<motion.div className="team-card" initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.25, delay:.1 }}><img className="avatar" src="/pizzas/pizza_8.jpg" alt="Customer Care" /><strong>Sam Lee</strong><p className="muted">Customer Care</p></motion.div>
</div>
</div>

<div className="section" style={{ marginTop:16 }}>
<h3 style={{ marginTop:0 }}>Gallery</h3>
<div className="gallery">
<img src="/pizzas/pizza_10.jpg" alt="Neapolitan crust" loading="lazy" />
<img src="/pizzas/pizza_12.jpg" alt="Pepperoni close-up" loading="lazy" />
<img src="/pizzas/pizza_14.jpg" alt="Veggie colors" loading="lazy" />
<img src="/pizzas/pizza_16.jpg" alt="Fresh out of oven" loading="lazy" />
</div>
</div>

<div className="section alt" style={{ marginTop:16 }}>
<h3 style={{ marginTop:0 }}>FAQ</h3>
<div className="faq">
<details>
<summary>Do you offer gluten‑free options?</summary>
<div className="answer">Yes, we have gluten‑free bases for most pizzas. Please note possible traces.</div>
</details>
<details>
<summary>What are the delivery hours?</summary>
<div className="answer">We deliver from 10:00 to 23:00, seven days a week.</div>
</details>
<details>
<summary>Can I customize my pizza?</summary>
<div className="answer">Absolutely. Choose your base, sauce, cheese, and any toppings you like.</div>
</details>
</div>
</div>
</section>
);
}