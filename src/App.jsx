import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  return (
  <div className="app-container">
    <h1>Hello Ragnarok!</h1>
    <button onClick={() => setIsActive(!isActive)}>{isActive? 'Hide Animation' : 'Show Animation'} </button>
    <img src="/ragna.jpg" alt="Ragna" width="300" />
  <div className={`box ${isActive ? 'animate' : ''}`}></div>
  </div>
  );
}

