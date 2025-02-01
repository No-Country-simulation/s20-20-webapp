'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import AuthForm from '../_component/Form/Form'
import AuthBtn from '../_component/AuthBtn/AuthBtn'
import AuthPassword from '../_component/AuthPassword/AuthPassword'
import Link from 'next/link'
import AuthEmail from '../_component/AuthEmail/AuthEmail'

import './style.css'

export default function Login() {
  const { push } = useRouter();

  async function onSubmit(form: FormData) {
    const email = form.get('email');
    const password = form.get('password');
    const hasNotCredentials = !(email && password)
  
    if (hasNotCredentials) return
    
    const res = await signIn('credentials', { email, password, redirect: false })
    
    if (!res!.error) push('/menu')
  }
  return <>
    <Image src='/Cell-Phone-and-Credit-Card-Mockup.svg' alt='Cell phone and Credit Card Mockup' width={600} height={600} />
    <AuthForm title='Bienvenido' text='Por favor ingrese sus datos para iniciar sesión' className='login' onSubmit={onSubmit}>
      <AuthEmail />
      <AuthPassword leyend='contraseña' />
      <Link href={'/password-recover'}>¿OLVIDASTE TU CONTRASEÑA?</Link>
      <menu>
        <li><AuthBtn>Iniciar Sesión</AuthBtn></li>
        <li><AuthBtn mod='inherit' href='/register'>Registrate</AuthBtn></li>
      </menu>
    </AuthForm>
  </>
}