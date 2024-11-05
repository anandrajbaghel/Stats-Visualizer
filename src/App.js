import React, { useContext } from 'react';
import PolygonMap from './components/PolygonMap';
import { ThemeContext } from './ThemeContext';
import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Now this will work

  return (
    <div className={`app-container ${theme}`}>
      <PolygonMap />

      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'night' ? 'Day' : 'Night'} Mode
      </button>
    </div>
  );
}

export default App;
