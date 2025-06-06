import { useState } from 'react'
import Home from './pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import './styles/global.css';
import FullPage from './pages/FullPage.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='fullpage' element={<FullPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
