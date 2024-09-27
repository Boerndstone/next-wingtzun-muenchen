import CustomLinks from "../components/CustomLinks";

const page = () => {
  return (
    <>
      <section className="container-grau py-5">
        <div className="container">
          <h2 className="fs-3 fw-light mb-3 text-uppercase text-center">
            IMPRESSUM
          </h2>
          <h5 className="mt-3 text-center">Betreiber der Website:</h5>
          <p className="fs-5 text-center">Simeonidis Konstantinos</p>
          <div className="mt-5 text-center">
            <h2 className="fs-3 fw-light mb-4 text-uppercase text-center">
              Adresse:
            </h2>
            <p className="fs-5 text-center">
              Corneliusstr. 24
              <br />
              D-80469 München
              <br /> Tel.: 0177 6460429 oder Tel.: 01577 2035061
              <br />
              eMail: info (at) wingtzun-muenchen.de
            </p>
          </div>
          <div className="mt-5 text-center">
            <h2 className="fs-3 fw-light mb-4 text-uppercase text-center">
              Copyright
            </h2>
            <p className="fs-5 text-center">
              Jedes Website-Design, jeder Text, alle Grafiken, jede Auswahl bzw.
              jedes Layout davon ALLE RECHTE VORBEHALTEN.
            </p>
          </div>
          <div className="mt-5 text-center">
            <h2 className="fs-3 fw-light mb-4 text-uppercase text-center">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </h2>
            <p className="fs-5 text-center">
              Simeonidis Konstantinos
              <br />
              Corneliusstr. 24
              <br />
              D-80469 München
              <br />
              Tel.: 0177 6460429 oder Tel.: 01577 2035061
              <br />
              eMail: info (at) wingtzun-muenchen.de
            </p>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="fs-3 fw-light mb-4 text-uppercase text-center">
          Haftungsausschluss
        </h2>
        <div className="mt-5 text-center">
          <h4 className="fs-4 text-uppercase">Haftung für Inhalte</h4>
          <p className="fs-5 text-center">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </div>
        <div className="mt-5 text-center">
          <h4 className="fs-4 text-uppercase">Haftung für Links</h4>
          <p className="fs-5 text-center">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </div>
        <div className="mt-5 text-center">
          <h4 className="fs-4 text-uppercase">Urheberrecht</h4>
          <p className="fs-5 text-center">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
          <p>Quellen: eRecht24 Disclaimer</p>
        </div>
      </section>
    </>
  );
};

export default page;
