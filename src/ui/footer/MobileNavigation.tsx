// ui/footer/MobileNavigation.tsx
'use client'

import { useState } from 'react'
import CTA from '@/ui/CTA'
import LinkList from '@/ui/header/LinkList'
import CTAList from '@/ui/CTAList'
import { cn } from '@/lib/utils'
import { FaBars, FaTimes } from 'react-icons/fa'

type MobileNavigationProps = {
  menu: (Sanity.Link | Sanity.LinkList)[] | undefined
  ctas: Sanity.CTA[]
}

export default function MobileNavigation({ menu, ctas }: MobileNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <button
        className="md:hidden fixed bottom-3 right-3 z-50 rounded-md p-2 border border-black"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <nav className="flex flex-col items-center space-y-4">
          {menu?.map((item, key) => {
            switch (item._type) {
              case 'link':
                return <CTA className="text-4xl p-4" link={item} key={key} onClick={handleLinkClick} />
              case 'link.list':
                return <LinkList {...item} key={key} onLinkClick={handleLinkClick} />
              default:
                return null
            }
          })}
        </nav>
        <CTAList className="mt-8" ctas={ctas} />
      </div>
    </>
  )
}