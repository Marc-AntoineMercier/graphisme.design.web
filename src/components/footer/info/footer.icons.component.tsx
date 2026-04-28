import type { ReactNode } from "react";
import { Link, type To } from "react-router";

export type FooterIconProps = {
  to: To;
  icon: ReactNode;
}

export function FooterIcon({ to, icon }: FooterIconProps) {
  return (
    <Link to={to}>
      {icon}
    </Link>
  )
}

export type FooterInfoIconsProps = {
  icons: FooterIconProps[];
}

export function FooterInfoIcons({ icons }: FooterInfoIconsProps) {
  return (
    <div id="footer-info-icons">
      {icons.map((iconProps, index) => (
        <FooterIcon key={index} {...iconProps} />
      ))}
    </div>
  )
}