import { Links } from "../../_lib/type";
import './LinkList.css'

export default function NavList({
  className = '',
  links,
  path = '',
}: {
  className: string;
  links: Links;
  path?: string;
}) {
  return <ul className={`link-list${className && ' ' + className}`}>
  {links.map(([svg, text, href = '#']) => <li key={text}>
      <a href={href} className={path === href ? 'active' : ''}>
        {svg}
        <p>{text}</p>
      </a>
    </li>)}
  </ul>
}