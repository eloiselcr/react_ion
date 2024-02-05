import React, { useState } from 'react';

// Exercice 32 : 
// Créer un composant qui affiche un formulaire login/mdp. Ajouter un composant enfant qui affiche une zone avec une couleur qui change
// en vert quand le login et le mdp est renseigné.


const Couleur = ({ estRempli }) => {
  const boxColor = estRempli ? 'green' : 'transparent';

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: boxColor,
        marginTop: '10px',
      }}
    ></div>
  );
};

const Formulaire = () => {
  const [formData, setFormData] = useState({ login: '', mdp: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Formulaire de Connexion</h1>
      <form>
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
          />
        </label>
        <br />
      </form> 
      <Couleur estRempli={formData.login && formData.mdp} /> 
    </div>
  );
};

export default Formulaire;
