import { getCurrentYear } from "@/utils"

export function FooterCopyright() {
  const currentYear = getCurrentYear();
  
  return (
    <p>&copy; {currentYear} My React App. All rights reserved.</p>
  )
}
