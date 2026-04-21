import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Home</h1>
            <Link to={"/about"}>To About</Link>
          </>
          } />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </>
  )
}