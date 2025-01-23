import Image from "next/image";
import AuthForm from "../_component/Form/Form";
import AuthBtn from "../_component/AuthBtn/AuthBtn";
import './style.css'
import AuthPassword from "../_component/AuthPassword/AuthPassword";

export default function Register() {
  return<>
    <Image src='/Floating-Credit-Cards-Mockup.png' alt='Floating credit cards' width={600} height={1200} />
    <AuthForm action={'function'} title="Bienvenido" text="Ingresa tú correo electrónico" className="register">
      <label>
        <span>Correo electrónico</span>
        <input type="email" name="email" placeholder="ejemplo@gmail.com" />
      </label>
      <AuthPassword leyend="Contraseña" />
      <AuthPassword leyend="Repetir Contraseña" name="confirm" />
      <menu>
        <li><AuthBtn>Registrarse</AuthBtn></li>
        <li><AuthBtn mod="inherit" href="/login">Iniciar Sesión</AuthBtn></li>
      </menu>
    </AuthForm>
  </>
}