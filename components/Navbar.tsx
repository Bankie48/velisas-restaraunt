
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { RESTAURANT_DATA, THEME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles: { [key: string]: React.CSSProperties } = {
    container: {
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled ? THEME.white : 'transparent',
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      padding: isScrolled ? '12px 24px' : '24px 24px',
    },
    inner: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: THEME.fontSerif,
      color: isScrolled ? THEME.dark : THEME.white,
      textDecoration: 'none',
      letterSpacing: '2px',
    },
    linksContainer: {
      display: 'flex',
      gap: '32px',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 600,
      color: isScrolled ? THEME.textMain : THEME.white,
      transition: 'color 0.2s',
    },
    mobileMenu: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: THEME.white,
      padding: '24px',
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '20px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      zIndex: 1001,
    },
    hamburger: {
      display: 'block',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: isScrolled ? THEME.dark : THEME.white,
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={navStyles.container}>
      <div style={navStyles.inner}>
        <a href="#home" style={navStyles.logo}>
          {RESTAURANT_DATA.name.toUpperCase()}
        </a>
        
        <div className="hidden md:flex" style={navStyles.linksContainer}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={navStyles.link} className="hover-orange">
              {link.name}
            </a>
          ))}
          <a 
            href={RESTAURANT_DATA.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: THEME.accent,
              color: THEME.white,
              padding: '10px 20px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ShoppingCart size={16} />
            Order Online
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          style={navStyles.hamburger}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={navStyles.mobileMenu}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: THEME.fontSerif }}>{RESTAURANT_DATA.name}</span>
            <button onClick={() => setIsOpen(false)} style={{ border: 'none', background: 'none' }}><X size={28} /></button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ ...navStyles.link, color: THEME.dark, fontSize: '18px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={RESTAURANT_DATA.socials.whatsapp}
            style={{
              backgroundColor: THEME.accent,
              color: THEME.white,
              padding: '15px',
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            Order Now
          </a>
        </div>
      )}
      <style>{`
        .hover-orange:hover { color: ${THEME.accent} !important; }
        @media (max-width: 768px) { .hidden { display: none !important; } }
        @media (min-width: 769px) { .md\\:flex { display: flex !important; } .md\\:hidden { display: none !important; } }
      `}</style>
    </nav>
  );
};

export default Navbar;
