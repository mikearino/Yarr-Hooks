import React, { useState, useEffect } from 'react';
import Refactor from './Toggle'
import { useTitleInput } from './hooks/useTitleInput'

const App = () => {
 // const [state, useState] = useState(initialState)
  const [name, setName] = useTitleInput('')

  return (
    <div className="main-wrapper">
      <h1>Dishes</h1>
      <Refactor />
      <form onSubmit={(e) => {
        e.preventDefault();
 
      }
    }>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
