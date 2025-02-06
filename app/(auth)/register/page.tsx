'use client'

import Image from "next/image";
import AuthForm from "../_component/Form/Form";
import AuthBtn from "../_component/AuthBtn/AuthBtn";
import './style.css'
import AuthPassword from "../_component/AuthPassword/AuthPassword";
import AuthEmail from "../_component/AuthEmail/AuthEmail";
import { register } from "../_lib/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const { push } = useRouter();

  function submit(form: FormData) {
    const email = form.get('email');
    const password = form.get('password');
    const confirm = form.get('confirm');
    const hasNotCredentials = !(email && password);
    const isNotTheSamePassword = password !== confirm;

    if (hasNotCredentials || isNotTheSamePassword) return
    
    register({ email, password })
      .then(() => push('/login'))
      .catch(console.error)
  }
  
  return<>
    <Image src='/Floating-Credit-Cards-Mockup.svg' alt='Floating credit cards' width={600} height={1200} />
    <AuthForm title="Bienvenido" text="Ingresa tú correo electrónico" className="register" onSubmit={submit}>
      <AuthEmail />
      <AuthPassword leyend="Contraseña" />
      <AuthPassword leyend="Repetir Contraseña" name="confirm" />
      <menu>
        <li><AuthBtn>Registrarse</AuthBtn></li>
        <li><AuthBtn mod="inherit" href="/login">Iniciar Sesión</AuthBtn></li>
      </menu>
    </AuthForm>
  </>
}