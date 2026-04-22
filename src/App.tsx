import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage } from '@/pages';

export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}