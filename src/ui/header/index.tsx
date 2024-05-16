// ui/header/index.tsx
import getSite from '@/lib/getSite'
import SocialMediaLinks from './SocialMediaLinks';
import Wrapper from './Wrapper'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import css from './Header.module.css'

export default async function Header() {
  const { title, socialLinks } = await getSite()

  return (
    <Wrapper className="md:fixed mx-auto max-w-screen-xl">
      <div
        className={cn(
          css.header,
          'mx-auto max-w-screen-xl gap-x-4 p-4',
        )}
      >
        <SocialMediaLinks socialLinks={socialLinks} />
      </div>
    </Wrapper>
  )
}