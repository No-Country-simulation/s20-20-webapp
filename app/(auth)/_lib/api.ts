type Register = Record<'email' | 'password', FormDataEntryValue>

const postOpt = {
  method: 'POST',
  headers: {
    'Content-type': 'aplication/json',
  },
};

function confirm(res: Response) {
  if (res.ok) return res.json()
  return Promise.reject(`Error: ${res.status}`)
}

export function register(form: Register)  {
  const slug = 'api/auth/register';
  const body = JSON.stringify(form);

  return fetch(slug, { ...postOpt, body }).then(confirm)
}