import React from "react"
import "./Phonetic.css"
import listen from "./listen.png"

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div className="phonetic">
            <a href={props.phonetic.audio} target="_blank">
            <img src={listen} className="listen" alt="listen-image" />
            </a>
            <br />
            <strong className="phonetic-text">
           / {props.phonetic.text} /
           </strong>
        </div>
    );
}