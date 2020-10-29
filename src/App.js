import React, { useRef, createContext } from 'react';
import Refactor from './Toggle'
import { useTitleInput } from './hooks/useTitleInput'

export const UserContext = createContext();

const App = () => {
 // const [state, useState] = useState(initialState)
  const [name, setName] = useTitleInput('')
  const ref = useRef();

const reverseWord = word => {
  console.log("function called")
  return word.split("").reverse().join("")
}

const title = "I like turtles"
// use memo with expensive funciotns


  return (
    <UserContext.Provider
    value={{
      user: true
    }}
    >
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>
      I like turtles
      </h1>
      <Refactor />
    
      <form onSubmit={(e) => {
        e.preventDefault();        
      }
    }>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <button>Submit</button>
      </form>
    </div>
    </UserContext.Provider>
  );
};

export default App;
