import React from "react";
import "../style/activity.css";

const dataFake = [
  {
    img: "/amazon.png",
    name: "Amazon",
    date: "May 24, 2022",
    amount: "- $103.56",
  },

  {
    img: "/mcdonalds.png",
    name: "Mcdonalds",
    date: "May 12, 2022",
    amount: "- $34.78",
  },

  {
    img: "/apple.png",
    name: "Apple",
    date: "May 8, 2022",
    amount: "- $1,000.97",
  },

  {
    img: "/apple.png",
    name: "Starbucks",
    date: "May 8 , 2022",
    amount: "- $13.67",
  },
];

export default function Activity() {
  return (
    <div className="activity">
      <div></div>

      <div>
        <p>Tu última actividad</p>
        <p>Ver todo</p>
        <ul></ul>
      </div>
    </div>
  );
}
