import React, { useState } from 'react';

/*
// Exercice 1 : Créer un composant qui affiche un login et un mot de passe qui sont stocké dans deux variables.
const AffichageLogMdp = () => {
  const [user, setUser] = useState({ login: 'JulienCode', mdp: 'Rapidecho' });

  return (
    <div>
      <p>Login: {user.login}</p>
      <p>Mot de passe: {user.mdp}</p>
    </div>
  );
};

export default AffichageLogMdp;
*/ 


// -----------------------------------------------------------------------------------


// Exercice 2 : Créer un composant qui affiche un login et un mot de passe qui sont stockés dans 1 variable 
// de l'objet User.

const UserDisplay = ({ user }) => {
  return (
    <div>
      <p>Login: {user.login}</p>
      <p>Mot de passe: {user.mdp}</p>
    </div>
  );
};

const User = () => {
  // objet User
  const user = { login: 'JulienCode', mdp: 'Rapidecho' };

  return (
    <div>
      <h1>Affichage des informations utilisateur</h1>
      <UserDisplay user={user} />
    </div>
  );
};

export default User;

