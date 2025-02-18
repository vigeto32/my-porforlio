import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import kamenRiderLogo from './assets/kamen-rider-logo.jpg';
import henshinSound from './assets/sounds/henshin.mp3';
import clickSound from './assets/sounds/click.mp3';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [henshinPlayed, setHenshinPlayed] = useState(false); // Track if henshin sound has played

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const handleNavigation = (page) => {
    if (page === 'Home' && !henshinPlayed) {
      playSound(henshinSound);
      setHenshinPlayed(true); // Ensure it only plays once
    } else if (page !== 'Home') {
      playSound(clickSound);
    }
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <img src={kamenRiderLogo} alt="Kamen Rider Logo" className="logo" />
        <ul className="nav-list">
          {['Home', 'About', 'Projects', 'Contact'].map((page) => (
            <li
              key={page}
              className={`nav-item ${currentPage === page ? 'active' : ''}`}
              onClick={() => handleNavigation(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </nav>
      <div className="content">{currentPage === 'Home' && <Home />}</div>
    </div>
  );
}

export default App;
