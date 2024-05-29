import React from "react";

const Footer = () => {
  return (
    <footer className="text-center pt-4">
      <div className="container">
        <ul className="list-inline d-flex flex-wrap justify-content-start justify-content-md-center">
          <li className="px-3">
            <a href="https://wingtzun.de/">Verband</a>
          </li>
          <li className="px-3">
            <a href="https://wingtzun.de/sifuniko/">Dai Sifu Niko</a>
          </li>
          <li className="px-3">
            <a href="linktipps.html">Linktipps</a>
          </li>
          <li className="px-3">
            <a href="kontakt.html">Kontakt</a>
          </li>
          <li className="px-3">
            <a href="datenschutz.html">Datenschutz</a>
          </li>
          <li className="px-3">
            <a href="impressum.html">Impressum</a>
          </li>
        </ul>
      </div>
      <div className="sup-footer pt-2 pb-3">
        <div className="container">
          <p className="py-3 text-uppercase" style={{ fontSize: "12px" }}>
            © <span id="year">2024</span> by Wing Tzun Kampfkunstschule in
            München
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
