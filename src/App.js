import React, { useState } from 'react';


const App = () => {

  // const [state, useState] = useState(initialState)
  const [name, setName] = useState('')

  return (
    <div className="main-wrapper">
      <h1>Dishes</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
       <h3>{name}</h3>
    </div>
  );
};

export default App;
