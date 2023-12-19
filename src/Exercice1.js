import React, { useState } from 'react';

// Exercice 1 : Créer un composant qui affiche un login et un mot de passe qui sont stocké dans deux variables.

const AffichageLogMdp = () => {
  // Utilisation de l'état local pour stocker l'objet User
  const [user, setUser] = useState({ login: 'JulienCode', mdp: 'Rapidecho' });

  return (
    <div>
      <p>Login: {user.login}</p>
      <p>Mot de passe: {user.mdp}</p>
    </div>
  );
};

export default AffichageLogMdp;

