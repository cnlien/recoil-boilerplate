import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { count as countAtom } from '../recoil/counter/atom'

const Counter = () => {
  const [number, setNumber] = useRecoilState(countAtom)

  return (
    <div className="App">
      <h2>
        Counter: <strong>{number}</strong>
      </h2>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  )
}

export default Counter
