import React from "react";
import Synonyms from "./Synonyms"
import Examples from "./Examples"

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong> Definition</strong>
              {definition.definition}
              <br></br>
              <Examples examples={definition.example} />
              <br></br>
              <Synonyms synonyms={definition.synonyms}/>
            </p>
          </div>
        );
      })}
    </div>
  );
}
