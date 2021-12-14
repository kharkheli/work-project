import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleProfile from './SingleProfile'
import Lost from './Lost'

import Home from './Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/:id" element={<SingleProfile />} />
        <Route path="/*" element={<Lost />} />
      </Routes>
    </Router>
  )
}

export default App
