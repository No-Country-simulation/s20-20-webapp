import Image from 'next/image'
import AuthForm from '../_component/Form/Form'
import './style.css'
import AuthBtn from '../_component/AuthBtn/AuthBtn'

export default function Login() {
  return <>
    <Image src='/Cell-Phone-and-Credit-Card-Mockup.png' alt='Cell phone and Credit Card Mockup' width={600} height={600} />
    <AuthForm action={'function'} title='Bienvenido' text='Por favor ingrese sus datos para iniciar sesión' className='login'>
      <label>
        <span>Correo Electrónico</span>
        <input type="email" name="email" placeholder='ejemplo@gmail.com' />
      </label>
      <label>
        <span>contraseña</span>
        <span className='password-wrapper'>
          <input type="password" name='password' placeholder={'* '.repeat(8)} />
          <button type='button' ><img src='/blind-eye.svg' alt='blind eye' /></button>
        </span>
      </label>
      <p>¿OLVIDASTE TU CONTRASEÑA?</p>
      <menu>
        <li><AuthBtn>INICIAR SESIÓN</AuthBtn></li>
        <li><AuthBtn mod='inherit' href='/register'>REGISTRATE</AuthBtn></li>
      </menu>
    </AuthForm>
  </>
}