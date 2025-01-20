import Form from 'next/form'
import './Form.css'

export default function AuthForm({
  action,
  children,
  title,
  text = '',
}: {
  action: NonNullable<string | ((formData: FormData) => void | Promise<void>) | undefined>;
  children: React.ReactNode;
  title: string;
  text?: string;
}) {
  const heading = <h1>{title}</h1>

  return <>
    <Form action={action} className='auth'>
      {!!text ? 
        <hgroup>
          {heading}
          <p>{text}</p>
        </hgroup> :
        heading
      }
      {children}
    </Form>
  </>
}