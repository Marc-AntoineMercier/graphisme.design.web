import type { ReactNode } from "react";
import { Link, type To } from "react-router";

export type FooterSectionInfoLinkProps = {
  label: ReactNode;
  url: To;
}

export function FooterSectionInfoLink({ label, url }: FooterSectionInfoLinkProps) {
  return (
    <Link to={url}>
      {label}
    </Link>
  )
}

export type FooterSectionRessourceProps = {
  title: ReactNode;
  links: FooterSectionInfoLinkProps[];
}

export function FooterSectionRessource({ title, links }: FooterSectionRessourceProps) {

  return (
    <div className="footer-ressource">
      <div className="footer-ressource-header">
        <h3>{title}</h3>
      </div>
      <div className="footer-ressource-links">
        {links.map((link, index) => (
          <FooterSectionInfoLink key={index} label={link.label} url={link.url}/>
        ))}
      </div>
    </div>
  )
}