
import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { RESTAURANT_DATA, THEME } from '../constants';

const Footer: React.FC = () => {
  const styles = {
    footer: {
      backgroundColor: THEME.dark,
      color: '#AAAAAA',
      padding: '80px 24px 40px',
    } as React.CSSProperties,
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '48px',
      marginBottom: '60px',
    } as React.CSSProperties,
    h: {
      color: THEME.white,
      fontSize: '20px',
      fontFamily: THEME.fontSerif,
      marginBottom: '24px',
    } as React.CSSProperties,
    list: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    } as React.CSSProperties,
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '14px',
    } as React.CSSProperties,
    socials: {
      display: 'flex',
      gap: '16px',
      marginTop: '24px',
    } as React.CSSProperties,
    socialIcon: {
      color: THEME.white,
    } as React.CSSProperties,
    copyright: {
      textAlign: 'center',
      paddingTop: '40px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      fontSize: '12px',
      letterSpacing: '1px',
    } as React.CSSProperties
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h3 style={{ ...styles.h, fontSize: '24px', letterSpacing: '2px' }}>VELISA'S</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
            Exceptional coastal dining at Msasani Bay. We invite you to experience the authentic spirit of Swahili hospitality.
          </p>
          <div style={styles.socials}>
            <a href={RESTAURANT_DATA.socials.instagram} style={styles.socialIcon}><Instagram size={20} /></a>
            <a href={RESTAURANT_DATA.socials.facebook} style={styles.socialIcon}><Facebook size={20} /></a>
            <a href={RESTAURANT_DATA.socials.twitter} style={styles.socialIcon}><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 style={styles.h}>Contact Details</h4>
          <ul style={styles.list}>
            <li style={styles.item}><MapPin size={16} color={THEME.accent} /> {RESTAURANT_DATA.location}</li>
            <li style={styles.item}><Phone size={16} color={THEME.accent} /> {RESTAURANT_DATA.phone}</li>
            <li style={styles.item}><Mail size={16} color={THEME.accent} /> {RESTAURANT_DATA.email}</li>
          </ul>
        </div>

        <div>
          <h4 style={styles.h}>Opening Hours</h4>
          <ul style={styles.list}>
            <li style={styles.item}><Clock size={16} color={THEME.accent} /> {RESTAURANT_DATA.hours}</li>
          </ul>
        </div>
      </div>

      <div style={styles.copyright}>
        © {new Date().getFullYear()} VELISA'S RESTAURANT. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
