import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import pizzas from '../data/pizzas';
import PizzaCard from '../components/PizzaCard';


export default function Menu(){
const [query, setQuery] = useState("");
const [sort, setSort] = useState("none");
const filtered = useMemo(() => {
const q = query.trim().toLowerCase();
if(!q) return pizzas;
return pizzas.filter(p =>
  p.name.toLowerCase().includes(q) ||
  p.description.toLowerCase().includes(q)
);
}, [query]);
const sorted = useMemo(() => {
const list = [...filtered];
if (sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
if (sort === 'price-desc') list.sort((a,b)=>b.price-a.price);
if (sort === 'name') list.sort((a,b)=>a.name.localeCompare(b.name));
return list;
}, [filtered, sort]);
return (
<section className="page">
<div className="menu-banner">
<img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop" alt="Menu banner" />
<div className="overlay"></div>
<div className="text">Crafted Fresh. Delivered Fast.</div>
</div>
<div className="menu-hero">
<h2 className="menu-title" style={{textAlign:"center",color:"black",fontFamily:"sans-serif",padding:"10px"
}}>Our Menu</h2>
<p className="menu-sub">Signature pizzas crafted with premium ingredients. Browse and order instantly.</p>
<div className="menu-search">
<input placeholder="Search pizzas (e.g., pepperoni, veggie, spicy)" value={query} onChange={(e)=>setQuery(e.target.value)} />
<select value={sort} onChange={(e)=>setSort(e.target.value)}>
<option value="none">Sort</option>
<option value="price-asc">Price: Low to High</option>
<option value="price-desc">Price: High to Low</option>
<option value="name">Name</option>
</select>
<button onClick={()=>setQuery("")}>Clear</button>
</div>
</div>
<h3 className="section-title"style={{textAlign:"center",color:"black",fontFamily:"sans-serif",padding:"10px",hover:"red"}}>Veg</h3>
<motion.div className="grid" initial="hidden" whileInView="show" viewport={{ once:true }} variants={{ hidden:{opacity:0, y:8}, show:{opacity:1, y:0, transition:{ staggerChildren:.05 }}}}>
{sorted.filter(p => p.veg).map(p => <motion.div key={p.id} variants={{ hidden:{opacity:0, y:8}, show:{opacity:1, y:0} }}><PizzaCard pizza={p} /></motion.div>)}
</motion.div>

<h3 className="section-title" style={{ marginTop:20 }}>Non‑Veg</h3>
<motion.div className="grid" initial="hidden" whileInView="show" viewport={{ once:true }} variants={{ hidden:{opacity:0, y:8}, show:{opacity:1, y:0, transition:{ staggerChildren:.05 }}}}>
{sorted.filter(p => !p.veg).map(p => <motion.div key={p.id} variants={{ hidden:{opacity:0, y:8}, show:{opacity:1, y:0} }}><PizzaCard pizza={p} /></motion.div>)}
</motion.div>
</section>
);
}