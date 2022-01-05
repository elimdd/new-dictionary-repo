import React from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  return (
    <div className="dictionary">
    <form>
      <input type="search"></input>
    </form>
    <Results />
  </div>
  )
}
