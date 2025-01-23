import Image from 'next/image'
import AuthForm from '../_component/Form/Form'
import './style.css'
import AuthBtn from '../_component/AuthBtn/AuthBtn'
import AuthPassword from '../_component/AuthPassword/AuthPassword'
import Link from 'next/link'
import AuthEmail from '../_component/AuthEmail/AuthEmail'

export default function Login() {
  return <>
    <Image src='/Cell-Phone-and-Credit-Card-Mockup.svg' alt='Cell phone and Credit Card Mockup' width={600} height={600} />
    <AuthForm action={'function'} title='Bienvenido' text='Por favor ingrese sus datos para iniciar sesión' className='login'>
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