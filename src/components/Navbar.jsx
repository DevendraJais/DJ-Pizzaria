import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/cartSlice';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const items = useSelector(selectCartItems);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  // Toggle body scroll when mobile menu is open/closed
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.mobile-menu-container');
      const button = document.querySelector('.mobile-menu-button');
      
      if (isMobileMenuOpen && menu && button && 
          !menu.contains(event.target) && 
          !button.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Close menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    console.log('Toggling menu. Current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu and navigate
  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-left">
          <NavLink to="/" className="brand" onClick={closeMobileMenu}>
            DJ‑Pizzaria
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-right">
          <NavLink to="/menu" className={({isActive}) => isActive ? 'active' : ''}>
            Menu
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>
            About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? 'active cart-link' : 'cart-link'}>
            Cart <span className="badge">{count}</span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu">
          {/* Cart Button for Mobile */}
          <NavLink 
            to="/cart" 
            className="mobile-cart-button"
            onClick={closeMobileMenu}
          >
            <span>Cart</span>
            {count > 0 && <span className="cart-badge">{count}</span>}
          </NavLink>
          
          <NavLink 
            to="/menu" 
            className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavigation}
            style={{ color: 'white' }}
          >
            🍕 Menu
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavigation}
            style={{ color: 'white' }}
          >
            ℹ️ About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavigation}
            style={{ color: 'white' }}
          >
            📞 Contact
          </NavLink>
          <NavLink 
            to="/cart" 
            className={({isActive}) => `mobile-nav-link cart-link ${isActive ? 'active' : ''}`}
            onClick={handleNavigation}
            style={{ color: 'white' }}
          >
            🛒 Cart <span className="badge">{count}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}