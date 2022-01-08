import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <p>
                        <strong>Definition: </strong>
                    <em>{definition.definition}</em>
                    <br />
                    <strong>Example: </strong>
                    <em>{definition.example}</em>
                    <br />
                    <strong>Synonyms: </strong>
                    <Synonyms synonyms={definition.synonyms} />
                    </p>
                    </div>
            )
        })}
        </div>
    );
}