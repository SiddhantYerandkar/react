import React from 'react'
import Navbar from './components/Navbar'
import { Home } from './components/Home';
import { Routes, Route } from 'react-router-dom';
import { Admin } from './components/Admin';
import { Student } from './components/Student';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Student' element={<Student />} />
      </Routes>
    </>
  )
}

export default App