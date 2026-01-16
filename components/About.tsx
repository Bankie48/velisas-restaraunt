
import React from 'react';
import { ChefHat, Anchor, Heart } from 'lucide-react';
import { THEME } from '../constants';

const About: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      padding: '100px 24px',
      backgroundColor: THEME.white,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginTop: '60px',
    },
    highlight: {
      padding: '40px',
      borderRadius: '24px',
      backgroundColor: '#FAFAFA',
      transition: 'transform 0.3s',
      border: '1px solid #EEE',
    },
    iconWrap: {
      width: '64px',
      height: '64px',
      backgroundColor: THEME.accent + '22',
      color: THEME.accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '16px',
      margin: '0 auto 24px',
    },
    hTitle: {
      fontSize: '22px',
      fontFamily: THEME.fontSerif,
      marginBottom: '12px',
      color: THEME.dark,
    },
    hText: {
      fontSize: '15px',
      color: THEME.textLight,
      lineHeight: 1.6,
    }
  };

  const highlights = [
    {
      icon: ChefHat,
      title: 'Masterful Cooking',
      text: 'Our chefs blend traditional Swahili recipes with modern global techniques for a unique fusion experience.'
    },
    {
      icon: Anchor,
      title: 'Daily Fresh Catch',
      text: 'Sourced directly from the local Msasani fisherman at dawn, ensuring the finest quality seafood on your plate.'
    },
    {
      icon: Heart,
      title: 'Warm Hospitality',
      text: 'Experience the authentic spirit of Karibu. Our team is dedicated to making you feel right at home.'
    }
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: THEME.accent, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Our Journey</h2>
        <h3 style={{ fontSize: '42px', fontFamily: THEME.fontSerif, color: THEME.dark, marginBottom: '24px' }}>Born from the Ocean</h3>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: THEME.textLight, fontSize: '18px', lineHeight: 1.6 }}>
          Nestled on the shores of Msasani Bay, Velisa's started as a humble dream to celebrate Tanzania's rich coastal heritage.
        </p>

        <div style={styles.grid}>
          {highlights.map((h, i) => (
            <div key={i} style={styles.highlight}>
              <div style={styles.iconWrap}>
                <h.icon size={32} />
              </div>
              <h4 style={styles.hTitle}>{h.title}</h4>
              <p style={styles.hText}>{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
