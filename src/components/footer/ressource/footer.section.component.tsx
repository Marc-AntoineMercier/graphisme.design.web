import type { ReactNode } from "react";
import { Link, type To } from "react-router";

export type FooterSectionInfoLinkProps = {
  label: ReactNode;
  url: To;
}

export function FooterSectionInfoLink({ label, url }: FooterSectionInfoLinkProps) {
  return (
    <div>
      <Link to={url}>{label}</Link>
    </div>
  )
}

export type FooterSectionRessourceProps = {
  title: ReactNode;
  links: FooterSectionInfoLinkProps[];
}

export function FooterSectionRessource({ title, links }: FooterSectionRessourceProps) {

  return (
    <div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        {links.map((link, index) => (
          <FooterSectionInfoLink key={index} label={link.label} url={link.url}/>
        ))}
      </div>
    </div>
  )
}