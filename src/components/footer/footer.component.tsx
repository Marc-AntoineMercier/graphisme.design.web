import { getCurrentYear } from "@/utils";
import { FooterRessource } from "./ressource/footer.ressource.component";
import type { FooterSectionRessourceProps } from "./ressource/footer.section.component";

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

export function Footer() {
  const currentYear = getCurrentYear();

  return (
    <>
      <footer>
        <FooterRessource sections={sections}/>
        <p>&copy; {currentYear} My React App. All rights reserved.</p>
      </footer>
    </>
  )
}
