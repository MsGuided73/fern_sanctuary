import React from 'react'

export const ThoughtTicker = () => {
  const thought = "Patience is not the absence of action, but the wisdom of waiting for the right moment to unfurl."

  return (
    <div className="thought-ticker">
      <div className="ticker-content">
        {thought} &nbsp; • &nbsp; {thought} &nbsp; • &nbsp; {thought}
      </div>
    </div>
  )
}
