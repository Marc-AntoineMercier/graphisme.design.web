import { FooterInfo, type FooterIconProps, type FooterLinkProps } from "./info"
import { FooterRessource, type FooterSectionRessourceProps } from "./ressource"
import InstagramIcon from '@mui/icons-material/Instagram';

const sections: FooterSectionRessourceProps[] = [
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
]

const links: FooterLinkProps[] = [
  {
    "label": "Privacy Policy",
    "to": "/privacy"
  },
  {
    "label": "Terms of Service",
    "to": "/terms"
  }
]

const icons: FooterIconProps[] = [
  {
    "to": "https://www.facebook.com",
    "icon": <InstagramIcon />
  },
  {
    "to": "https://www.twitter.com",
    "icon": <InstagramIcon />
  }
]

export function Footer() {

  return (
    <>
      <footer>
        <FooterRessource sections={sections}/>
        <FooterInfo icons={icons} links={links} />
      </footer>
    </>
  )
}
