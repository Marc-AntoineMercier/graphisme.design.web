import './App.css'
import { Routes, Route } from 'react-router-dom'

export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </>
  )
}