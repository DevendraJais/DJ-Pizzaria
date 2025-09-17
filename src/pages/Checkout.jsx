import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, clearCart } from '../store/cartSlice';
import { placeOrder } from '../store/orderSlice';
import { useNavigate } from 'react-router-dom';


export default function Checkout(){
const items = useSelector(selectCartItems);
const total = useSelector(selectCartTotal);
const dispatch = useDispatch();
const navigate = useNavigate();


function handleSubmit(e){
e.preventDefault();
const fd = new FormData(e.target);
const customer = {
name: fd.get('name'),
address: fd.get('address'),
phone: fd.get('phone'),
};


// Fake route (lat,lng) polyline towards a sample destination
const route = [
{ lat: 19.076, lng: 72.8777 },
{ lat: 19.080, lng: 72.8890 },
{ lat: 19.085, lng: 72.9000 },
{ lat: 19.089, lng: 72.9120 },
{ lat: 19.095, lng: 72.9250 },
];
const order = { id: Date.now(), customer, items, total, route, payment: fd.get('payment') };
dispatch(placeOrder(order));
dispatch(clearCart());
navigate('/track');
}


if (items.length === 0) return <section className="page"><h2>Checkout</h2><p>Your cart is empty.</p></section>;


return (
<section className="page">
<h2>Checkout</h2>
<form onSubmit={handleSubmit} className="checkout-form">
<input name="name" placeholder="Full name" required />
<input name="phone" placeholder="Phone" required />
<input name="address" placeholder="Delivery address" required />
<div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
<label style={{ display:'block' }}>Payment method
<select name="payment" required style={{ display:'block', width:'100%', padding:12, border:'1px solid #e5e7eb', borderRadius:12 }}>
<option value="cod">Cash on delivery</option>
<option value="card">Card</option>
<option value="upi">UPI</option>
</select>
</label>
<label style={{ display:'block' }}>Promo code (optional)
<input name="promo" placeholder="SAVE10" />
</label>
</div>
<div className="checkout-summary">
<p>Order total: ${total.toFixed(2)}</p>
<button type="submit">Place Order</button>
</div>
</form>
</section>
);
}