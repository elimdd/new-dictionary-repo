import React, {useState} from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
let [keyword, setKeyword] = useState ("");

    function searching (event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition...`);
    }

function handleTyping (event) {
console.log(event.target.value);
setKeyword(event.target.value);
}

  return (
    <div className="dictionary">
    <form onSubmit={searching}>
      <input type="search" onChange={handleTyping} ></input>
    </form>
    <Results />
  </div>
  )
}
