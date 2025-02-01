'use client'

import { useState } from "react";
import "./AuthPassword.css";

const state = [
  'password',
  'text',
]

export default function AuthPassword({
  leyend,
  name = "password",
}: {
  leyend: string;
  name?: string;
}) {
  const [toggler, setToggler] = useState(0);

  return (
    <>
      <label>
        <span>{leyend}</span>
        <span className="password-wrapper">
          <input type={state[toggler]} name={name} placeholder={"* ".repeat(8)} required />
          <button type="button" onClick={() => setToggler(s => +(!s))}>
            <img src="/blind-eye.svg" alt="blind eye" />
          </button>
        </span>
      </label>
    </>
  );
}
