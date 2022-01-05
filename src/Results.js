import React from "react";

export default function Results(props) {
    console.log(props.data)

    if (props.data) {
        return (
            <div className="results">
          <h2>{props.data.word}</h2>
            </div>
        )
    } else {
    return null
}
}