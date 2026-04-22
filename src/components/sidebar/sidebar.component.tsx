import { type ReactNode } from "react"
import "./sidebar.css"

export type SidebarPosition = "left" | "right"

export type SidebarProps = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    position?: SidebarPosition;
    width?: string
}

export function Sidebar({ children, isOpen, onClose, position = "right", width = "300px" }: SidebarProps) {
    return (
        <div 
            className={`sidebar ${isOpen ? "open" : ""}`} 
            style={{
                [position]: isOpen ? "0" : `-${width}`,
                width: width,
            }}
        >
            <button className="sidebar-close" onClick={onClose}>
                &times;
            </button>
            <div className="sidebar-content">{children}</div>
        </div>
    )

}
