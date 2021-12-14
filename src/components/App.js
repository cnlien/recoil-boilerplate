import React from 'react'

// STYLES
import '../styles/global.scss'

// COMPONENTS
import Counter from './Counter'

const App = () => {
  return (
    <div className='App'>
      <h1>The project is running with Recoil</h1>
      <Counter />
    </div>
  )
}

export default App
