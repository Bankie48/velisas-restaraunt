
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS, RESTAURANT_DATA, THEME } from '../constants';

const Reviews: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      padding: '100px 24px',
      backgroundColor: THEME.white,
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    summaryCard: {
      backgroundColor: THEME.dark,
      color: THEME.white,
      padding: '40px',
      borderRadius: '24px',
      textAlign: 'center',
      marginBottom: '60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
    },
    reviewList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
    },
    card: {
      padding: '32px',
      borderRadius: '20px',
      backgroundColor: '#F9F9F9',
      border: '1px solid #EEE',
      position: 'relative',
    },
    quote: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      color: '#DDD',
    }
  };

  return (
    <section id="reviews" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.summaryCard}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: THEME.accent, textTransform: 'uppercase', letterSpacing: '2px' }}>Testimonials</h3>
          <div style={{ fontSize: '64px', fontFamily: THEME.fontSerif, fontWeight: 'bold' }}>{RESTAURANT_DATA.rating} Stars</div>
          <div style={{ display: 'flex', color: THEME.accent, gap: '4px' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill={i < 4 ? THEME.accent : "none"} />)}
          </div>
          <p style={{ fontSize: '18px', opacity: 0.8 }}>Based on {RESTAURANT_DATA.reviewCount} Google Reviews</p>
        </div>

        <div style={styles.reviewList}>
          {REVIEWS.map((review) => (
            <div key={review.id} style={styles.card}>
              <Quote style={styles.quote as any} size={40} />
              <div style={{ display: 'flex', color: THEME.accent, marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < review.rating ? THEME.accent : "none"} />)}
              </div>
              <p style={{ fontSize: '16px', fontStyle: 'italic', marginBottom: '24px', color: THEME.textMain }}>
                "{review.comment}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: THEME.accent, color: THEME.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {review.author[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: THEME.dark }}>{review.author}</div>
                  <div style={{ fontSize: '12px', color: THEME.textLight }}>{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
