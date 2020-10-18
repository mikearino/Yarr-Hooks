import React, { useState } from 'react';
import Refactor from './Toggle'

const App = () => {

  // const [state, useState] = useState(initialState)
  const [name, setName] = useState('')

  return (
    <div className="main-wrapper">
      <h1>Dishes</h1>
      <Refactor />
      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(name, setName)
      }
    }>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log(`email sent to ${value}`)
  setValue('')
}
export default App;
