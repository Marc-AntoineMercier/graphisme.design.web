import { Link, type To } from "react-router"

export type LogoProps = {
  to: To
}

export function Logo({ to }: LogoProps) {
  return (
    <div className="">
      <h1>
        <Link to={to}>
          <img src="toto" alt="logo application" />
        </Link>
      </h1>
    </div>
  )
}