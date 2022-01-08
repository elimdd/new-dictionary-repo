import React, {useState} from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from 'axios'

export default function Dictionary() {
let [keyword, setKeyword] = useState ("");
let [definition, setDefinition] = useState (""); 


function handleResponse(response) {
    console.log(response.data[0]);
    setDefinition(response.data[0]);

  }

    function searching (event) {
        event.preventDefault();
    
        //documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log();
    axios.get(apiUrl).then(handleResponse);
  }

function handleTyping (event) {
console.log(event.target.value);
setKeyword(event.target.value);
}

  return (
    <div className="dictionary">
        <h3> What word are you looking for?</h3>
    <form onSubmit={searching}>
      <input className="input" placeholder="Type here..." type="search" onChange={handleTyping} ></input>
    </form>
    <Results result={definition}/>
  </div>
  )
}
