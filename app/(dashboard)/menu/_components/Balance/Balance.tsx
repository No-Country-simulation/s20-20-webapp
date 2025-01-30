import './Balance.css'

export default function Balance() {
  return <>
    <section className="balance">
      <h1>Dinero disponible</h1>
      <p>$ 1,323,980</p>
      <article className='performance'>
        <img src="/positive-performance.svg" alt="green arrow increasing" />
        <p>$ 3,030.98</p>
        <h3>Rendimientos</h3>
      </article>
      <article className='expenses'>
        <img src="/decreasing-pink-arrow.svg" alt="decreasing pink arrow" />
        <p>$ 223,980</p>
        <h3>Gastos</h3>
      </article>
      <div className='card-slot'>
        <article className='card' >
          <figure className='chip'>
            <img src="/EMV-Chip-icon.svg" alt="EMV chip" />
            <img src="/contactless-indicator-icon.svg" alt="contactless indicator" />
          </figure>
          <p className='num'>
            <span>5000</span>
            <span>0000</span>
            <span>0000</span>
            <span>0000</span>
          </p>
          <p className='date'>
            <span>VALID</span>
            <span>THRU</span>
            <span>00/00</span>
          </p>
          <h3 className='owner'>Mateo Gonzaléz</h3>
          <img className='institution' src="/financial-card-icon.svg" alt="financial institution" />
        </article>
      </div>
    </section>
  </>
}