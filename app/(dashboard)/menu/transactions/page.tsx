'use client'

import { useEffect, useState } from "react";
import Widget from "../../_components/Widget/Widget";

import './Transactions.css'
import MenuNav from "../_components/MenuNav/MenuNav";

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
    </main>
  </>
}