import React, { useRef, createContext } from 'react';
import Refactor from './Toggle'
import { useTitleInput } from './hooks/useTitleInput'

export const UserContext = createContext();

const App = () => {
 // const [state, useState] = useState(initialState)
  const [name, setName] = useTitleInput('')
  const ref = useRef();
  console.log('ref:', ref)

  return (
    <UserContext.Provider
    value={{
      user: false
    }}
    >
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>Dishes</h1>
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
