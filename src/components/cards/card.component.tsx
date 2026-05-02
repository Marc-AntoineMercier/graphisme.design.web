import { ReactNode } from "react";

export type CardProps = {
  children: ReactNode
}

export function Card({ children }: CardProps) {

  return (
    <div className="card">
      {children}
    </div>
  )
}
