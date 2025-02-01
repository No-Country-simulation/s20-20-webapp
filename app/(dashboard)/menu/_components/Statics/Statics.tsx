import RadioGroup from '../RadioGroup/RadioGroup'
import './Statics.css'

const periods = [
  'Semana',
  'Mes',
  'Año',
];

const flow = [
  'Ingresos',
  'Gastos',
];

export default function Statics() {
  return <>
    <section className="statics" >
      <h2>Estadísticas</h2>
      <nav className='option-tab' >
        <RadioGroup name='period' fields={periods} />
      </nav>
      <h3>Gastos totales</h3>
      <p>$3,660.00</p>
      <div className='chart'>
        <nav className='flow'>
          <RadioGroup name="flow" fields={flow} />
        </nav>
      </div>
    </section>
  </>
}