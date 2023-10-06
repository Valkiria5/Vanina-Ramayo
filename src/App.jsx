import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Scroll from './components/scroll/Scroll'
import Carousel from './components/carousel/Carousel'
import Skills from './components/skills/Skill'
import Proyectos from './components/proyectos/Proyectos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skills/>}/>
      <Route path='/proyetcos' element={<Proyectos/>}/>
    </Routes>
    <Scroll/>
    </div>
  )
}

export default App
