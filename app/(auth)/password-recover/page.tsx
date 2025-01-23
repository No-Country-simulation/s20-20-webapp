import Image from "next/image";
import AuthForm from "../_component/Form/Form";
import AuthBtn from "../_component/AuthBtn/AuthBtn";

export default function PasswordRecover() {
  return <>
    <Image src='/coins-drop.svg' alt='throwed coins'  width={600} height={1200} />
    <AuthForm title="Recuperar contraseña" action={'function'} >
      <label>
        <span>Correo electrónico</span>
        <input type="email" name="email" placeholder="ejemplo@gmail.com" />
      </label>
      <menu>
        <li><AuthBtn>Enviar</AuthBtn></li>
        <li><AuthBtn mod="inherit" href="#">Volver a Inicio</AuthBtn></li>
      </menu>
    </AuthForm>
  </>
}