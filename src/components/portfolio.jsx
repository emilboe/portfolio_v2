import React, { memo } from "react";

import "../styles/portfolio.scss";
import tjohei from "../images/tjohei.png";
import hamle from "../images/hamle.jpg";
import gardenview from "../images/gardenview.png";

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      <div className="portfolio-content">
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={hamle} alt="죄송합니다 이미지를 불러오지 못했습니다." />
            </div>
            <div className="title">Hamle (Bachelor Project)</div>
            <div className="contents">
              I en tverrfaglig gruppe på 3 har vi jobbet smidig over 2 semestre i samarbeid med Gjøvik kommune for å utvikle en digital løsning for å planlegge handleturer bedre i håp om å redusere matsvinn. Gjennom hele prosessen har vi tatt i bruk innsiktsmetodikk som; semi strukturerte intervjuer, spørreundersøkelser, persona, scenario i tillegg til designmetoder; sketching, wireframes, lo-fi og hi-fi prototyper. Det ferdige produktet er en funksjonell progressiv web applikasjon (PWA) med mulighet for å dele handleliste og inventaroversikt med flere grupper.
            </div>
            <a className="button" href="https://github.com/emilboe/hamle">github repo</a>
            <a className="button" href="https://hamle.netlify.app/">live site</a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img
                src={gardenview}
                alt="Screenshot of Gardenview website."
              />
            </div>
            <div className="title">GardenView</div>
            <div className="contents">
              I dette prosjektet var jeg utviklingsansvarlig i en gruppe hvor vi designet og utviklet flere iterasjoner av en digital løsning basert på tilbakemelding fra gjentagende møter med arbeidsgiver og veileder. Dette prosjektet ble bygget med MERN stack. I gruppen tok vi i bruk flere metoder som ideering med sketcher, research rundt oppgaven og prototyping både som lo-fi og hi-fi. Vi hadde brukertester flere ganger under utvikling. Den resulterende nettsiden gir oversikt over planter de ansatte har lagt til, med informasjon om når de trenger vanning og hvem som sist vannet planten. Hvem som helst kan se oversikten på gardenview.netlify.com.
            </div>
            <a className="button" href="https://github.com/emilboe/GardenView-Frontend">github repo</a>
            <a className="button" href="https://gardenview.netlify.app/#/about">live site</a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={tjohei} alt="Visual of Tjohei website." />
            </div>
            <div className="title">Tjohei</div>
            <div className="contents">
              Jeg lagde to klikkbare prototyper i Adobe XD av et innbilt nettsted for hytteutleie. I dette prosjektet jobbet jeg helt alene for å utvikle både mobil og desktop versjoner. Metoder som ble brukt var skissering, intervju, sitemapping, wireframes, research, samt lo-fi og hi-fi prototyping. Resultatet er en interaktiv hi-fi prototype med oversikt over hytter som er tilgjengelig for utleie i det området du søker.
            </div>
            <a className="button" href="https://xd.adobe.com/view/e9b00e11-e810-41ed-5c66-83d405e985c7-9f81/?fullscreen">clickable prototype</a>
            <a className="button" href="/">read more</a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
