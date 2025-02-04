import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";

import "../style/nav.css";

export default function Nav() {
  return (
    <header className="header">
      <Logo />

      <nav className="nav">
        <ul className="list">
          <li className="item">
            <Link href="#servicios" className="link">
              Servicios
            </Link>
          </li>

          <li className="item">
            <Link href="#cripto" className="link">
              Cripto
            </Link>
          </li>

          <li className="item">
            <Link href="#ofrecemos" className="link">
              Lo que ofrecemos
            </Link>
          </li>
        </ul>
      </nav>

      <div className="btns">
        <Button type="primary" to="/login">
          Iniciar Sesión
        </Button>
        <Button type="secundary" to="/register">
          Registrarse
        </Button>
      </div>
    </header>
  );
}
