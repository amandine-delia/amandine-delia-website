'use client'

// Need the "use client" directive for the Date to always be up to date
export const Copyright: React.FC = () => {
  return <p>&copy; {new Date().getFullYear()} Amandine D&apos;Elia. All rights reserved.</p>
}
