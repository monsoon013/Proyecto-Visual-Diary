import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/SignUp'
import AccountCreated from './components/CreAcc'
import './styles/darkTheme.css'
import './styles/lightTheme.css'
import Bienvenido from './components/Bienvenido'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path="/account-created" element={<AccountCreated />} />
      <Route path='/welcome' element={<Bienvenido />} />
    </Routes>
  )
}

export default App
