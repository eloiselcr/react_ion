import React, { useState } from 'react';

// Exercice 31 : 
// Créer un composant qui affiche un formulaire login/mdp. Vérifier la saisie du mdp est si il est différent de '1234',
// afficher le texte en rouge.


const Formulaire = () => {
  const [formData, FormulaireData] = useState({ login: '', mdp: '' });
  const [errorMessage, MsgErreur] = useState('');

  const handleInputChange = (e) => {
    FormulaireData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si le mot de passe est correct = 1234
    if (formData.mdp !== '1234') {
      MsgErreur('Mot de passe incorrect. Veuillez réessayer.');
    } else {
      MsgErreur('Mot de passe correct !');
    }
  };

  return (
    <div>
      <h1>Formulaire de Connexion</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Login : 
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Mot de passe : 
          <input
            type="password"
            name="mdp"
            value={formData.mdp}
            onChange={handleInputChange}
            style={{ borderColor: errorMessage ? 'red' : '' }}
          />
        </label>
        <br />
        <button type="submit">Se connecter</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Formulaire;


