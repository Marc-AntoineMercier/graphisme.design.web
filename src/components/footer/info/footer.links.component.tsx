import type { ReactNode } from "react";
import { Link, type To } from "react-router";

export type FooterLinkProps = {
  to: To;
  label: ReactNode;
}

export function FooterInfoLink({ to, label }: FooterLinkProps) {

  return (
    <Link to={to} className="hoverable">
      {label}
    </Link>
  )
}

export type FooterInfoLinksProps = {
  links: FooterLinkProps[];
}

export function FooterInfoLinks({ links }: FooterInfoLinksProps) {
  return (
    <div id="footer-info-links">
      {links.map((linkProps, index) => (
        <FooterInfoLink key={index} {...linkProps} />
      ))}
    </div>
  )
}