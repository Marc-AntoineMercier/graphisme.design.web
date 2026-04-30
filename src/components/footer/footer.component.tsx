import { FooterInfo, type FooterIconProps, type FooterLinkProps } from "./info"
import { FooterRessource, type FooterSectionRessourceProps } from "./ressource"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import "./footer.css";

export const sections: FooterSectionRessourceProps[] = [
  {
    "title": "Company",
    "links": [
      {
        "label": "About Us",
        "url": "/about"
      },
      {
        "label": "Careers",
        "url": "/careers"
      },
    ]
  },
  {
    "title": "Support",
    "links": [
      {
        "label": "Contact Us",
        "url": "/contact"
      },
      {
        "label": "Help Center",
        "url": "/help"
      },
    ]
  }
] as const;

export const links: FooterLinkProps[] = [
  {
    "label": "Privacy Policy",
    "to": "/privacy"
  },
  {
    "label": "Terms of Service",
    "to": "/terms"
  }
] as const;

export const icons: FooterIconProps[] = [
  {
    "to": "https://www.facebook.com",
    "icon": <FacebookIcon />,
  },
  {
    "to": "https://www.twitter.com",
    "icon": <XIcon />
  },
  {
    "to": "https://www.instagram.com",
    "icon": <InstagramIcon />
  }
] as const;

export function Footer() {

  return (
    <>
      <footer id="footer">
        <FooterRessource sections={sections}/>
        <FooterInfo icons={icons} links={links} />
      </footer>
    </>
  )
}
