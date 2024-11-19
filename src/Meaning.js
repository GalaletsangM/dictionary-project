import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="definition">{definition.definition}</div>
              <div className="example">
                <Examples examples={definition.example} />
              </div>
            </p>
          </div>
        );
      })}
        <Synonyms synonyms={props.meaning.synonyms} />

    </div>
  );
}
