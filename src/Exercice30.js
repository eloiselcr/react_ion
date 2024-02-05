import React, { useState } from 'react';

// Exercice 30 : 
// 1) Créer un composant avec une opération terniaire (condition ? vrai:faux)
// 2) Créer un composant avec un mapping (map boucle)


// Petit 1)

const MappingBoucle = ({ condition }) => {
    return (
      <div>
        {condition ? (
          <p>La condition est vraie!</p>
        ) : (
          <p>La condition est fausse!</p>
        )
        }
      </div>
    );
  };
  
// export default MappingBoucle;



// -----------------------------------------------------------------------------------


// Petit 2)

const MaListe = ({ items }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  
  const AffichageListe = () => {
    const data = ['Item 1', 'Item 2', 'Item 3'];
  
    return (
      <div>
        <h1>Affichage de la liste</h1>
        <MaListe items={data} />
      </div>
    );
  };

// export default AffichageListe;
