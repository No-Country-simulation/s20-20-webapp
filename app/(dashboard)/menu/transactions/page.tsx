'use client'

import { useEffect, useState } from "react";
import Widget from "../../_components/Widget/Widget";

import './Transactions.css'
import MenuNav from "../_components/MenuNav/MenuNav";
import Form from "next/form";

export default function Transactions() {
  const [avatars, setAvatars] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=name,picture&results=6&nat=us&seed=awesome')
      .then((res) => {if (res.ok) return res.json(); return Promise.reject()})
      .then(res => setAvatars(res.results))
  }, []);

  return <>
    <main className="transactions">
      <h1>Mis transacciones</h1>
      <Widget className="history">
        <h2>Dinero disponible</h2>
        <p>$58,145.07</p>
        <hr />
        <h3>Frecuentes</h3>
        <div className="contacts">
          {avatars.map(({ name: { first }, picture: { medium }}, i) => <label key={first + medium + i} className="avatar">
            <input type="radio" name="refer" />
            <img src={medium} alt={first} />
            <span>{first}</span>
          </label>)}
        </div>
      </Widget>
      <nav>
        <MenuNav onlyFinancials mod='green' />
      </nav>
      <Widget className="finantial-request" >
        <hgroup>
          <h2>Transferencia</h2>
          <p>Seleccionar Alias o CVU</p>
        </hgroup>
        <Form action={''}>
          <label >
            <span>Alias</span>
            <input type="text" name="alias" />
          </label>
          <label >
            <span>CVU</span>
            <input type="text" name="CVU" />
          </label>
          <label >
            <span>Monto</span>
            <input type="number" name="money" />
          </label>
          <button>Transferir</button>
        </Form>
      </Widget>
    </main>
  </>
}