import { FooterInfoLink, type FooterLinkProps } from "@/components/footer/info";

function NavigationContentFooter() {

  return (
    <footer>

    </footer>
  )
}

type NavigationProps = {
  routes: FooterLinkProps[];
}

function Navigation({ routes }: NavigationProps) {

  return (
    <nav className="navigation">
      {routes.map((routeProps, index) => (
        <FooterInfoLink key={index} {...routeProps}/>
      ))}
    </nav>
  )
  
}

export type NavigationContentProps = {
  routes: FooterLinkProps[];
}

export function NavigationContent({ routes }: NavigationContentProps) {

  return (
    <>
      <Navigation routes={routes} />
      <NavigationContentFooter />
    </>
  )
}
