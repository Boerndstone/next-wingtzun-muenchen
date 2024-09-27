import Image from "next/image";
import CustomLinks from "../components/CustomLinks";

const page = () => {
  return (
    <>
      <section className="container-grau py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="fs-3 fw-light mb-4 text-uppercase">
                Erlebe WING TZUN
              </h2>
              <p className="fs-5">
                Wing Tzun ist eine reine Selbstverteidigung, in deren
                Mittelpunkt einmalige Prinzipien stehen, die durch
                konzentriertes Üben und bewusstes Sich-Einlassen erlernt und
                umgesetzt werden können. Dabei werden anfangs Techniken und
                Abläufe unterrichtet, die aber nur Mittel zum Zweck sind. Ziel
                ist die Ausprägung von wichtigen Fähigkeiten, die einem in
                Konfliktsituationen jeglicher Art zur Verfügung stehen.
              </p>
              <CustomLinks
                href="wingtzun#prinzip"
                name="Die Wing Tzun Prinzipien"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h2 className="fs-3 fw-light mb-4 text-uppercase">
                Wing Tzun <br /> Ode an den Frühling
              </h2>
            </div>
            <div className="col-12 col-md-6">
              <p className="fs-5">
                Das chinesische Volk wurde in seiner Geschichte von mehreren
                tausend Jahren immer wieder von angrenzenden Stämmen bedroht und
                überfallen. Deswegen hat die Kampfkunst seit jeher einen sehr
                hohen Stellenwert im Leben eines Chinesen.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p className="fs-5">
                In der Zeit der Manschus (1644 - 1911) wurde das unterdrückte
                chinesische Volk gezwungen, sein gesamtes Kulturerbe zu
                vergessen. Dies hatte zur Folge, dass Riten, Sitten und Bräuche
                nicht mehr nachgegangen werden konnte.
              </p>
            </div>
            <div className="col-12">
              <h4
                className="text-center mt-5 text-uppercase"
                style={{ color: "#999;" }}
              >
                GUT ZU WISSEN:
              </h4>
              <p className="fs-5 text-center" style={{ color: "#999;" }}>
                Es sind zahlreiche Schreibweisen gebräuchlich z. B. Wing Tsun
                (W.T.), Wyng Tjun, Ving Tsun (V.T.), Wing Tzun, Wing Chung, Wing
                Shun, Wing Tsung, Wing Tsjun, Wing Tjuen, Ving Chun (VC), Wing
                Do, Dynamic Ving Tshun (DVT)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-blau">
        <div className="container py-5">
          <div className="row">
            <div className="col-6 col-md-4">
              <Image
                src="/images/untergrund.png"
                width={416}
                height={513}
                alt="Wing Tsun Prinzipien"
                className="ms-auto"
              />
            </div>
            <div className="col-12 col-md-8">
              <h2 className="fs-3 fw-light mb-4 text-uppercase pt-5">
                WING TZUN - Eine Bewegung aus dem Untergrund
              </h2>
              <p className="fs-5">
                Um sich diesen gravierenden Einschnitten in die
                Lebensgewohnheiten der Chinesen zu widersetzen, organisierte man
                sich im Untergrund und so entstanden die so genannten
                Geheimgesellschaften, die dafür sorgten, das Kulturgut weiterhin
                zu pflegen und aufrecht zu erhalten. Die Mitgliedschaft in einer
                Geheimgesellschaft wurde jedoch mit dem Tode bestraft.
              </p>
              <p className="fs-5">
                Trotz dieser Tatsache schätzt man, dass es zur damaligen Zeit
                rund 3000 verschiedene Geheimgesellschaften gab. Kopf und
                Ausbilder jeder dieser Geheimbunde war der Sifu (Kung-Fu
                Meister). Ng Mui war die erste Shaolin-Kung-Fu-Meisterin,
                gründete mehrere Geheimbünde und benannte ihre neue Methode nach
                ihrer ersten Schülerin - Yim Wing Tzun (Lobgepriesener
                Frühling). So wurde diese Kampfkunst von Generation zu
                Generation innerhalb der Familien und Clans als geheimes System
                weitergegeben.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="zitat-box p-3 my-md-5 mx-auto rounded-2">
            <h3 className="text-center fs-5 fw-normal">
              &quot;Nimm die Dinge, wie sie sind: Schlage, wenn du schlagen
              musst. Tritt, wenn du treten musst.&quot;
            </h3>
            <p className="fs-5 text-center">Bruce Lee</p>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h2 className="fs-3 fw-light mb-4 text-uppercase">
                AUCH HOLLYWOOD LIEBT WING TZUN
              </h2>
              <p className="fs-5">
                Im Jahre 1949 brachte Meister Yip Man seine Kampfkunst von China
                nach Hongkong mit. Ab diesem Zeitpunkt fand die Kampfkunst auch
                Zugang in die Öffentlichkeit. Von Hongkong breitete sich Wing
                Tzun nach Amerika (Bruce Lee) und Europa (Keith R. Kernspecht)
                aus.
              </p>
              <p className="fs-5">
                Das in Deutschland gelehrte Wing Tzun leitet sich von Yip
                Man&apos;s letztem Meisterschüler Großmeister Leung Ting ab.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <Image
                src="/images/warumwt.png"
                width={416}
                height={432}
                alt="Wing Tsun Prinzipien"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 text-center">
              <h4
                className="text-center mt-5 text-uppercase"
                style={{ color: "#999;" }}
              >
                GUT ZU WISSEN:
              </h4>
              <p className="fs-5 text-center" style={{ color: "#999;" }}>
                Bruce Lee hat in seinem ganzen Leben nur einen Kampf verloren -
                als er 13 war, was ihn veranlasste Ving Tsun zu lernen. Er hat
                später allerdings auch einige Elemente anderer KKs und sogar den
                Football für seinen Stil übernommen.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-grau">
        <div className="container py-5">
          <div className="p-md-5" id="prinzip">
            <h2 className="fs-3 fw-light mb-4 text-uppercase text-center">
              Folgende <b>4 Kampf-Prinzipien</b>
              <br />
              bilden beim Wing Tzun die Basis:
            </h2>
            <h3 className="text-center">1. Prinzip:</h3>
            <p className="fs-5 text-center mb-5">
              Angriff ist die beste Verteidigung! Mit diesem Prinzip kannst du,
              als Angegriffener, das Kampfgeschehen von Anfang an &quot;selbst
              in die Hand nehmen&quot;: Du reagierst auf feindseliges
              Überschreiten der Sicherheitsdistanz mit einem gradlinigen
              direkten Gegenangriff (Universallösung).
            </p>
            <h3 className="text-center">2. Prinzip:</h3>
            <p className="fs-5 text-center mb-5">
              Falls der Angreifer deine Angriffsaktion behindern kann, bleibst
              du kontrolliert mit flexiblen Vorwärtsdruck kleben, um einen neuen
              Angriffspunkt zu finden.
            </p>
            <h3 className="text-center">3. Prinzip:</h3>
            <p className="fs-5 text-center mb-5">
              Der Klügere gibt nach: Übt der Gegner nun einen verstärkten Druck
              aus, um die Kontrolle zu brechen, gibst du weich nach. Durch deine
              weichen Abwehrreflexe lässt du den Angriff ins Leere laufen.
            </p>
            <h3 className="text-center">4. Prinzip:</h3>
            <p className="fs-5 text-center mb-5">
              Sobald sich der Angreifer zurückzieht dringst du durch den
              ständigen Vorwärtsdruck automatisch wie Wasser in jede sich
              ergebende Lücke.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
