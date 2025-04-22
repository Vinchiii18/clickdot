import { useState } from 'react';
import './App.css';

function App() {
  const [dots, setDots] = useState<[number, number][]>([]);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const newDot: [number, number] = [e.clientX, e.clientY];
    setDots(prevDots => [...prevDots, newDot]);
  }

  return (
    <div onClick={handleClick} style={{height: '100vh', width: '100vw', position: 'relative' }}>
      {dots.map(([x, y], index) => (
        <div key={index} style={{ position: 'absolute', top: y, left: x, width: '10px', height: '10px',backgroundColor: 'red', borderRadius: '50%', transform: 'translate(-50%, -50%)'}}/>
      ))}
    </div>
  );
}

export default App;
