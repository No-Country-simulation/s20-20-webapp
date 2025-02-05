import './Widget.css'

export default function Widget({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string,
}) {
  return <>
    <section className={`widget${className && ' ' + className}`}>
      { children }
    </section>
  </>
}