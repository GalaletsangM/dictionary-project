import React from "react";
import "./Phonetics.css"

export default function Phonetics(props){
    return (
      <div className="Phonetics">
        <a href={props.phonetic.audio}>
          Listen
        </a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
}