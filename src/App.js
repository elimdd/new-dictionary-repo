import React from "react"
import Dictionary from "./Dictionary";
import logo from "./logo.png"
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}
        className="App-logo" alt="logo" />
    <div className="App">
      <h1>DiCTiONARY</h1>
      <Dictionary />
      <br />
      <section>
        <a href="/">Open-source</a> code by <a href="/">Eliana Marques</a> and
        hosted on <a href="/">Netlify</a>
      </section>
    </div>
      </header>
    </div>
  );
}

export default App;
