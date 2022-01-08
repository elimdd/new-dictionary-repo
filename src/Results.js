import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css"

export default function Results(props) {
    console.log(props.result)

    if (props.result) {
        return (
            <div className="results">
                <section>
          <h2>{props.result.word}</h2>
          {props.result.phonetics.map(function(phonetic, index){
              return (
                  <div key={index}>
<Phonetic phonetic={phonetic} />
                  </div>
              );
          })}
          </section>
          <section>
          {props.result.meanings.map(function(meaning, index){
              return (
              <div key={index}>
<Meaning meaning={meaning} />
              </div>
              );
          }
          )}
          </section>
            </div>
        )
    } else {
    return null;
}
}