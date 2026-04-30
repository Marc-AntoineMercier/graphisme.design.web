import { Logo, NavbarOption, type OptionProps } from "@/components";
import { CloseButton, NavigationButton, SearchButton } from "@/components/button";
import { SearchContent, NavigationContent } from "@/components/content";
import "./navbar.css";

const options: OptionProps[] = [
  {
    render: {
      openButton: <SearchButton />,
      closeButton: <CloseButton />,
      content: <SearchContent />,
    },
  },
  {
    render: {
      openButton: <NavigationButton />,
      closeButton: <CloseButton />,
      content: <NavigationContent />,
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
