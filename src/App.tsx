import React from 'react'
import { GardenPortal } from './components/GardenPortal'
import { ThoughtTicker } from './components/ThoughtTicker'

function App() {
  return (
    <>
      <ThoughtTicker />
      <div className="misty-background"></div>
      
      {/* Decorative floating elements */}
      <div className="seed" style={{ top: '20%', left: '15%', animationDelay: '0s' }}></div>
      <div className="seed" style={{ top: '60%', right: '10%', animationDelay: '2s' }}></div>
      <div className="seed" style={{ top: '80%', left: '40%', animationDelay: '4s' }}></div>

      <div className="glass-container">
        <h1>Fern's Sanctuary</h1>
        <p className="quote">
          "A gentle, patient sanctuary with misty skies, unfurling seeds, and deep greens."
        </p>
        
        <div className="status-box">
          <p>Your sanctuary is breathing. The seeds are safe.</p>
        </div>
      </div>

      <GardenPortal />
    </>
  )
}

export default App
