import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './assets/component/topbar'
import Header from './assets/component/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Topbar/>
   <Header/>
    </>
  )
}

export default App
