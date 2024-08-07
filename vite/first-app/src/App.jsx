import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [name, setName] = useState("name")
   const changed=(e)=>{
    setName(e.target.value);
   }
  return (
    <>
  <input type="text"  value={name} placeholder="name of you" onChange={changed} />
    </>
  )
}

export default App
