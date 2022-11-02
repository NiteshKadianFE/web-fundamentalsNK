import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AppFinal from './AppFinal'
import Login from './Login'

function RoutesApp() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/login" element={<div><Login /></div>} />
          <Route path="/final" element={<div><AppFinal /></div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default RoutesApp