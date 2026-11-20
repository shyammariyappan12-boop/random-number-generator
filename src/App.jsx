import React, { useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    const newNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNum);
  };

  return (
    <div className="app-container">
      <h1>Random Number Generator</h1>
      
      <div className="number-display">
        {randomNumber !== null ? (
          <h2>{randomNumber}</h2>
        ) : (
          <p className="placeholder">No number generated yet</p>
        )}
      </div>

      <button className="generate-btn" onClick={generateNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default App;