/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Boop! <code>Llama</code> boop 🦙.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


// Exercice 28

import React, { useState } from 'react';

// Composant RandomColorText
const RandomColorText = () => {
  // Utilisation du state pour stocker la couleur actuelle
  const [textColor, setTextColor] = useState('#000000');

  // Fonction pour générer une couleur aléatoire au format hexadécimal
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Gestionnaire pour changer la couleur lorsqu'on survole le texte
  const handleMouseOver = () => {
    // Génère une nouvelle couleur aléatoire
    const newColor = getRandomColor();
    // Met à jour le state avec la nouvelle couleur
    setTextColor(newColor);
  };

  // Rendu du composant
  return (
    <div>
      {/* Utilisation du composant h1 avec le style dynamique en fonction de textColor */}
      <h1
        style={{ color: textColor }}
        // Ajout d'un gestionnaire d'événements pour l'événement onMouseOver
        onMouseOver={handleMouseOver}
      >
        Texte avec couleur aléatoire
      </h1>
    </div>
  );
};

export default RandomColorText;

