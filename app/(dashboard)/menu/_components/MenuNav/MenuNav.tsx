import NavList from "@/app/(dashboard)/_components/LinkList/LinkList";
import { CVU, input, output, transfer } from "@/app/(dashboard)/_lib/svgConst";
import { Links } from "@/app/(dashboard)/_lib/type";
import './MenuNav.css'

const links: Links = [
  [input, 'Ingresar', undefined],
  [transfer, 'Transferir', undefined],
  [output, 'Retirar', undefined],
  [CVU, 'Tu CVU', undefined],
];

export default function MenuNav() {
  return <>
    <NavList className="menu-nav" links={links} />
  </>
}