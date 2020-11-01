import React, { useRef, createContext, useState, useEffect } from 'react';
import Refactor from './Toggle'
import { useTitleInput } from './hooks/useTitleInput'

export const UserContext = createContext();

const App = () => {
 // const [state, useState] = useState(initialState)
  const [name, setName] = useTitleInput('')
  const ref = useRef();

  const [dishes, setDishes] = useState([])
  // get the dishes and load the state
    const fetchDishes = async () => {
    const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')
    const data = await res.json();
    setDishes(data)
    }


  // useEffect will need to be invoked to make the API call
  useEffect(() => {
    fetchDishes()
  },[]); 

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
    {dishes.map(dish => (
      
      <article className="dish-card dish-card-withImage">
        <h3 key={dish}>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
      {dish.ingredients.map(ingredient =>
        <span key={ingredient}>{ingredient}</span>
        )}
    </div>
      </article>
      ))}
      
    </div>
    </UserContext.Provider>
  );
};

export default App;
