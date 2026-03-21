import React from 'react';

export const GardenPortal: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      left: '32px',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 24px',
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '9999px',
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none',
      fontSize: '11px',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'all 0.3s'
    }}
    onClick={() => window.location.href = 'https://soulgarden.us'}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
    }}
    >
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#4ade80',
        boxShadow: '0 0 10px rgba(74,222,128,0.5)'
      }} />
      Return to Garden
    </div>
  );
};
