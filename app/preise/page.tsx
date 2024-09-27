import React from "react";
import CustomLinks from "../components/CustomLinks";

const page = () => {
  return (
    <>
      <section className="container py-5">
        <h2 className="fs-3 fw-light mb-4 text-uppercase">
          Deine Wing Tzun Mitgliedschaft
        </h2>
        <p className="fs-5">
          Deine Mitgliedschaft beinhaltet alles was du zum erlernen von Wing
          Tzun benötigst. Hier findest du eine Übersicht zu unseren Preisen. Du
          kannst individuell zwischen den Trainingsorten wählen. Natürlich
          kannst du auch in beiden Schulen trainieren.
        </p>
        <p className="fs-5">
          Für nähere Informationen kannst du uns gerne{" "}
          <a href="kontakt" className="text-primary">
            kontaktieren
          </a>
          .
        </p>
        <CustomLinks
          href="preise#preise"
          name="Unsere Preise"
          extraClass={["fs-5", "d-block"]}
        />
        <CustomLinks
          href="preise#open"
          name="Unsere Trainingszeiten"
          extraClass={["fs-5", "d-block"]}
        />
      </section>
      <div className="container">
        <div className="zitat-box p-3 my-5 mx-auto rounded-2">
          <h3 className="text-center fs-5 fw-normal">
            &quot;Die Erfahrung ist wie eine Laterne im Rücken; sie beleuchtet
            stets nur das Stück Weg, das wir bereits hinter uns haben.&quot;
          </h3>
          <p className="fs-5 text-center">Konfuzius</p>
        </div>
      </div>
      <section className="container-grau py-5">
        <div className="container">
          <div className="d-flex flex-column justify-content-center">
            <h2
              id="preise"
              className="fs-3 fw-light mb-4 text-uppercase text-center"
            >
              Unsere Preise
            </h2>
            <h4 className="fs-5 fw-light mb-4 text-uppercase text-center">
              Schule (Schwanthalerhöhe) Ganghoferstraße 41
            </h4>
            <p className="fs-5 text-center mb-1">Monatsbeitrag</p>
            <p className="fs-4 text-center">60,00€</p>
            <h4 className="fs-5 fw-light mb-4 text-uppercase text-center">
              Schule (Giesing) St-Martin-Straße
            </h4>
            <p className="fs-5 text-center mb-1">Monatsbeitrag Jugendliche</p>
            <p className="fs-4 text-center">40,00€</p>
            <p className="fs-5 text-center mb-1">Monatsbeitrag Kinder</p>
            <p className="fs-4 text-center">35,00€</p>
            <h4 className="fs-5 fw-light text-uppercase text-center mt-5 mb-1">
              10er Karte
            </h4>
            <p className="fs-4 text-center">160,00€</p>
            <p className="fs-5 text-center">
              Ermäßigung für Jugendliche/ Kinder/ Studenten/ Azubis/ Rentner
            </p>
            <a
              href="kontakt"
              role="button"
              className="btn btn-primary btn-lg mt-3 d-inline-block mx-auto"
            >
              Unverbindlich anfragen
            </a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2
            id="open"
            className="fs-3 fw-light mb-4 text-uppercase text-center"
          >
            Unsere Trainingszeiten
          </h2>
          <div className="row">
            <div className="col-12 col-md-6">
              <h4 className="fs-5 fw-light mb-4 text-uppercase">
                Schule Ganghoferstraße 41 <br /> (IG Feuerwache):{" "}
              </h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Erwachsene und Jugendliche</th>
                      <th>Erwachsene und Jugendliche</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="yel">Montag</td>
                      <td>18.30 - 19.45 Uhr</td>
                      <td>19:45 - 21.00 Uhr</td>
                    </tr>
                    <tr>
                      <td className="yel">Mittwoch</td>
                      <td></td>
                      <td>entfällt zur Zeit</td>
                    </tr>
                    <tr>
                      <td className="yel">Donnerstag</td>
                      <td>18.30 - 19.45 Uhr</td>
                      <td>19:45 - 21.00 Uhr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="fs-5 fw-light mb-4 text-uppercase">
                Schule St.-Martin-Straße 30 <br /> (Grundschule in Giesing){" "}
              </h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Kinder</th>
                      <th>Erwachsene und Jugendliche</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="yel">Dienstag</td>
                      <td>17.30 - 18.30 Uhr</td>
                      <td>18.00 - 19.00 Uhr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="fs-5 mt-4">
            Einzeltraining nach Absprache. Vereinbare einfach einen Termin
            unter:
            <br /> Tel / 0177 6460429 oder Tel / 01577 2035061
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="fs-3 fw-light mb-4 text-uppercase">
            Dein kostenloses Probetraining
          </h2>
          <p className="fs-5">
            Erfahre mehr über Wing Tzun und lerne uns ein wenig kennen. Keine
            Angst, du musst keine Kampfsportmeister sein, um ein Probetraining
            zu machen. Jeder hat einmal angefangen.
          </p>
          <p className="fs-5">
            Für ein Probetraining ist keine spezielle Kleidung erforderlich. Am
            besten eignet sich eine schwarze Trainingshose und ein weißes
            T-Shirt.
          </p>
          <a
            role="button"
            href="kontakt.html"
            className="btn btn-primary btn-lg mt-3"
          >
            Jetzt anmelden
          </a>
        </div>
      </section>
    </>
  );
};

export default page;
