'use client'

import { usePathname } from "next/navigation";
import { Links } from "../../_lib/type";
import './RenderLinks.css'

export default function RenderLinks({
  links,
}:{
  links: Links;
}) {
  const path = usePathname();

  return <ul className="nav-list">
    {links.map(([svg, text, href = '#']) => <li key={text}>
      <a href={href} className={path === href ? 'active' : ''}>
        {svg}
        <p>{text}</p>
      </a>
    </li>)}
</ul>
}