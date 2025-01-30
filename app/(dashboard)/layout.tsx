import './SideBar.css'
import RenderLinks from './_components/RenderLinks/RenderLinks';
import {menu, wallet, transaction, analysis, commerce, configuration, session} from './_lib/svgConst'
import { Links } from './_lib/type';

const navLinks: Links = [
  [menu, 'Menú', '/menu'],
  [wallet, 'Billetera', undefined],
  [transaction, 'Transacciones', undefined],
  [analysis, 'Análisis de ingresos', undefined],
  [commerce, 'Comercio', undefined],
];

const optLinks: Links = [
  [configuration, 'Configuración', undefined],
  [session, 'Cerrar sesión', undefined],
];

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