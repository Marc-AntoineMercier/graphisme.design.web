import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);

// the cursed cursor part will go here :)

// const mousePosition = [0,0];
// const htmlElement = document.querySelector(":root");
// htmlElement?.addEventListener("mousemove", (event) => {
//   mousePosition[0] = event.clientX;
//   mousePosition[1] = event.clientY;
// })



