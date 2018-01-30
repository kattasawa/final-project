import React from "react"
import Contactform from "components/contactform"

import "./aboutpage.css"

export default class Aboutpage extends React.Component {

  render() {
    return (
      <div className="about-page">
        <div className="first-text">
          <h2>Stötta Mamma</h2>

          <p>


DOULA



(Beskrivning)

Doulastöd inför, under och efter förlossning



Att föda barn är en fysisk, psykologisk och spirituell upplevelse. I Sverige finns ofta tillräcklig medicinsk vård- men det är inte alltid barnmorska eller partner har tid och möjlighet att vara ett kontinuerligt känslomässigt stöd. Det är inga tvivel om hur viktig omvårdnaden är under förlossningen- forskning visar att det är avgörande för mammans psykiska hälsa, för anknytning och amning och för relationen mellan föräldrarna.



 Att stötta en mamma som föder är att lägga grunden för en tryggare familj.





——Boka kostnadsfri konsultation!—-



(RUBRIKER)



Vad vi erbjuder och kostnad:



Förlossningsdoula



9000:- kr</p>
          </div>
        <Contactform />
      </div>
    )
  }
}
