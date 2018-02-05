import React from "react"

import Fetchshortstory from "components/fetchshortstory"
import "./style.css"

export default class Startpage extends React.Component {

  render() {
    return (
      <div>
        <div className="intro-text">
          <p>Att föda barn är en fysisk, psykologisk och spirituell upplevelse. I Sverige finns
            ofta tillräcklig medicinsk vård- men det är inte alltid barnmorska eller partner har
            tid och möjlighet att vara ett kontinuerligt känslomässigt stöd. Det är inga tvivel
            om hur viktig omvårdnaden är under förlossningen- forskning visar att det är avgörande
            för mammans psykiska hälsa, för anknytning och amning och för relationen mellan
            föräldrarna.<br />
            <br />
            Att stötta en mamma som föder är att lägga grunden för en tryggare familj.
          </p>
        </div>
        <Fetchshortstory />
      </div>
    )
  }

}
