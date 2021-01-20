// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (previousCount, change) => {
  return ({...previousCount, ...change});
}
// KCD version
// const countReducer = (state, action) => ({...state, ...action})
// key is to spread the change (or action, in Redux parlance) to destructure the changed property name(s)

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state;
  const increment = () => setState({count: count + step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
