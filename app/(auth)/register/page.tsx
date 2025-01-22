import Image from "next/image";
import AuthForm from "../_component/Form/Form";
import AuthBtn from "../_component/AuthBtn/AuthBtn";
import './style.css'

export default function Register() {
  return<>
    <Image src='/Floating-Credit-Cards-Mockup.png' alt='Floating credit cards' width={600} height={1200} />
    <AuthForm action={'function'} title="Bienvenido" text="Para empezar, ingresá un DNI o un  Cuit" className="dni-cuit">
      <label>
        <span>El documento determinará quien será titular de la cuenta</span>
        <input type="text" name="id" />
      </label>
      <AuthBtn>CONTINUAR</AuthBtn>
    </AuthForm>
  </>
}