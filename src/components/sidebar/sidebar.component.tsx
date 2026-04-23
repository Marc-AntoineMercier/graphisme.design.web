import { type ReactNode } from "react"
import "./sidebar.css"

export type SidebarPosition = "left" | "right"

export type SidebarProps = {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {

  return (
    <div>
      <div>
      </div>
      <div className="sidebar">
        {children}
      </div>
    </div>
  )

}
