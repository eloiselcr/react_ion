import React, { useState } from 'react';

// Exercice 33 : 
// Ajouter 2 composants enfants qui possèdent chacun un input. Lorsque l'input de l'enfant est rensigné alors on remonte 
// l'information au parent. Si tous les inputs enfants sont renseignés alors le parent devient verts sinon il reste rouge.


const ChildInput = ({ onInputChange }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
      onInputChange(value);
    };
  
    return (
      <div>
        <label>
          Input enfant:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      </div>
    );
  };
  
  const ParentComponent = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
  
    const handleInput1Change = (value) => {
      setInput1(value);
    };
  
    const handleInput2Change = (value) => {
      setInput2(value);
    };
  
    const isAllInputsFilled = input1 && input2;
  
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildInput onInputChange={handleInput1Change} />
        <ChildInput onInputChange={handleInput2Change} />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: isAllInputsFilled ? 'green' : 'red',
            marginTop: '10px',
          }}
        ></div>
      </div>
    );
  };
  
  export default ParentComponent;