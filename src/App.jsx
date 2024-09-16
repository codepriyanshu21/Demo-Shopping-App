import { Routes,Route } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
 

  return (
    <div>
      <div className='bg-slate-900'>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </div>
  )
}

export default App
