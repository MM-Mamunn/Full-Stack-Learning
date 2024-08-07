import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment } from './redux/counter/counter'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
     <div className="con" style={{display: 'flex'}}>
    <span style={{ marginRight:"50px"}} className="msg">
     {count}
    </span>
     <button onClick={() => {if(count >0)dispatch(decrement())}}>-</button>
     <button onClick={() => dispatch(increment())}>+</button>
     </div>
    </>
  )
}

export default App
