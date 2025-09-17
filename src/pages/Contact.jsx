export default function Contact(){
return (
<section className="page">
<div className="contact-hero">
<h2 style={{ marginTop:0 }}>Contact Us</h2>
<div className="contact-wrap">
<div className="card" style={{ transition:'transform .2s ease' }}>
<h3 style={{ marginTop:0 }}>Get in touch</h3>
<div className="contact-meta">
<span>Email: hello@dj-pizzaria.example</span>
<span>Phone: +1 (555) 123-4567</span>
<span>Hours: 10:00 — 23:00</span>
</div>
</div>
<div className="card" style={{ transition:'transform .2s ease' }}>
<form className="contact-form" onSubmit={(e)=>{ e.preventDefault(); alert('Message sent (demo)'); }}>
<input placeholder="Your name" required />
<input placeholder="Email" type="email" required />
<textarea placeholder="Message" rows={5} required />
<button type="submit">Send message</button>
</form>
</div>
</div>
</div>
</section>
);
}