import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, AboutPage, GraveyardPage, DetailGraveyardPage } from '@/pages';
import { Navbar, Footer } from '@/components';
import { useRef, useState, useEffect } from 'react';

const cursorBaseRadius = 4;
const cursorHoverRadius = 12;

function expFollow(current: number, target: number, deltaTime: number) {
  let diff = target - current;
  let new_diff = diff * 0.75;//Math.pow( 0.001, deltaTime );
  return target - new_diff;
}

export function App() {
  const cursorRef = useRef(null);
  const mouse = useRef({left: 0, top: 0, bottom: 0, right: 0})
  const last = useRef({left: 0, top: 0, bottom: 0, right: 0, timestamp: -1})
  // const [mouseX, setmouseX] = useState(0);
  // const [mouseY, setmouseY] = useState(0);

  
  useEffect(() => {
    function placeCursor() {
      // ignore null bulshit
      let cursorRadius = cursorBaseRadius;
      const hoveredElement = document.querySelector(".hoverable:hover");
      const highlightableElement = document.querySelector(".highlightable:hover");

      let top;
      let bottom;
      let right;
      let left;

      if (hoveredElement) {
        let rect = hoveredElement.getBoundingClientRect();
        top = rect.top - cursorRadius;
        left = rect.left - cursorRadius;
        right = (window.innerWidth - rect.right) - cursorRadius;
        bottom = (window.innerHeight - rect.bottom) - cursorRadius;
      } else if (highlightableElement) {
        let range = document.caretRangeFromPoint(mouse.current.left, mouse.current.top);
        // console.log(range);
        let rect = range.getClientRects()[0];
        top = rect.top - cursorRadius;
        // left = rect.left - cursorRadius;
        // right = (window.innerWidth - rect.right) - cursorRadius;
        bottom = (window.innerHeight - rect.bottom) - cursorRadius;
        // top = mouse.current.top - cursorHoverRadius;
        left = mouse.current.left - cursorRadius;
        right = mouse.current.right - cursorRadius;
        // bottom = mouse.current.bottom - cursorHoverRadius;
        if (Math.abs(rect.left - mouse.current.left) > 15) {
          top = mouse.current.top - cursorRadius;
          bottom = mouse.current.bottom - cursorRadius;
        }
      } else {
        top = mouse.current.top - cursorRadius;
        left = mouse.current.left - cursorRadius;
        right = mouse.current.right - cursorRadius;
        bottom = mouse.current.bottom - cursorRadius;
      }
      let now = Date.now();
      //if (last.current.timestamp != -1) {
        top = expFollow(last.current.top, top, now - last.current.timestamp);
        bottom = expFollow(last.current.bottom, bottom, now - last.current.timestamp);
        left = expFollow(last.current.left, left, now - last.current.timestamp);
        right = expFollow(last.current.right, right, now - last.current.timestamp);
      //}

      cursorRef.current.style.left = left + "px";
      cursorRef.current.style.top = top + "px";
      cursorRef.current.style.right = right + "px";
      cursorRef.current.style.bottom = bottom + "px";
      last.current.left = left;
      last.current.top = top;
      last.current.right = right;
      last.current.bottom = bottom;
      last.current.timestamp = now;

      if (document.querySelector(":hover") == null) {
        cursorRef.current.style.opacity = "0";
        last.current.timestamp = -1;
      } else {
        cursorRef.current.style.opacity = "1";
      }
      console.log(last.current);
    }
    
    document.querySelector("body")?.addEventListener("mousemove", function (e) {
      mouse.current.left = e.clientX;
      mouse.current.top = e.clientY;
      mouse.current.right = window.innerWidth - e.clientX;
      mouse.current.bottom = window.innerHeight - e.clientY;
      // placeCursor();
    });

    function frameUpdate() {
      // console.log("running");
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