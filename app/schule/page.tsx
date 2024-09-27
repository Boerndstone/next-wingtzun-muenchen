import Image from "next/image";
import CustomLinks from "../components/CustomLinks";

const page = () => {
  return (
    <>
      <section className="container py-5">
        <div className="container">
          <h2 className="fs-3 fw-light mb-4 text-uppercase">Unsere Schule</h2>
          <p className="fs-5">
            Unsere Wing Tzun Schule ist viel mehr als eine Schule. Durch das
            Training werden uns gleichzeitig praktische wie philosophische Werte
            vermittelt, die uns im täglichen Leben helfen.
          </p>
          <p className="fs-5">
            Unsere Schule gibt es bereits seit 2008. Wir sind eine kleine, aber
            persönliche Fachschule für Wing Tsun. Wir legen sehr viel Wert auf
            persönliche Betreuung unserer Schüler. Das macht den besonderen
            Charme unserer Selbstverteidigungsschule aus.
          </p>
          <CustomLinks
            href="kontakt"
            name="Du findest uns hier"
            extraClass={["fs-5", "d-block"]}
          />
        </div>
      </section>
      <section className="container-grau py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-5">
              <Image
                src="/images/sifu-kostas-gross.jpg"
                width={400}
                height={600}
                alt="Sifu Kostas"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-10 col-sm-6 col-md-7">
              <h2 className="fs-3 fw-light mb-4 text-uppercase">
                Der Schulleiter SIFU KOSTAS
              </h2>
              <p className="fs-5">Am 30.07.1969 in München geboren.</p>
              <p className="fs-5">
                Sifu Kostas ist Leiter der Wing-Tzun Fachschule für
                Selbstverteidigung in München.
              </p>
              <p className="fs-5">
                Im Alter von 11 Jahren begann er sich mit verschiedenen
                Kampfsportarten zu beschäftigen. Sifu Kostas betreibt seit 1994
                Wing Tsun und besitzt den 6. Meistergrad im WTFB
                Fachschulenbund.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-column justify-content-center mb-5">
            <h2 className="fs-3 fw-light mb-4 text-uppercase text-center">
              Das WING TZUN TEAM
            </h2>
            <p className="fs-5 text-center">
              Unsere Spezialisten wenn es um Wing Tzun geht:
            </p>
            <Image
              src="/images/sifu-makis-2.jpg"
              width={350}
              height={470}
              alt="Sifu Makis"
              className="img-fluid mb-3 mb-md-0 mx-auto"
            />
            <p className="fs-5 text-center mt-3">SIFU</p>
            <h3 className="text-center fst-italic fw-bold fs-4">
              <span>Makis</span>
            </h3>
            <p className="fs-5 text-center">
              Sifu Makis betreibt seit 1999 Wing Tsun und besitzt den 4.
              Lehrergrad im WTFB Fachschulenbund.
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 d-flex flex-column">
              <Image
                src="/images/sije-eleni.jpg"
                width={300}
                height={400}
                alt="Sije Eleni"
                className="img-fluid mb-3 mb-md-0 mx-auto"
              />
              <p className="fs-5 text-center mt-3">SIJE</p>
              <h3 className="text-center fst-italic fw-bold fs-4">
                <span>Eleni</span>
              </h3>
              <p className="fs-5 text-center">2. Lehrergrad</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex flex-column">
              <Image
                src="/images/sihing-joe.jpg"
                width={300}
                height={400}
                alt="Sihing Joe"
                className="img-fluid mb-3 mb-md-0 mx-auto"
              />
              <p className="fs-5 text-center mt-3">SIHING</p>
              <h3 className="text-center fst-italic fw-bold fs-4">
                <span>Joe</span>
              </h3>
              <p className="fs-5 text-center">2. Lehrergrad</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex flex-column">
              <Image
                src="/images/sihing-evan.jpg"
                width={300}
                height={400}
                alt="Sihing Evan"
                className="img-fluid mb-3 mb-md-0 mx-auto"
              />
              <p className="fs-5 text-center mt-3">Sifu</p>
              <h3 className="text-center fst-italic fw-bold fs-4">
                <span>Evan</span>
              </h3>
              <p className="fs-5 text-center">3. Lehrergrad</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-blau py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <Image
                src="/images/wtlogowhite.png"
                width={330}
                height={240}
                alt="wt logo"
                className="d-none d-md-block img-fluid"
              />
            </div>
            <div className="col-12 col-md-8">
              <h2 className="fs-3 fw-light mb-4 text-uppercase">
                WING TZUN FACHSCHULEN VERBAND
              </h2>
              <p className="fs-5">
                Am 01. Oktober 1999 erfolgte die Gründung des Fachschulenbundes
                WTFB (Wing Tzun Fachschulen-Bund). Der WTFB ist ein
                eigenständiger Verband unter der Leitung von Sifu Niko.
              </p>
              <p className="fs-5">
                Alle dem WTFB angeschlossen Schulen unterrichten nach einem
                einheitlichen Trainingskonzept und einem festen
                Unterrichtsprogramm. Um eine hohe Qualität zu gewährleisten,
                werden alle Schulleiter von Dai Sifu Niko persönlich ausgebildet
                und betreut.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="zitat-box p-3 my-5 mx-auto rounded-2">
            <h3 className="text-center fs-5 fw-normal">
              &quot;Nur wer seine Fähigkeiten kennt, kann Sie auch im richtigen
              Zeitpunkt nutzen.&quot;
            </h3>
            <p className="fs-5 text-center">Sifu Kostas</p>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <Image
                src="/images/sifuniko.png"
                width={200}
                height={200}
                alt="Sifu Niko"
                className="hidden-xs hidden-sm"
              />
            </div>
            <div className="col-12 col-md-9">
              <h2 className="fs-3 fw-light mb-4 text-uppercase">
                DAI SIFU NIKO - LEITER DES WTFB IN STUTTGART
              </h2>
              <p className="fs-5">
                Dai Sifu Niko leitet seit über 25 Jahren die Fachschule für
                Selbstverteidigung in Stuttgart. Seine fast 40-jährige Erfahrung
                in verschiedenen Kampfkunststilen kommt seinen Schülern zugute.
                Unterstützt wird Sifu Niko von seinem qualifizierten
                Ausbilderteam.
              </p>
              <CustomLinks
                href="https://wingtzun.de/"
                name="Zum WTFB"
                extraClass={["d-block"]}
                target="_blank"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
