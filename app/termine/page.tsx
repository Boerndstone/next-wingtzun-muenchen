import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="container-blau py-5">
        <div className="container">
          <h2 className="fs-3 fw-light mb-3 text-uppercase text-center">
            Wing Tzun Termine
          </h2>
          <h5 className="fs-4 fw-light text-uppercase text-center">
            Hier findest du aktuelle Termine und Events
          </h5>
        </div>
      </section>
      <section className="features py-5">
        <div className="container">
          <h2
            className="fs-3 fw-light mb-3 text-uppercase text-center"
            style={{ color: "#990000" }}
          >
            WICHTIGE INFORMATION:
          </h2>
          <p className="fs-5 text-center fw-bold">
            Wir dürfen wieder trainieren. Bitte achtet auf die neuen
            Trainingzeiten!
          </p>
        </div>
      </section>
      <section className="container-grau py-5">
        <div className="container">
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <Image
                src="/images/wt-gruppe-2019-12.jpg"
                width={856}
                height={465}
                alt="Wing Tzun Intensiv-Training am 07.12.2019"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING
              </h2>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 07.12.2019 von 12:00 Uhr bis
                17:00 Uhr
              </p>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <Image
                src="/images/wt-gruppe-2019-09.jpg"
                width={856}
                height={465}
                alt="Wing Tzun Intensiv-Training am 28.09.2019"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING
              </h2>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 28.09.2019 von 10:30 Uhr bis
                15:00 Uhr
              </p>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <Image
                src="/images/wt-gruppe-2019-06.jpg"
                width={856}
                height={465}
                alt="Wing Tzun Intensiv-Training am 29.06.2019"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING
              </h2>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 29.06.2019 von 12:00 Uhr bis
                17:00 Uhr
              </p>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <Image
                src="/images/wt-gruppe-2018-12.jpg"
                width={504}
                height={337}
                alt="Wing Tzun Intensiv-Training am 08.12.2018"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING
              </h2>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 08.12.2018 von 12:00 Uhr bis
                17:00 Uhr
              </p>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <Image
                src="/images/wt-gruppe-2018-05.jpg"
                width={504}
                height={337}
                alt="Wing Tzun Intensiv-Training am 22.9.2018"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING MIT SIFU KOSTAS
              </h2>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 22.09.2018 ab 13:00 Uhr bis
                17:00 Uhr
              </p>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase text-center"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING MIT <br /> DAI SIFU NIKO IN MÜNCHEN
              </h2>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 05.05.2018 von 12:00 Uhr bis
                17:00 Uhr
              </p>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <Image
                src="/images/wt-gruppe-2018-05b.jpg"
                width={504}
                height={337}
                alt="Wing Tzun Intensiv-Training am 27.5.2017"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING MIT SIFU KOSTAS
              </h2>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 27.05.2017 ab 13:00 Uhr bis
                18:00 Uhr
              </p>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase text-center"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING
              </h2>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 04.03.2017 ab 12:00 Uhr bis
                17:00 Uhr
              </p>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <Image
                src="/images/pruefunggruppe.jpg"
                width={504}
                height={281}
                alt="Sifu Kosta und Sifu Niko bedankten sich für den schönen Tag bei allen Wing Tsun Schülern"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING MIT SIFU KOSTAS{" "}
              </h2>
              <p className="fs-5" style={{ color: "#999" }}>
                In München am 28.02.2015.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase text-center"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING
              </h2>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 28.02.2015 ab 12:00 Uhr bis
                17:00 Uhr
              </p>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase text-center"
                style={{ color: "#999" }}
              >
                FERIEN
              </h2>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                <strong>Wann:</strong> Ab Mittwoch, 24.12.2014 bis Sonntag, den
                04.01.2015
              </p>
              <p className="fs-5 text-center fw-bold" style={{ color: "#999" }}>
                Es findet kein WT-Unterricht statt
              </p>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                Am 05.01.2015 geht es wieder wie gewohnt los.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase text-center"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING
              </h2>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 06.12.2014 ab 12:00 Uhr bis
                17:00 Uhr
              </p>
              <p className="fs-5 text-center" style={{ color: "#999" }}>
                <strong> Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <Image
                src="/images/sifonikogruppe.jpg"
                width={856}
                height={514}
                alt="Sifu Kosta und Sifu Niko bedankten sich für den schönen Tag bei allen Wing Tsun Schülern"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING MIT DAI SIFU NIKO{" "}
              </h2>
              <p className="fs-5" style={{ color: "#999" }}>
                In München am 15.11.2014
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-4">
              <Image
                src="/images/heroteaserniko.jpg"
                width={416}
                height={231}
                alt=""
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-8 ">
              <h2
                className="fs-3 fw-light mb-3 text-uppercase"
                style={{ color: "#999" }}
              >
                WING TZUN INTENSIV-TRAINING MIT DAI SIFU NIKO{" "}
              </h2>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong>Wann:</strong> Samstag, 15.11.2014 ab 12:00 Uhr bis
                17:00 Uhr
              </p>
              <p className="fs-5" style={{ color: "#999" }}>
                <strong>Wo:</strong> St. Martinstraße 30, 81541 München
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
