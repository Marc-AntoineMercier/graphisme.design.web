import { FooterSectionRessource, type FooterSectionRessourceProps } from "./footer.section.component";

export type FooterRessourceProps = {
  sections: FooterSectionRessourceProps[];
}

export function FooterRessource({ sections }: FooterRessourceProps) {

  return (
    <div>
      {sections.map((section, index) => (
        <FooterSectionRessource
          key={index} 
          title={section.title} 
          links={section.links} />
      ))}
    </div>
  )
}
