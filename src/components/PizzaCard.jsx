import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { addToCart } from '../store/cartSlice';


export default function PizzaCard({ pizza }){
const dispatch = useDispatch();
const [size, setSize] = useState('M');
const sizePrice = size === 'S' ? pizza.price - 1 : size === 'L' ? pizza.price + 2 : pizza.price;
const add = () => dispatch(addToCart({ id: `${pizza.id}-${size}`, name: `${pizza.name} (${size})`, price: sizePrice, image: pizza.image }));


return (
<motion.div className="pizza-card" initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.25 }}>
<div className="card-top">
<img
  src={pizza.image}
  alt={pizza.name}
  loading="lazy"
  decoding="async"
  srcSet={`${pizza.image} 1x, ${pizza.image} 2x`}
  sizes="(max-width: 600px) 100vw, 240px"
/>
<div className="price-badge">${sizePrice.toFixed(2)}</div>
</div>
<div>
<h3 style={{ margin:'8px 0 6px' }}>{pizza.name}</h3>
<p className="muted" style={{ margin:0, fontSize:'.95rem' }}>{pizza.description}</p>
<div className="size-picker" style={{ marginTop:8 }}>
<span className="muted">Size:</span>
<button type="button" className={`size-btn ${size==='S'?'active':''}`} onClick={()=>setSize('S')}>S</button>
<button type="button" className={`size-btn ${size==='M'?'active':''}`} onClick={()=>setSize('M')}>M</button>
<button type="button" className={`size-btn ${size==='L'?'active':''}`} onClick={()=>setSize('L')}>L</button>
</div>
</div>
<div className="pizza-bottom">
<div></div>
<button className="btn" onClick={add}>Add to cart</button>
</div>
</motion.div>
);
}