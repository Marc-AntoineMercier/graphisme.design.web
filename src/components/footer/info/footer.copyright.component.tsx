
export function FooterCopyright() {
  const currentYear = new Date().getFullYear();
  return (
    <p>&copy; {currentYear} My React App. All rights reserved.</p>
  )
}
