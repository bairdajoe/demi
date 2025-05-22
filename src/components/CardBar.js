import React from 'react';

function CardBar({ deck, setSelectedCard }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, width: '100%', display: 'flex',
      justifyContent: 'center', background: '#111', padding: '10px', zIndex: 10
    }}>
      {deck.map((card, idx) => (
        <button
          key={idx}
          onClick={() => setSelectedCard(card)}
          style={{
            margin: '0 10px', padding: '10px 20px', fontSize: '16px',
            background: '#333', color: '#fff', border: '1px solid #555'
          }}
        >
          {card}
        </button>
      ))}
    </div>
  );
}

export default CardBar;
