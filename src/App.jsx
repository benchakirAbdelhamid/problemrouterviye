import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Page from './Page';
import Pagee from './Pagee';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Link to='/page'>page 1</Link>
      <Link to='/page2'>page 2</Link>

      <Routes>
        <Route path='/page' element={<Page />} />
        <Route path='/page2' element={<Pagee />} />
      </Routes>
    </div>
  )
}

export default App
