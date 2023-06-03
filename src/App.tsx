import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clients from './Pages/Clients'
import Clientscomponent from './Components/Clients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Clients/>
     
    </>
  )
}

export default App
