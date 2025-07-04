
import './App.css'
import Passbook from './component/Passbook'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from './component/Card'
import Header from './component/Header'
import {Toaster} from 'react-hot-toast'
import GetAll from './component/GetAll'

function App() {
  
  return (
    <>
    <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Passbook />} />
        <Route path='/print_passbook/:id' element={<Card />} />
        <Route path='/getAllUser' element={<GetAll />} />
      </Routes>
      </BrowserRouter>
      <Toaster />
      
      
    </>
  )
}

export default App
