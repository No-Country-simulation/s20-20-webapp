import Link from 'next/link';
import './AuthBtn.css'

export default function AuthBtn({
  children,
  mod = '',
  href = '',
}: {
  children: string | React.ReactNode;
  mod?: 'inherit' | '';
  href?: string;
}) {
  if (!!href) return <>
    <Link href={href} className={`auth-btn${mod && ' ' + mod}`} >{children}</Link>
  </>

  return <>
    <button className={`auth-btn${mod && ' ' + mod}`} >{children}</button>
  </>
}