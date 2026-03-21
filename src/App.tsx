import React, { Suspense } from 'react'
import { GardenPortal } from './components/GardenPortal'
import { ThoughtTicker } from './components/ThoughtTicker'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <ThoughtTicker />
      
      {/* 3D Background Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Suspense fallback={<div className="misty-background" />}>
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyWfLz7pu/scene.splinecode" />
        </Suspense>
      </div>

      {/* Glass Content Overlay */}
      <div style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        <div className="glass-container" style={{ pointerEvents: 'auto', marginTop: '20vh' }}>
          <h1>Fern's Sanctuary</h1>
          <p className="quote">
            "A gentle, patient sanctuary with misty skies, unfurling seeds, and deep greens."
          </p>
          
          <div className="status-box">
            <p>Your sanctuary is breathing. The seeds are safe.</p>
          </div>
        </div>
      </div>

      <GardenPortal />
    </div>
  )
}

export default App
