import Image from "next/image";
import CustomLinks from "../components/CustomLinks";

const page = () => {
  return (
    <>
      <section className="container-grau">
        <div className="container py-5">
          <h2 className="fs-3 fw-light mb-4 text-uppercase text-center">
            Das Trainingsangebot
          </h2>
          <p className="fs-5">
            Die Fachschule für Selbstverteidigung bietet mehrere Ausbildungswege
            an. Jeder Schüler kann sich somit individuell aussuchen, welcher Weg
            zu seinen eigenen Wünschen und Möglichkeiten passt. Auch eine
            Kombination der Ausbildungswege kann sinnvoll sein.
          </p>
          <div className="d-flex flex-wrap justify-content-center">
            <a
              href="training#training"
              className="border border-3 border-black px-4 mb-3 mb-md-0 py-2 mx-2 text-uppercase text-black"
            >
              Trainingsangebot
            </a>
            <a
              href="training.html#power"
              className="border border-3 border-black px-4 mb-3 mb-md-0 py-2 mx-2 text-uppercase text-black"
            >
              Powertraining
            </a>
            <a
              href="selbstverteidigung.html#frau"
              className="border border-3 border-black px-4 mb-3 mb-md-0 py-2 mx-2 text-uppercase text-black"
            >
              Selbstverteidigung
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div id="training">
            <h2 className="fs-3 fw-light mb-4 text-uppercase text-center">
              Deine Trainingsmöglichkeiten bei uns
            </h2>
            <h3 className="text-center fst-italic fw-bold fs-4">
              Einzel-Unterricht
            </h3>
            <p className="fs-5 text-center mb-5">
              Im Einzelunterricht kann der Lehrer sich völlig an die Bedürfnisse
              dieser einzelnen Person anpassen. So ist der Lernerfolg am größten
              und die Lernzeit wird dadurch verkürzt. Auch der Einzelunterricht
              wird häufig als Ergänzung zum Gruppenunterricht genutzt. Für
              Menschen mit wenig Zeit bietet der Einzelunterricht die
              Möglichkeit trotz geringerem Zeitaufwand Lernfortschritte zu
              machen. Auch für Personen mit speziellen Wünschen, die im
              Gruppenunterricht zu kurz kommen würden, ist der Einzelunterricht
              bestens geeignet.
            </p>
            <h3 className="text-center fst-italic fw-bold fs-4">
              Gruppen-Unterricht
            </h3>
            <p className="fs-5 text-center mb-5">
              Dies ist die reguläre Unterrichtsart für unsere Schüler. Die
              meisten Schüler nehmen 1 - 2 Mal die Woche an für sie günstigen
              und frei wählbaren Terminen am Gruppenunterricht teil. Sie
              erlernen mit Gleichgesinnten in einer angenehmen Atmosphäre die
              Selbstverteidigung. Der Gruppenunterricht bietet für sie den
              idealen körperlichen und geistigen Ausgleich zum Alltag. Wer mehr
              Zeit mitbringt und häufiger trainieren möchte, kann aus dem
              umfangreichen Trainingsangebot schöpfen. Es besteht die
              Möglichkeit an bis zu 4 Tagen wöchentlich am Gruppenunterricht
              teilzunehmen.
            </p>
            <CustomLinks
              href="preise.html"
              name="Zu den Öffnungszeiten"
              extraClass={["text-center", "d-block"]}
            />
          </div>
          <Image
            src="/images/wing-tzun-training-hero.jpg"
            width={1296}
            height={440}
            alt="Wing Tsun Training"
            className="mx-auto img-fluid py-5"
          />
        </div>
        <div className="container">
          <h3 className="text-center fst-italic fw-bold fs-4">Seminare</h3>
          <p className="text-center fs-5">
            Als Ergänzung zum Gruppenunterricht werden in regelmäßigen Abständen
            Intensivseminare angeboten. Hier besteht die Möglichkeit sich
            intensiv mit verschiedenen Programminhalten auseinanderzusetzen. Da
            an diesem Tag die komplette geistige und körperliche Konzentration
            über längere Zeit auf das Training gerichtet wird, ist der
            Lernerfolg besonders hoch. Intensivseminare bieten auch eine
            ausgezeichnete Möglichkeit, Lerninhalte nach Trainingspausen wie
            Urlaub oder Krankheit aufzuholen.
          </p>
          <CustomLinks
            href="termine.html"
            name="Nächster Termin"
            extraClass={["text-center", "d-block", "mb-5"]}
          />
          <h3 className="text-center fst-italic fw-bold fs-4">
            Kleingruppen-Unterricht
          </h3>
          <p className="text-center fs-5 mb-5">
            In kleinen Gruppen ist die Betreuung intensiver und dadurch der
            Lernerfolg noch höher. Die Anzahl der Teilnehmer ist begrenzt auf
            max. 6 Personen. Die geringe Anzahl erlaubt es dem Lehrer besser auf
            die Bedürfnisse des einzelnen Teilnehmers einzugehen. Die Termine
            werden individuell vereinbart und finden außerhalb der regulären
            Trainingszeiten statt. Kleingruppenunterricht ist auch eine ideale
            Ergänzung zum normalen Gruppenunterricht.
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container" id="jugend">
          <div className="row">
            <div className="col-xs-12 col-sm-5">
              <Image
                src="/images/wing-tzun-gewaltpraevention.jpg"
                width={387}
                height={580}
                alt="Wing Tsun Gewaltprävention"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <h2 className="fs-3 fw-light mb-4 text-uppercase">
                Die Gewaltprävention
              </h2>
              <p className="fs-5">
                Kinder und Jugendliche werden immer früher mit Gewalt oder
                schwierigen Situationen in Ihrem Alltag konfrontiert. Gewalt
                muss nicht immer Schläge bedeuten. Es können auch einfache Worte
                sein.
              </p>
              <p className="fs-5">
                Wing Tsun hilf Jugendlichen dabei Selbstbewusstsein aufzubauen.
                Ein gesundes Selbstbewusstsein hilft Kindern dabei sich besser
                zu entfalten. Während des Unterrichts lernen Kinder und
                Jugendliche wie sie mit Konfliktsituationen richtig umgehen und
                ihr Leben gewaltfrei zu gestalten.
              </p>
              <CustomLinks href="kontakt" name="Jetzt Informieren" />
            </div>
          </div>
        </div>
      </section>
      <section className="container-grau py-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h2 className="fs-3 fw-light mb-4">Die WING TZUN KIDS</h2>
              <p className="fs-5">
                Spielerisch werden die Koordinationsfähigkeit und das
                Reaktionsvermögen der Kinder geschult. Im Training für Kinder
                (bereits ab 6 Jahren) geht es nicht in erster Linie um die
                Selbstverteidigung, sondern es wird der gesundheitliche Aspekt
                des Wing Tzun betont.
              </p>
              <p className="fs-5">
                So wirkt etwa das Üben der &quot;Wing Tzun&quot;-Formen den
                typischen Haltungsschäden entgegen. Die Entspannung und
                Lockerung des ganzen Bewegungsapparates wird hierauf aufbauend
                durch spezielle Dehnübungen unterstützt.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <Image
                src="/images/wing-tzun-kindertraining.jpg"
                width={550}
                height={417}
                alt="Wing Tsun Kindertraining"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <Image
                src="/images/wing-tzun-jugendtraining.jpg"
                width={550}
                height={417}
                alt="Wing Tsun Jugendtraining"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <h2 className="fs-3 fw-light mb-4 text-uppercase">
                Die WING TZUN JUGEND
              </h2>
              <p className="fs-5">
                Das Wing Tzun Training kann Jugendlichen helfen, sich bei
                alltäglichen Konflikten besser zu behaupten. Das Selbstvertrauen
                wird gefördert. Wing Tsun ist hervorragend zur Förderung der
                körperlichen, geistigen und charakterlichen Entwicklung von
                Kindern und Jugendlichen geeignet.
              </p>
              <p className="fs-5">
                Genau so wichtig wie der sportliche Aspekt, ist die soziale
                Gemeinschaft der Gruppe. In verschiedenen Kampfsituationen muss
                vorsichtig mit dem Partner geübt werden.
              </p>
              <p className="fs-5">
                Junge Menschen egal welcher Nation, Geschlecht und Religion sind
                herzlich bei uns willkommen.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-5" id="power">
        <section className="row">
          <div className="col-xs-12 col-md-6">
            <h2 className="fs-3 fw-light mb-4 text-uppercase">
              Unser Powertag ist Mittwoch
            </h2>
            <p className="fs-5">
              Schau in unser Pratzentraining am Mittwoch. Mit keiner anderen
              Methode kann man die Kampfsituationen beim einem Wing Tzunler
              besser simulieren wie an den Pratzen.
            </p>
            <p className="fs-5">Und es macht natürlich auch einfach Spaß.</p>
            <CustomLinks
              href="preise#open"
              name="Öffnungszeiten"
              extraClass={["fs-5", "d-block", "mb-5"]}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <h2 className="fs-3 fw-light mb-4 text-uppercase">
              Deine Lehrer Ausbildung
            </h2>
            <p className="fs-5">
              Hier wird die Fortbildung im klassischen Wing Tzun für
              Fortgeschrittene und Lehrer mit langjähriger Erfahrung angeboten.
              Es besteht die Möglichkeit das komplette System einschließlich der
              Waffenprogramme (Langstock und Doppelmesser mit Anwendungen) im
              Intensiv-Studiengang zu erlernen.
            </p>
            <p className="fs-5">
              <CustomLinks
                href="kontakt"
                name="Unverbindlich anfragen"
                extraClass={["fs-5", "d-block", "mb-5"]}
              />
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
