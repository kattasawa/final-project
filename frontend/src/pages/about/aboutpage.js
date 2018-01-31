import React from "react"
import Contactform from "components/contactform"

import "./aboutpage.css"

export default class Aboutpage extends React.Component {

  render() {
    return (
      <div className="about-page">
        <h1>Om oss</h1>
        <div className="underline" />
        <div className="first-text">
          <h2>Stötta Mamma</h2>
          <h4>DOULA</h4>
          <p>
Doulastöd inför, under och efter förlossning
Att föda barn är en fysisk, psykologisk och spirituell upplevelse. I Sverige finns ofta tillräcklig medicinsk vård- men det är inte alltid barnmorska eller partner har tid och möjlighet att vara ett kontinuerligt känslomässigt stöd. Det är inga tvivel om hur viktig omvårdnaden är under förlossningen- forskning visar att det är avgörande för mammans psykiska hälsa, för anknytning och amning och för relationen mellan föräldrarna.
Att stötta en mamma som föder är att lägga grunden för en tryggare familj.<br />





——Boka kostnadsfri konsultation!—-<br />

Vad vi erbjuder och kostnad:<br />



Förlossningsdoula



9000:- kr</p>

<ul className="featureList">
      <li className="tick">Är medveten om kvinnans känslomässiga behov under värkarbetet och förstår födandets fysiologi </li>
      <li className="tick">Erbjuder emotionellt och fysiskt stöd samt hjälper kvinnan med den information hon behöver för att kunna fatta informerade beslut</li>
      <li className="tick">Stannar hos kvinnan under värkarbetet</li>
      <li className="tick">Har en vårdande och skyddande roll gentemot kvinnan och hennes upplevelse av förlossningen</li>
      <li className="tick">Hjälper eventuell partner att närvara och stödja kvinnan i den mån hen känner sig bekväm</li>
      <li className="tick">Underlättar kommunikationen mellan kvinnan/ partnern och sjukvårdspersonal</li>
      <li className="tick">Förstår att upplevelsen av förlossningen kommer stanna hos kvinnan under hela hennes liv</li>
</ul>
        </div>
        <Contactform />
      </div>
    )
  }
}
