import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';


export default function CartItem({ item }){
const dispatch = useDispatch();
return (
<div className="cart-item">
<img src={item.image} alt={item.name} />
<div className="cart-info">
<h4>{item.name}</h4>
<p>${item.price.toFixed(2)}</p>
</div>
<div className="cart-controls">
<input type="number" min="1" value={item.quantity} onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))} />
<button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
</div>
</div>
);
}