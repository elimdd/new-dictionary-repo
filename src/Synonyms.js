import React from "react";

export default function Synonyms(props){
    if (props.synonyms) {
        return (
            <div>{props.synonyms.map(function(synonyms, index){
                return (
                    <li key={index}>
                        {synonyms}
                    </li>
                )
            })}</div>
        )
    } else {
        return ( null
    )
    }
}