import React, {useReducer} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + 1
      }
      case 'minus':
      return {
        count: state.count - 1
      }
      case 'reset':
      return {
        count: 0
      }
      default:
        throw new Error()
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
  <div>
    <button>+</button>
    <button>-</button>
    <button>Reset</button>
  </div>
  )
}

export default Counter