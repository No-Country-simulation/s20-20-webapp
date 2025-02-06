'use client'

import Image from "next/image";
import AuthForm from "../_component/Form/Form";
import AuthBtn from "../_component/AuthBtn/AuthBtn";
import AuthEmail from "../_component/AuthEmail/AuthEmail";

export default function PasswordRecover() {
  return <>
    <Image className="dropped-coins" src='/dropped-coins.svg' alt='throwed coins'  width={400} height={800} />
    <AuthForm title="Recuperar contraseña" >
      <AuthEmail />
      <menu>
        <li><AuthBtn>Enviar</AuthBtn></li>
        <li><AuthBtn mod="inherit" href="#">Volver a Inicio</AuthBtn></li>
      </menu>
    </AuthForm>
  </>
}