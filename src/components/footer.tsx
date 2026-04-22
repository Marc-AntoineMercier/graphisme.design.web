import { getCurrentYear } from "@/utils";

export function Footer() {
  const currentYear = getCurrentYear();

  return (
    <>
      <footer>
        <p>&copy; {currentYear} My React App. All rights reserved.</p>
      </footer>
    </>
  )
}
