import './auth.css'

export default function Auth({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <main className='auth'>
      { children }
    </main>
  </>
}