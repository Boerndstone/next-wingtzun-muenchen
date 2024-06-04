import CustomLinks from "../components/CustomLinks";

const page = () => {
  return (
    <>
      <section className="container-grau py-5">
        <div className="container">
          <h2 className="fs-3 fw-light mb-3 text-uppercase text-center">
            NÜTZLICHE DVDs ÜBER WING TZUN
          </h2>
          <p className="fs-5 text-center">WT-Shop</p>
          <CustomLinks
            href="http://www.wt-shop.de/"
            name="Lehr-DVDs und mehr"
            extraClass={["text-center", "d-block"]}
          />
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="fs-3 fw-light mb-3 text-uppercase text-center">
            Unsere Partnerschulen
          </h2>
          <p className="fs-5 text-center">
            WingTzun München Sendling{" "}
            <CustomLinks
              href="https://www.wingtzunx.de/"
              name="Fachschule für Selbstverteidigung Geisenhausenerstr. 16a 81379 München"
              target="_blank"
              icon={false}
            />
          </p>
          <p className="fs-5 text-center">
            Ludwigsburg{" "}
            <CustomLinks
              href="http://www.wingtzun-ludwigsburg.de/"
              name="Fachschule für Selbstverteidigung Siegesstr. 28 71636 Ludwigsburg"
              target="_blank"
              icon={false}
            />
          </p>
          <p className="fs-5 text-center">
            Ravensburg{" "}
            <CustomLinks
              href="http://www.ma-sport.de/"
              name="Fachschule für Selbstverteidigung im Schulzentrum Weingarten"
              target="_blank"
              icon={false}
            />
          </p>
          <h2 className="mt-5 fs-3 fw-light mb-3 text-uppercase text-center">
            Sonstige Links
          </h2>
          <p className="fs-5 text-center">
            Citysports{" "}
            <CustomLinks
              href="http://www.citysports.de/muenchen/anbieter/detailseite_75286_Wing-Tzun-Fachschule-fuer-Selbstverteidigung.htm#comments"
              name="Unsere Kampfkunstschule auf Citysports"
              target="_blank"
              icon={false}
            />
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
