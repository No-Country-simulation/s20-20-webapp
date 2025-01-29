import React from "react";
import { ArrowRightLeft, Bitcoin, DollarSign, LockKeyhole } from "lucide-react";

import "../style/crypto.css";
import Image from "next/image";

export default function CryptoSection() {
  return (
    <>
      <section className="crypto crypto-big-height section-padding">
        <h2 className="crypto__title heading-h2">
          Compra, vende y almacena tus criptos de forma segura
        </h2>

        <div className="crypto__container crypto__container--height-b">
          <div className="crypto__boxs">
            <div className="crypto__box">
              <div className="crypto__box-heading">
                <div className="crypto__icon-circle">
                  <Bitcoin />
                </div>
                <h3 className="crypto__heading">Criptos en tendencia</h3>
              </div>
              <p>
                Explore el acceso sin inconvenientes a varias criptomonedas
                importantes, incluidas Bitcoin, Ethereum, Binance y mas,
              </p>
            </div>

            <div className="crypto__box">
              <div className="crypto__box-heading">
                <div className="crypto__icon-circle">
                  <DollarSign />
                </div>
                <h3 className="crypto__heading">Tarifas transparentes</h3>
              </div>
              <p>
                ¡Adios a los recargos inesperados! Garantizamos transparencia.
              </p>
            </div>

            <div className="crypto__box">
              <div className="crypto__box-heading">
                <div className="crypto__icon-circle">
                  <ArrowRightLeft />
                </div>
                <h3 className="crypto__heading">Intercambios sin comisiones</h3>
              </div>
              <p>
                Comience a operar con nosotros hoy y disfrute de sus
                intercambios sin incurrir en ninguna tarifa.
              </p>
            </div>

            <div className="crypto__box">
              <div className="crypto__box-heading">
                <div className="crypto__icon-circle">
                  <LockKeyhole />
                </div>
                <h3 className="crypto__heading">Plataforma segura</h3>
              </div>
              <p>
                Para garantizar seguridad y la proteccion de los fondos,
                ofrecemos almacenamiento seguro y realizamos controles de
                seguridad periodicamente.
              </p>
            </div>
          </div>

          <div className="crypto__box-img">
            <Image src="/bitcoin.svg" alt="" fill />
          </div>
        </div>
      </section>

      <section className="crypto crypto-gradient-wallet section-padding">
        <div className="crypto__container  crypto__container--height">
          <div className="crypto__box-wallet">
            <Image src="/wallet.svg" alt="" fill />
          </div>

          <div className="crypto__content">
            <div>
              <h3 className="crypto__heading-h3">Seguro y Confiable</h3>
              <p className="crypto__paragraph">
                Protegemos tus datos con tecnología avanzada y autenticación de
                múltiples factores, garantizando transacciones seguras en todo
                momento.
              </p>
            </div>

            <div>
              <h3 className="crypto__heading-h3">Integración sin esfuerzo</h3>
              <p className="crypto__paragraph">
                Conecta tus cuentas bancarias y métodos de pago fácilmente,
                gestionando todo desde un solo lugar sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="crypto crypto-gradient-pig section-padding">
        <div className="crypto__container  crypto__container--height">
          <div className="crypto__content">
            <div>
              <h3 className="crypto__heading-h3">Interfaz intuitiva</h3>
              <p className="crypto__paragraph">
                Nuestra plataforma es clara y fácil de usar, permitiéndote
                navegar, realizar pagos y controlar tus finanzas en segundos.
              </p>
            </div>

            <div>
              <h3 className="crypto__heading-h3">Accesibilidad total</h3>
              <p className="crypto__paragraph">
                Disponible en múltiples dispositivos, nuestra billetera virtual
                te acompaña donde vayas, para que puedas gestionar tus finanzas
                en cualquier momento y lugar.
              </p>
            </div>
          </div>

          <div className="crypto__box-wallet">
            <Image src="/pig.svg" alt="" fill />
          </div>
        </div>
      </section>
    </>
  );
}
