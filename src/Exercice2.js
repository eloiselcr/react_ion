import React, { useState } from 'react';

// Exercice 2 : Créer un composant qui affiche un login et un mot de passe qui sont stockés dans 1 variable 
// de l'objet User.

import React from 'react';

const UserDisplay = ({ user }) => {
  return (
    <div>
      <p>Login: {user.login}</p>
      <p>Mot de passe: {user.mdp}</p>
    </div>
  );
};

const User = () => {
  // Création d'un objet User
  const user = { login: 'JulienCode', mdp: 'Rapidecho' };

  return (
    <div>
      <h1>Affichage des informations utilisateur</h1>
      <UserDisplay user={user} />
    </div>
  );
};

export default User;
