import { Option, type OptionProps } from "./option.component";
import "./navbar.option.css";

export type NavbarOptionProps = {
  options: OptionProps[];
}

export function NavbarOption({ options }: NavbarOptionProps) {

  return (
    <>
      <div className="navbar-option">
        {options.map((option, index) => (
          <Option key={index} render={option.render}/>
        ))}
      </div>
    </>
  )
}
