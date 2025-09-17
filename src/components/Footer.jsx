// export default function Footer(){
// return (
// <footer className="footer">
// <div className="container">
// <p>© {new Date().getFullYear()} DJ‑Pizzaria</p>
// <p className="muted">Freshly baked. Fast delivery.</p>
// </div>
// </footer>
// );
// }

// import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-8 mt-10">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
//         {/* Brand Info */}
//         <div>
//           <h2 className="text-2xl font-bold mb-2">🍕 DJ-Pizzaria</h2>
//           <p className="text-sm opacity-80">
//             Freshly baked. Fast delivery. Happiness in every bite.
//           </p>
//           <p className="mt-3 text-xs opacity-70">
//             © {new Date().getFullYear()} DJ-Pizzaria. All rights reserved.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
//           <ul className="space-y-1 text-sm">
//             <li><a href="#" className="hover:underline">Home</a></li>
//             <li><a href="#" className="hover:underline">Menu</a></li>
//             <li><a href="#" className="hover:underline">Order Now</a></li>
//             <li><a href="#" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact + Social */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
//           <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
//             <Phone size={16}/> +91 98765 43210
//           </p>
//           <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
//             <Mail size={16}/> support@dj-pizzaria.com
//           </p>

//           {/* Social Icons */}
//           <div className="flex justify-center md:justify-start gap-4 mt-3">
//             <a href="#" className="hover:text-yellow-300"><Facebook /></a>
//             <a href="#" className="hover:text-yellow-300"><Instagram /></a>
//             <a href="#" className="hover:text-yellow-300"><Twitter /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide mb-2 text-yellow-400">
            🍕 DJ-Pizzaria
          </h2>
          <p className="text-sm opacity-80">
            Freshly baked. Fast delivery. Happiness in every bite.
          </p>
          <p className="mt-4 text-xs opacity-70">
            © {new Date().getFullYear()} DJ-Pizzaria. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Menu", "Order Now", "Contact"].map((link, i) => (
              <li key={i}>
                <a 
                  href="#"
                  className="relative group transition-all duration-300"
                >
                  <span className="group-hover:text-yellow-400">{link}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">Get in Touch</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm hover:text-yellow-400 transition-colors">
            <Phone size={16}/> +91 98765 43210
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm hover:text-yellow-400 transition-colors">
            <Mail size={16}/> support@dj-pizzaria.com
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
