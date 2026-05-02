import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, AboutPage, GraveyardPage, DetailGraveyardPage } from '@/pages';
import { Navbar, Footer, Cursor } from '@/components';

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace={true} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/graveyard" element={<GraveyardPage />} />
        <Route path="/graveyard/:id" element={<DetailGraveyardPage />}/>
      </Routes>
      <Footer />
      <Cursor />
    </>
  )
}