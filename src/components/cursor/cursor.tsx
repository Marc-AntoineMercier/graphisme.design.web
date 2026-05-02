import { useEffect, useRef } from "react";

type MousePosition = {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

type LastMousePosition = {
    timestamp: number;
} & MousePosition

const cursorBaseRadius = 4;
const cursorHoverRadius = 12;

function expFollow(current: number, target: number, deltaTime: number) {
  let diff = target - current;
  let new_diff = diff * 0.75;
  return target - new_diff;
}

export function Cursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const mouse = useRef<MousePosition>({left: 0, top: 0, bottom: 0, right: 0})
    const last = useRef<LastMousePosition>({left: 0, top: 0, bottom: 0, right: 0, timestamp: -1});
    
      
    useEffect(() => {
        function placeCursor() {
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

                let rect = range.getClientRects()[0];
                top = rect.top - cursorRadius;

                bottom = (window.innerHeight - rect.bottom) - cursorRadius;

                left = mouse.current.left - cursorRadius;
                right = mouse.current.right - cursorRadius;

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
                top = expFollow(last.current.top, top, now - last.current.timestamp);
                bottom = expFollow(last.current.bottom, bottom, now - last.current.timestamp);
                left = expFollow(last.current.left, left, now - last.current.timestamp);
                right = expFollow(last.current.right, right, now - last.current.timestamp);

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
        });

        function frameUpdate() {
            if (cursorRef.current != null) {
                placeCursor();
            }
            requestAnimationFrame(frameUpdate);
        }
        requestAnimationFrame(frameUpdate);
    }, [])

    return (
        <div ref={cursorRef} id="cursor" style={{ top: "0px", left: "0px"}}></div>
    )
}
