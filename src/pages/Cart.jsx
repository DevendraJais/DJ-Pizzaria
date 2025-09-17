import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cartSlice';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';


export default function Cart(){
const items = useSelector(selectCartItems);
const total = useSelector(selectCartTotal);


return (
<section className="page">
<h2>Your Cart</h2>
{items.length === 0 ? (
<p>Your cart is empty. <Link to="/menu">Browse menu</Link></p>
) : (
<>
<div className="cart-list">{items.map(i => <CartItem key={i.id} item={i} />)}</div>
<div className="cart-summary">
<h3>Total: ${total.toFixed(2)}</h3>
<Link to="/checkout" className="btn">Proceed to Checkout</Link>
</div>
</>
)}
</section>
);
}