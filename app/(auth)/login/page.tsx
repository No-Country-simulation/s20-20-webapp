import Image from 'next/image'
import AuthForm from '../_component/Form/Form'

export default function Login() {
  return <>
    <Image src='/Cell-Phone-and-Credit-Card-Mockup.png' alt='Cell phone and Credit Card Mockup' width={600} height={600} />
    <AuthForm action={'function'} title='Bienvenido' text='Por favor ingrese sus datos para iniciar sesión'>
      <p>correo electrónico</p>
      <p>contraseña</p>
    </AuthForm>
  </>
}