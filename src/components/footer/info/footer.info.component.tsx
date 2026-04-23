import { FooterInfoIcons, type FooterIconProps } from "./footer.icons.component";
import { FooterInfoLinks, type FooterLinkProps } from "./footer.links.component";
import { FooterCopyright } from "./footer.copyright.component";

export type FooterInfoProps = {
  icons: FooterIconProps[];
  links: FooterLinkProps[];
}

export function FooterInfo({ icons, links }: FooterInfoProps) {
  return (
    <div>
      <FooterInfoIcons icons={icons} />
      <FooterInfoLinks links={links} />
      <FooterCopyright />
    </div>
  )
}