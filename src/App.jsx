import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const colorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div id="screen" style={{ height: '100vh', backgroundColor }} className="w-100">
      <button className="btn btn-primary" onClick={() => colorChange('blue')}>
        BLUE
      </button>
      <button className="btn btn-success" onClick={() => colorChange('green')}>
        GREEN
      </button>
      <button className="btn btn-danger" onClick={() => colorChange('red')}>
        RED
      </button>
      <button className="btn btn-warning" onClick={() => colorChange('yellow')}>
        YELLOW
      </button>
    </div>
  );
}

export default App;
