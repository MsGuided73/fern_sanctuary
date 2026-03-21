import React from 'react'
import { GardenPortal } from './components/GardenPortal'

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', margin: '1rem 0', fontWeight: 'lighter' }}>Fern's Sanctuary</h1>
      <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontStyle: 'italic' }}>
        "A gentle, patient sanctuary with misty skies, unfurling seeds, and deep greens."
      </p>
      
      <div style={{ 
        marginTop: '3rem', 
        padding: '2rem', 
        border: '1px border rgba(255,255,255,0.1)', 
        borderRadius: '1rem',
        background: 'rgba(255,255,255,0.02)'
      }}>
        <p>Your sanctuary is breathing. The seeds are safe.</p>
      </div>

      <GardenPortal />
    </div>
  )
}

export default App
