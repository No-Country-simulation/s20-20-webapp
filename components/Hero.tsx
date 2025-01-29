import React from "react";
import Button from "./Button";
import "../style/hero.css";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="hero section-padding">
      <div className="hero__content">
        <h1 className="hero__title">TRANSFERENCIA DE DINERO SIN PROBLEMAS</h1>
        <p className="hero__paragraph">
          Gestione sus finanzas sin esfuerzo con nuestra billetera virtual
        </p>
        <Button type="gradient">Empezar</Button>
      </div>

      <Spline
        className="spline"
        scene="https://prod.spline.design/1ackIzLJ3pBFKSC3/scene.splinecode"
      />
    </section>
  );
}
