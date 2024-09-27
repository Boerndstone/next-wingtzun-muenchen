import { FiPhone, FiMail, FiGlobe } from "react-icons/fi";
// import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <>
      <section className="container-grau py-5">
        <div className="container">
          <h2 className="fs-3 fw-light mb-3 text-uppercase text-center">
            Kontakt
          </h2>
          <p className="fs-5 text-center">
            Du hast Fragen, Anregungen oder Wünsche? Möchtest du zu einem
            kostenlosen Probetraining?
          </p>
          <div className="row mt-5">
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center">
                <FiPhone className="d-inline-block me-2 w-auto" size={20} />
                <h4 className="my-0 text-uppercase">Telefon</h4>
              </div>
              <p className="fs-6 mt-1">Tel.: 0177 6460429</p>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center">
                <FiPhone className="d-inline-block me-2 w-auto" size={20} />
                <h4 className="my-0 text-uppercase">Telefon</h4>
              </div>
              <p className="fs-6 mt-1">Tel.: 01577 2035061</p>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center">
                <FiMail className="d-inline-block me-2 w-auto" size={20} />
                <h4 className="my-0 text-uppercase">E-Mail</h4>
              </div>
              <p className="fs-6 mt-1">info(at)wingtzun-muenchen.de</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div>
                <div id="feuerwache"></div>
                <div className="my-3 mt-md-4">
                  <h2 className="fs-3 fw-light mb-3 text-uppercase">
                    Schule IG Feuerwache
                  </h2>
                  <h5 className="fs-4 fw-light text-uppercase mb-3">
                    Wing Tzun Kampfkunstschule
                  </h5>
                  <p className="fs-5 mb-2">
                    Ganghoferstraße 41 | 80339 München
                  </p>
                  <p className="fs-5 mb-2">U-Bahn | U5 | Schwanthalerhöhe</p>
                  <p className="fs-5 mb-2">Bus | 53 | Schwanthalerhöhe</p>
                  <p className="fs-5 mb-2">S-Bahn | S7 | Heimeranplatz</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div>
                <div id="giesing"></div>
                <div className="my-3 mt-md-4">
                  <h2 className="fs-3 fw-light mb-3 text-uppercase">
                    Schule Giesing (NUR Dienstags)
                  </h2>
                  <h5 className="fs-4 fw-light text-uppercase mb-3">
                    Wing Tzun Kampfkunstschule
                  </h5>
                  <p className="fs-5 mb-2">
                    St. Martinstraße 30 | 81541 München
                  </p>
                  <p className="fs-5 mb-2">U-Bahn | U2 | Silberhornstraße</p>
                  <p className="fs-5 mb-2">Tram | 17 | St.-Martins-Platz</p>
                  <p className="fs-5 mb-2">Tram | 25 | Silberhornstraße</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <hr />
            </div>
            <div className="col-12 col-sm-6">
              <div>
                <div className="my-3 mt-md-4">
                  <h2 className="fs-3 fw-light mb-3 text-uppercase">
                    Partnerschule Obersendling/Solln
                  </h2>
                  <h5 className="fs-4 fw-light text-uppercase mb-3">
                    FACHSCHULE FÜR SELBSTVERTEIDIGUNG
                  </h5>
                  <p className="fs-5 mb-2">
                    Geisenhausenerstr. 16a | 81379 München
                  </p>
                  <p className="fs-5 mb-2">Schulleiter Sihing Marko</p>
                  <table className="table mt-3 fs-5">
                    <tbody>
                      <tr>
                        <td>
                          <FiPhone
                            className="d-inline-block me-2 w-auto"
                            size={20}
                          />
                        </td>
                        <td>017623773347</td>
                      </tr>
                      <tr>
                        <td>
                          <FiGlobe
                            className="d-inline-block me-2 w-auto"
                            size={20}
                          />
                        </td>
                        <td>
                          <a href="https://www.wingtzunx.de/" target="_blank">
                            www.wingtzunx.de
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FiMail
                            className="d-inline-block me-2 w-auto"
                            size={20}
                          />
                        </td>
                        <td>infowingtzunx@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-blau py-5">
        <div className="container">
          <section className="row">
            <div className="col-12 col-md-7">
              <h2 className="fs-3 fw-light mb-3 text-uppercase">
                Deine Nachricht an uns.
              </h2>
            </div>
            {/* <ContactForm /> */}
          </section>
        </div>
      </section>
    </>
  );
};

export default page;
