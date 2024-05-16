// ui/header/LinkList.tsx
import CTA from '@/ui/CTA'

export default function LinkList({ label, links, onLinkClick }: Sanity.LinkList & { onLinkClick?: () => void }) {
  return (
    <div>
      <h3 className="mb-2 font-bold">{label}</h3>
      <ul className="space-y-1">
        {links?.map((link, key) => (
          <li key={key}>
            <CTA className="link" link={link} onClick={onLinkClick} />
          </li>
        ))}
      </ul>
    </div>
  )
}