import React, { useState } from 'react';
import Refactor from './Toggle'

const App = () => {

  // const [state, useState] = useState(initialState)
  const [name, setName] = useState('')

  return (
    <div className="main-wrapper">
      <h1>Dishes</h1>
       <h3>{name}</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
      <Refactor />
    </div>
  );
};

export default App;
