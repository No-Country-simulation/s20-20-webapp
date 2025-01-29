import React from "react";
import "../style/reviews.css";
import Image from "next/image";

const reviews = [
  {
    review:
      "Por fin tengo todas mis tarjetas y criptomonedas en un solo lugar. Es fácil de usar y me ayuda a mantener todo bajo control. ¡Totalmente recomendado!” ",
    user: "Maria G.",
  },

  {
    review:
      "Usar la aplicación me ahorra tiempo y dolores de cabeza. Pagar con QR y transferir dinero es súper rápido. ¡Un must para cualquiera que quiera simplificar sus finanzas!” ",
    user: "Carlos T.",
  },
];

export default function Reviews() {
  return (
    <section className="reviews section-padding">
      <h2 className="heading-h2 u-margin-bottom-medium heading-h2">
        Conoce la opinion de nuestros usuarios
      </h2>

      <div className="reviews__container">
        <ul className="reviews__list">
          {reviews.map((review) => (
            <li key={review.user} className="reviews__item">
              <div className="reviews__box-quotes">
                <Image
                  src="/quotes.png"
                  alt="double quotes"
                  className="reviews__quotes"
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <p className="reviews__paragraph">{review.review}</p>
                <h4>{review.user}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
