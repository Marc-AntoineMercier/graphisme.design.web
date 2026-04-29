import { getCurrentYear } from "@/utils"

export function FooterCopyright() {
  const currentYear = getCurrentYear();
  
  return (
    <p className="highlightable" id="copyright">&copy; {currentYear} My React App. All rights reserved.</p>
  )
}
