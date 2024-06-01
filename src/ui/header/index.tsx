// ui/header/index.tsx
import Script from 'next/script'
import getSite from '@/lib/getSite'
import ConvertKitMailingList from '@/ui/ConvertKitMailingList'
import SocialMediaLinks from './SocialMediaLinks';
import Wrapper from './Wrapper'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import css from './Header.module.css'

export default async function Header() {
  const { title, socialLinks, convertKitMailingList } = await getSite()

  return (
    <Wrapper className="md:fixed mx-auto max-w-screen-xl z-50">
      <div
        className={cn(
          css.header,
          'mx-auto max-w-screen-xl gap-x-4 p-4',
        )}
      >
        <SocialMediaLinks socialLinks={socialLinks} />
        {convertKitMailingList && (
          
            <ConvertKitMailingList
              linkText={convertKitMailingList.linkText}
              scriptSrc={convertKitMailingList.scriptSrc}
              className="fixed hidden md:block top-3 right-3 text-white text-xl underline"
            />
          
        )}
      </div>
    </Wrapper>
  )
}