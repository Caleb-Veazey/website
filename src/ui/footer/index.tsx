// ui/footer/index.tsx
import getSite from '@/lib/getSite'
import Link from 'next/link'
import CTA from '@/ui/CTA'
import LinkList from '@/ui/header/LinkList'
import CTAList from '@/ui/CTAList'
import MobileNavigation from './MobileNavigation'

export default async function Footer() {
  const { title, menu, ctas, convertKitMailingList } = await getSite()

  return (
    <footer className="fixed bg-white/80 md:bg-transparent md:text-white md:[text-shadow:1px_1px_8px_rgba(0,0,0,0.8)] md:text-3xl bottom-0 w-full pb-4 pt-5 md:py-2">
      <div className="px-4 max-w-screen-xl flex flex-col md:flex-row md:place-items-start">
          
          <nav className="hidden md:flex md:flex-wrap md:gap-10 md:mx-0">
            {menu?.map((item, key) => {
              switch (item._type) {
                case 'link':
                  return <CTA link={item} key={key} />
                case 'link.list':
                  return <LinkList {...item} key={key} />
                default:
                  return null
              }
            })}
          </nav>
          <CTAList className="mt-8 hidden md:block" ctas={ctas} />
        
        <MobileNavigation menu={menu} ctas={ctas} convertKitMailingList={convertKitMailingList} />
        <div className="hidden mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}