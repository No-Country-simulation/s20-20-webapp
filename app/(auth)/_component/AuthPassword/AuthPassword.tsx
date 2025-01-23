import './AuthPassword.css'

export default function AuthPassword({
  leyend,
  name = 'password',
}: {
  leyend: string;
  name?: string;
}) {
  return <>
    <label>
      <span>{leyend}</span>
      <span className='password-wrapper'>
        <input type="password" name={name} placeholder={'* '.repeat(8)} />
        <button type='button' ><img src='/blind-eye.svg' alt='blind eye' /></button>
      </span>
    </label>
  </>
}