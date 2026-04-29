import { Link, type To } from "react-router"

export type LogoProps = {
  to: To
}

export function Logo({ to }: LogoProps) {
  return (
    <Link className="logocontainer" to={to}>
      <img src="./deceased.png" alt="logo" />
      <h1>
        The Pirate Graveyard
      </h1>
    </Link>
  )
}