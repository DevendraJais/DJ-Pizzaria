import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Confirmation(){
const order = useSelector(s => s.order.lastOrder);
if (!order) return (
<section className="page">
<h2>Order Confirmation</h2>
<p>No order found. <Link to="/menu">Order now</Link></p>
</section>
);


return (
<section className="page">
<h2>Thank you — Order placed!</h2>
<p>Order #{order.id}</p>
<p>Name: {order.customer.name}</p>
<p>Address: {order.customer.address}</p>
<p>Total: ${order.total.toFixed(2)}</p>
<Link to="/track">Track order</Link>
</section>
);
}