import React from "react";
import "../style/VirtualWalletSection.css";

export default function VirtualWalletSection() {
  return (
    <section className="virtualWallet section-padding ">
      <h2 className="virtualWallet__title heading-h2">
        Simplifique su vida financiera con nuestra potente billetera virtual
      </h2>

      <div className="virtualWallet__container">
        <div className="virtualWallet__box">
          <div className="virtualWallet__content">
            <h3 className="virtualWallet__heading">
              Conecta tus tarjetas bancarias
            </h3>
            <p className="virtualWallet__paragraph">
              Vincula tus tarjetas de credito y debito de cualquier banco y
              consulta tus saldos en tiempo real.
            </p>
          </div>

          <div className="virtualWallet__img ">
            <img
              src="/card.png"
              alt="card"
              className="virtualWallet__img-card"
            />
          </div>
        </div>

        <div className="virtualWallet__box">
          <div className="virtualWallet__content">
            <h3 className="virtualWallet__heading">Paga con QR</h3>
            <p className="virtualWallet__paragraph">
              Realiza pagos rapidos escaneando codigos QR en comercios y
              servicios.
            </p>
          </div>

          <div className="virtualWallet__img">
            <img src="/qr.png" alt="qr" className="virtualWallet__img-qr" />
          </div>
        </div>

        <div className="virtualWallet__box">
          <div className="virtualWallet__content">
            <h3 className="virtualWallet__heading">Transfiere dinero</h3>
            <p className="virtualWallet__paragraph">
              Envia y recibe dinero con tus contactos de manera instantanea y
              sin comisiones.
            </p>
          </div>

          <div className="virtualWallet__img">
            <img
              src="/woman.png"
              alt="woman"
              className="virtualWallet__img-woman"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
