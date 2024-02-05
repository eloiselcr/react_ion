import React, { useState } from 'react';

// Exercice 29 : 
// 1) Créer un composant qui affiche un login et un mdp (stockés dans 2 variables)
// 2) Créer un composant qui affiche un logi et un mdp (stockés dans un objet avec une propriété login/mdp)


// Petit 1)

const AffichageLogMdp = () => {
  const [user, setUser] = useState({ login: 'JulienCode', mdp: 'Rapidecho' });

  return (
    <div>
      <p>Login: {user.login}</p>
      <p>Mot de passe: {user.mdp}</p>
    </div>
  );
};

// export default AffichageLogMdp;


// -----------------------------------------------------------------------------------


// Petit 2)
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

// export default User;

