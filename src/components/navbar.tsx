import { Logo } from "./logo";

export function Navbar() {

  return (
    <>
      <nav>
        <Logo to={"/home"}/>
      </nav>
    </>
  )
}
