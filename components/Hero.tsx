
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { RESTAURANT_DATA, THEME } from '../constants';

const Hero: React.FC = () => {
  const styles = {
    section: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: THEME.dark,
      color: THEME.white,
      textAlign: 'center',
      overflow: 'hidden',
    } as React.CSSProperties,
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      zIndex: 1,
    } as React.CSSProperties,
    bgImage: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
    } as React.CSSProperties,
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      padding: '0 24px',
      margin: '0 auto', // Ensuring centering
    } as React.CSSProperties,
    title: {
      fontSize: 'clamp(40px, 8vw, 72px)',
      fontFamily: THEME.fontSerif,
      marginBottom: '24px',
      lineHeight: 1.1,
    } as React.CSSProperties,
    subtitle: {
      fontSize: 'clamp(16px, 4vw, 20px)',
      color: '#CCCCCC',
      marginBottom: '40px',
      fontWeight: 300,
      lineHeight: 1.6,
    } as React.CSSProperties,
    btnPrimary: {
      backgroundColor: THEME.accent,
      color: THEME.white,
      padding: '16px 32px',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: `0 10px 20px rgba(230, 126, 34, 0.3)`,
    } as React.CSSProperties,
    btnSecondary: {
      backgroundColor: THEME.white,
      color: THEME.dark,
      padding: '16px 32px',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-flex',
    } as React.CSSProperties
  };

  return (
    <section id="home" style={styles.section}>
      <img 
        src="https://images.unsplash.com/photo-1517248135467-4c7ed9d42177?auto=format&fit=crop&w=1920&q=80" 
        alt="Ambiance" 
        style={styles.bgImage}
      />
      <div style={styles.overlay}></div>
      
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to {RESTAURANT_DATA.name}</h1>
        <p style={styles.subtitle}>{RESTAURANT_DATA.tagline}</p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <a href="#menu" style={styles.btnPrimary}>
            Explore Menu
            <ArrowRight size={20} />
          </a>
          <a href="#contact" style={styles.btnSecondary}>
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
