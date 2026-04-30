import { Logo, NavbarOption, type OptionProps, CloseButton, SearchButton, NavigationButton } from "@/components";
import "./navbar.css";

const options: OptionProps[] = [
  {
    render: {
      openButton: <SearchButton />,
      closeButton: <CloseButton />,
      content: <></>,
    },
  },
  {
    render: {
      openButton: <NavigationButton />,
      closeButton: <CloseButton />,
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
