// ui/modules/HomePageModule.tsx
import Image from 'next/image'
import { FaPlay } from "react-icons/fa";
import { PortableText } from '@portabletext/react'
import Img from '../Img'

export default function HomePageModule({
  title,
  subtitle,
  image,
  primaryCTAText,
  primaryCTALink,
  videoLink,
}: Partial<{
  title: string
  subtitle: any
  image: Sanity.Image
  primaryCTAText: string
  primaryCTALink: string
  videoLink: string
}>) {
  return (
    <section className="pb-48 md:pb-16 md:flex max-w-screen-2xl mx-auto">
      <div className="text-white px-3 pb-7 flex flex-col text-center md:text-center items-center md:items-center gap-2 md:w-5/12 md:justify-center">
        <div className="text-5xl font-normal [text-shadow:1px_1px_8px_rgba(0,0,0,0.8)]">
          {title}
        </div>
        <div className="text-4xl font-normal [text-shadow:1px_1px_8px_rgba(0,0,0,0.8)]">
          <PortableText value={subtitle} />
        </div>
        {primaryCTAText && primaryCTALink && (
          <div className="pt-3 flex-col justify-center items-center gap-2.5 flex [text-shadow:1px_1px_8px_rgba(0,0,0,0.8)]">
            <a
              href={primaryCTALink}
              className="px-9 py-3 bg-slate-500 rounded-2xl drop-shadow-[1px_3px_10px_rgba(0,0,0,0.8)] justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-center text-neutral-100 text-3xl font-bold">
                {primaryCTAText}
              </div>
            </a>
          </div>
        )}
      </div>
      <div className="w-full md:w-7/12 max-w-lg aspect-square md:max-w-full mx-auto relative">
        {image && (
          <div className="w-full h-full absolute inset-0">
            <Img
              image={image}
              alt={image.alt || 'Album Cover'}
              className="w-full h-full object-cover"
              />
          </div>
        )}
        <div className="w-28 h-28 -bottom-14 right-0 absolute justify-start items-start gap-2.5 inline-flex">
          <a
            className="grow shrink basis-0 self-stretch bg-slate-500 rounded-full border-2 border-slate-500 flex place-items-center"
            href={videoLink || "#"}
          >
            <FaPlay className="w-10 h-10 mx-auto fill-white" />
					</a>
        </div>
      </div>
      
    </section>
  )
}