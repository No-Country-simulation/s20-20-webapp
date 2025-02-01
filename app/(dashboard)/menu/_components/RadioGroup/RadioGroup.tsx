import './RadioGroup.css'

export default function RadioGroup({
  fields,
  name,
  className = '',
  radio = false,
}: {
  fields: string[];
  name: string;
  className?: string;
  radio?: boolean;
}) {
  return <>
    {fields.map(value => <label className={`${!radio && 'radio'}${className && ' ' + className}`} key={value} >
      <input type="radio" name={name} value={value} defaultChecked={fields[0] === value} />
      <span>{value}</span>
    </label>)}
  </>
}