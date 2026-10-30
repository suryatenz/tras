import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Languages from './components/Languages'
import Translate from './components/Translate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Languages/> */}
     <Translate/>
    </>
  )
}

export default App
