import { Logo } from "@/components";
import "./navbar.css";
import { NavbarOption } from "./navbar.option.component";
import { type OptionProps } from "./option.component";

const options: OptionProps[] = [
  {
    render: {
      openButton: "Search",
      closeButton: "Close",
      content: <></>,
    },
  },
  {
    render: {
      openButton: "Navigation",
      closeButton: "Close",
      content: <></>,
    }
  },
];

export function Navbar() {

  return (
    <>
      <nav className="navbar container">
        <Logo to={"/home"}/>
        <NavbarOption options={options}/>
      </nav>
    </>
  )
}
