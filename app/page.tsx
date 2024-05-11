import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-7">
              <div className="hero-heading p-4">
                <h1 className="text-white fs-4 mb-4">
                  Wing Tzun Selbstverteidigung
                </h1>
                <p className="headline mt-3 lh-sm fw-bold text-white">
                  ERKENNE DEINE FÄHIGKEITEN
                </p>
                <a
                  href="wingtzun.html"
                  className="fs-5 mt-5 text-white"
                  title="Mehr über Wing Tzun erfahren"
                >
                  Mehr über Wing Tzun
                  <FiChevronRight size={23} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container py-5">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-6">
            <h2 className="fs-3 fw-light mb-4 text-uppercase">
              FIT DURCH WING TZUN
            </h2>
            <p className="fs-5">
              Wing Tzun ist eine ca. 300 Jahre alte chinesische Kampfkunst, die
              von einer Nonne namens Ng Mui entwickelt wurde.
            </p>
            <p className="fs-5">
              Es ist eine reine Selbstverteitigung die versucht, auf direktem
              Weg den Angreifer außer Gefecht zu setzen. Körperliche Kraft
              spielt dabei keine große Rolle.
            </p>
            <p className="fs-5">
              Neben der Kampfkunst wirst du auch deine Ausdauer, Fitness,
              Koordination und Beweglichkeit trainieren.
            </p>
            <a href="wingtzun.html" className="text-primary mt-5 fs-5">
              Weitere Informationen zu Wing Tzun
              <FiChevronRight color="#305096" size={23} />
            </a>
          </div>
          <div className="col-12 col-md-6 d-none d-md-flex">
            <Image
              src="/images/wt-prinzipien.jpg"
              width={357}
              height={420}
              alt="Wing Tsun Prinzipien"
              className="ms-auto"
            />
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          <div className="col-12 col-sm-3 d-flex flex-column justify-content-between">
            <Image
              src="/images/wt-kindertraining-sm.jpg"
              width={306}
              height={216}
              layout="responsive"
              alt="Kinder ab 6 Jahren können bei uns Wing Tzun trainieren"
              className="py-2 img-fluid"
            />
            <Image
              src="/images/wt-sparring-sm.jpg"
              width={306}
              height={216}
              layout="responsive"
              alt="Effektive Selbstverteidigung mit Wing Tzun"
              className="py-2 img-fluid"
            />
          </div>
          <div className="col-12 col-sm-6 d-flex justify-content-center align-content-center">
            <Image
              src="/images/sifu-kostas-sparring-sm.jpg"
              width={625}
              height={440}
              layout="responsive"
              alt="Sifu Kostas beim Wing Tsun Training"
              className="py-2 img-fluid"
            />
          </div>
          <div className="col-12 col-sm-3 d-flex flex-column justify-content-between">
            <Image
              src="/images/wt-frauen-sm.jpg"
              width={306}
              height={216}
              layout="responsive"
              alt="Für Frauen ist Wing Tsun sehr gut geeignet, da wir die Kraft des Gegners nutzen"
              className="py-2 img-fluid"
            />
            <Image
              src="/images/wt-gruppentraining-sm.jpg"
              width={306}
              height={216}
              layout="responsive"
              alt="Gruppentraining bei Wing Tzun München"
              className="py-2 img-fluid"
            />
          </div>
        </div>
      </section>
      <section className="container-grau py-5">
        <div className="container d-flex flex-column justify-content-center">
          <h2 className="fs-3 fw-light mb-4 text-uppercase text-center">
            SIFU Kostas
          </h2>
          <p className="fs-5 text-center">
            ist der Leiter der Wing-Tzun Fachschule für Selbstverteidigung in
            München und betreibt seit 20 Jahren <br /> Wing Tsun. Er besitzt den
            5. Meistergrad im WTFB Fachschulenbund.
          </p>
          <Image
            src="/images/sifu-kostas.jpg"
            width={290}
            height={245}
            alt="Sifu Kostas"
            className="mx-md-auto mt-5"
          />
          <div className="zitat-box p-3 my-md-5 mx-auto rounded-2">
            <h3 className="text-center fs-5 fw-normal">
              „Es ist mir wichtig, mich persönlich um meine Schüler zu kümmern.
              <br />
              Es erfüllt mich mit Stolz und Freude, wenn ich die Fortschritte
              und Begeisterung meiner Schüler sehe.“
            </h3>
            <p className="fs-5 text-center">SIFU KOSTAS</p>
          </div>
        </div>
      </section>
    </>
  );
}
