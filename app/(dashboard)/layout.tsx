'use client'

import './SideBar.css'
import RenderLinks from './_components/RenderLinks/RenderLinks';
import {menu, wallet, transaction, analysis, commerce, configuration, session} from './_lib/svgConst'
import { Links } from './_lib/type';
import { SessionProvider } from 'next-auth/react';
import User from './_components/User/User';

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
      <SessionProvider >
        <User />
      </SessionProvider>
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