// next/src/ui/ConvertKitMailingList.tsx
import React from 'react'
import Script from 'next/script'

type ConvertKitMailingListProps = {
  linkText: string
  className?: string
  scriptSrc: string
}

const ConvertKitMailingList: React.FC<ConvertKitMailingListProps> = ({ linkText, scriptSrc, className }) => {
  const regex = /\/([^\/]+)\/index\.js$/
  const match = scriptSrc.match(regex)
  const dataUid = match ? match[1] : ''
  
  return (
    <>
      <a className={className} data-formkit-toggle={dataUid} href={scriptSrc.replace('/index.js', '')}>
        {linkText}
      </a>
      <Script async data-uid={dataUid} src={scriptSrc} />
    </>
  )
}

export default ConvertKitMailingList