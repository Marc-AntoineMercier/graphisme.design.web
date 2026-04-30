import { Logo, NavbarOption, type OptionProps } from "@/components";
import { CloseButton, NavigationButton, SearchButton } from "@/components/button";
import { SearchContent, NavigationContent } from "@/components/navbar/content";
import "./navbar.css";
import type { FooterLinkProps } from "../footer/info";

const routes: FooterLinkProps[] = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/graveyard", label: "Graveyard" },
]

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
      content: <NavigationContent routes={routes}/>,
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
