import React from "react";
import "../style/footer.css";
import {
  FacebookIcon,
  Instagram,
  Linkedin,
  MapPin,
  Printer,
  Smartphone,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-padding footer">
      <div className="footer__col footer__col-info">
        <div>
          <h1 className="footer__logo">Novapay</h1>
        </div>

        <ul className="footer__infos">
          <li className="footer__info">
            <MapPin />
            345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          </li>
          <li className="footer__info">
            <Smartphone />
            (123) 456-7890
          </li>
          <li className="footer__info">
            <Printer />
            (123) 456-7890
          </li>

          <li className="footer__info footer__social">
            Social Media:
            <FacebookIcon />
            <Twitter />
            <Linkedin />
            <Youtube />
            <Instagram />
          </li>
        </ul>
      </div>

      <div className="footer__col">
        <ul className="footer__list">
          <li className="footer__item">About Us</li>
          <li className="footer__item">Contact Us</li>
          <li className="footer__item">Help</li>
          <li className="footer__item">Privacy Policy</li>
          <li className="footer__item">Disclaimer</li>

          <li className="footer__item footer__copyright">
            Copyright © 2018 • Lift Media Inc.
          </li>
        </ul>
      </div>
    </footer>
  );
}
