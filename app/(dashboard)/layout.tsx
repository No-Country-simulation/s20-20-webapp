import './SideBar.css'
import {menu, wallet, transaction, analysis, commerce, configuration, session} from './_lib/svgConst'

type Links = [React.ReactNode, string, string][];

const navLinks: Links = [
  [menu, 'Menú', 'menu'],
  [wallet, 'Billetera', ''],
  [transaction, 'Transacciones', ''],
  [analysis, 'Análisis de ingresos', ''],
  [commerce, 'Comercio', ''],
];

const optLinks: Links = [
  [configuration, 'Configuración', ''],
  [session, 'Cerrar sesión', ''],
];

const RenderLinks = ({ links }: { links: Links }) => <ul>
  {links.map(([svg, text, href = '#']) => <li key={text}>
    <a href={href}>
      {svg}
      <p>{text}</p>
    </a>
  </li>)}
</ul>;

export default function SideBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <header className="sidebar">
      <section className='profile'>
        <img src="/default-profile-image.png" alt="imagen de perfil" />
        <h2>Mateo Gonzaléz</h2>
      </section>
      <nav>
        <RenderLinks links={navLinks} />
      </nav>
      <nav>
        <hr />
        <RenderLinks links={optLinks} />
      </nav>
    </header>
    {children}
  </>
}