import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/cartSlice';


export default function Navbar() {
const items = useSelector(selectCartItems);
const count = items.reduce((s, i) => s + i.quantity, 0);


return (
<nav className="nav">
<div className="container nav-inner">
<div className="nav-left">
<NavLink to="/" className="brand">DJ‑Pizzaria</NavLink>
</div>
<div className="nav-right">
<NavLink to="/menu" className={({isActive}) => isActive ? 'active' : ''}>Menu</NavLink>
<NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
<NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
<NavLink to="/cart" className={({isActive}) => isActive ? 'active' : ''}>Cart <span className="badge">{count}</span></NavLink>
</div>
</div>
</nav>
);
}