import { Logo } from "@/components";
import "./navbar.css";

export function Navbar() {

  return (
    <>
      <nav className="navbar container">
        <Logo to={"/home"}/>
      </nav>
    </>
  )
}
