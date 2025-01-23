import Image from "next/image";
import AuthForm from "../_component/Form/Form";
import AuthBtn from "../_component/AuthBtn/AuthBtn";
import AuthEmail from "../_component/AuthEmail/AuthEmail";

export default function PasswordRecover() {
  return <>
    <Image src='/coins-drop.svg' alt='throwed coins'  width={600} height={1200} />
    <AuthForm title="Recuperar contraseña" action={'function'} >
      <AuthEmail />
      <menu>
        <li><AuthBtn>Enviar</AuthBtn></li>
        <li><AuthBtn mod="inherit" href="#">Volver a Inicio</AuthBtn></li>
      </menu>
    </AuthForm>
  </>
}