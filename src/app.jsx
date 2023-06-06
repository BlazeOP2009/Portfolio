import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/main.css"

// pages
import Home from "./pages/home"
import PastWork from "./pages/pastwork"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastworks" element={<PastWork />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App