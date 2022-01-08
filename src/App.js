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
      <h1>DICTiONARY !!</h1>
      <Dictionary />
      <div className="app-footer">
        <a href="/">Open-source</a> code by <a href="/">Eliana Marques</a> and
        hosted on <a href="/">Netlify</a>
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;
