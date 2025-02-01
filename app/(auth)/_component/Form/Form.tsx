import Form from 'next/form'
import './Form.css'
import { FormEvent } from 'react';

export default function AuthForm({
  action = '',
  children,
  title,
  text = '',
  className = '',
  onSubmit,
}: {
  action?: NonNullable<string | ((formData: FormData) => void | Promise<void>) | undefined>;
  children: React.ReactNode;
  title: string;
  text?: string;
  className?: string;
  onSubmit?: (form: FormData) => void;
}) {
  const heading = <h1>{title}</h1>

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit?.(formData);
  };

  return <>
    <Form action={action} className={`auth${className && ' ' + className}`} onSubmit={submit}>
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