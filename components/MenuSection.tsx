
import React, { useState } from 'react';
import { MENU_ITEMS, THEME } from '../constants';
import { Category } from '../types';

const categories: (Category | 'All')[] = ['All', 'Main Courses', 'Fast Food', 'Snacks', 'Drinks'];

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category | 'All'>('All');

  const filteredItems = activeTab === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  const styles = {
    section: {
      padding: '80px 24px',
      backgroundColor: '#FAFAFA',
    } as React.CSSProperties,
    header: {
      textAlign: 'center',
      marginBottom: '60px',
    } as React.CSSProperties,
    title: {
      fontSize: '48px',
      fontFamily: THEME.fontSerif,
      color: THEME.dark,
    } as React.CSSProperties,
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '48px',
    } as React.CSSProperties,
    tabBtn: (isActive: boolean): React.CSSProperties => ({
      padding: '10px 24px',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: `1px solid ${isActive ? THEME.accent : '#DDDDDD'}`,
      backgroundColor: isActive ? THEME.accent : THEME.white,
      color: isActive ? THEME.white : THEME.textLight,
      transition: 'all 0.2s',
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto',
    } as React.CSSProperties,
    card: {
      backgroundColor: THEME.white,
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column', // Vertically stacked
    } as React.CSSProperties,
    img: {
      width: '100%',
      height: '240px',
      objectFit: 'cover',
      backgroundColor: '#EEE', // Placeholder color
    } as React.CSSProperties,
    cardBody: {
      padding: '24px',
    } as React.CSSProperties,
    itemTitle: {
      fontSize: '22px',
      fontFamily: THEME.fontSerif,
      marginBottom: '8px',
      color: THEME.dark,
    } as React.CSSProperties,
    itemPrice: {
      color: THEME.accent,
      fontWeight: 'bold',
      fontSize: '18px',
    } as React.CSSProperties,
    itemDesc: {
      fontSize: '14px',
      color: THEME.textLight,
      lineHeight: 1.5,
      marginTop: '8px',
    } as React.CSSProperties
  };

  return (
    <section id="menu" style={styles.section}>
      <div style={styles.header}>
        <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: THEME.accent, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Our Specialties</h2>
        <h3 style={styles.title}>Our Menu</h3>
      </div>

      <div style={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            style={styles.tabBtn(activeTab === cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {filteredItems.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.img} />
            <div style={styles.cardBody}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={styles.itemTitle}>{item.name}</h4>
                <span style={styles.itemPrice}>{item.price}</span>
              </div>
              <p style={styles.itemDesc}>{item.description}</p>
              <div style={{ marginTop: '20px', fontSize: '10px', fontWeight: 'bold', color: '#AAA', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {item.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
