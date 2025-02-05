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

export default function MenuNav({
  onlyFinancials = false,
  className = '',
  mod = '',
}: {
  onlyFinancials?: boolean;
  className?: string;
  mod?: '' | 'green';
}) {
  return <>
    <NavList className={`menu-nav${className && ' ' + className}${mod && ' ' + mod}`} links={links.slice(0, onlyFinancials ? 3 : 4)} />
  </>
}