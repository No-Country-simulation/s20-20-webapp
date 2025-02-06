import React from "react";
import "../style/activity.css";
import Image from "next/image";

const dataFake = [
  {
    img: "/amazon.jpg",
    name: "Amazon",
    date: "May 24, 2022",
    amount: "- $103.56",
  },

  {
    img: "/mcdonalds.jpg",
    name: "Mcdonalds",
    date: "May 12, 2022",
    amount: "- $34.78",
  },

  {
    img: "/apple.jpg",
    name: "Apple",
    date: "May 8, 2022",
    amount: "- $1,000.97",
  },

  {
    img: "/starbucks.jpg",
    name: "Starbucks",
    date: "May 8 , 2022",
    amount: "- $13.67",
  },

  {
    img: "/mastercard.jpg",
    name: "Mastercard",
    date: "May 6, 2022",
    amount: "- $1,000.00",
  },

  {
    img: "/freelancer.jpg",
    name: "Freelancer",
    date: "May 6, 2022",
    amount: "+ $3300.00",
  },
];

export default function Activity() {
  return (
    <div className="activity">
      <div className="activity__days">
        <div>
          <h2>$0000000</h2>
          <p>Mi Día A Día</p>
        </div>
      </div>

      <div className="activity__container">
        <p>Tu última actividad</p>
        <p>Ver todo</p>

        <ul className="activity__list">
          {dataFake.map((data) => (
            <li key={data.name} className="activity__item">
              <Image src={`${data.img}`} alt="" width={40} height={40} />

              <div className="activity__texts">
                <h3>{data.name}</h3>
                <p>{data.date}</p>
              </div>

              <p className="activity__amount">{data.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
