import React, { useRef, createContext, useState, useEffect } from 'react';
import  useAbortableFetch  from 'use-abortable-fetch'
import {  useSpring, animated } from 'react-spring'
import Refactor from './Toggle'
import { useTitleInput } from './hooks/useTitleInput'

export const UserContext = createContext();

const App = () => {
 // const [state, useState] = useState(initialState)
  const [name, setName] = useTitleInput('')
  const ref = useRef();
  const { data = [], loading } = useAbortableFetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
  
  const props = useSpring({opacity: 1, from: { opacity: 0 }})
  console.log(props)



 

    return (
    <UserContext.Provider
    value={{
      user: true
    }}
    >
    <div className="main-wrapper" ref={ref}>
      <animated.h1 style={props} onClick={() => ref.current.classList.add('new-fake-class')}>
      I like turtles
      </animated.h1>
      <Refactor />
    
      <form onSubmit={(e) => {
        e.preventDefault();        
      }
    }>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <button>Submit</button>
      </form>
    {data && data.map(dish => (
      
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
