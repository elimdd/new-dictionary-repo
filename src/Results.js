import React from "react";

export default function Results(props) {
    console.log(props.result)

    if (props.result) {
        return (
            <div className="results">
          <h2>{props.result.word}</h2>
          {props.result.meanings.map(function(meaning, index){
              return meaning.definitions[0].definition;
          }
          )}
            </div>
        )
    } else {
    return null;
}
}