import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, AboutPage, GraveyardPage, DetailGraveyardPage } from '@/pages';
import { Navbar, Footer } from '@/components';
import { useRef, useState, useEffect } from 'react';

const cursorBaseRadius = 4;
const cursorHoverRadius = 32;

export function App() {
  const cursorRef = useRef(null);
  const mouse = useRef({left: 0, top: 0, bottom: 0, right: 0})
  // const [mouseX, setmouseX] = useState(0);
  // const [mouseY, setmouseY] = useState(0);

  
  useEffect(() => {
    function placeCursor() {
      // ignore null bulshit
      const cursorRadius = document.querySelector(".hoverable:hover") ? cursorHoverRadius : cursorBaseRadius;
      cursorRef.current.style.top = mouse.current.top - cursorRadius + "px";
      cursorRef.current.style.left = mouse.current.left - cursorRadius + "px";
      cursorRef.current.style.right = mouse.current.right - cursorRadius + "px";
      cursorRef.current.style.bottom = mouse.current.bottom - cursorRadius + "px";
      cursorRef.current.style.opacity = document.querySelector(":hover") == null ? "0" : "1";
    }
    
    document.querySelector("body")?.addEventListener("mousemove", function (e) {
      mouse.current.left = e.clientX;
      mouse.current.top = e.clientY;
      mouse.current.right = window.innerWidth - e.clientX;
      mouse.current.bottom = window.innerHeight - e.clientY;
      placeCursor();
    });

    function frameUpdate() {
      console.log("running");
      if (cursorRef.current != null) {
        placeCursor();
      // ignore null bulshit
      }
      requestAnimationFrame(frameUpdate);
    }
    requestAnimationFrame(frameUpdate);
  }, [])
  

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
      <div ref={cursorRef} id="cursor" style={{ top: "0px", left: "0px"}}></div>
    </>
  )
}