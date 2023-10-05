import React from "react";
import Weather from "./Weather";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/rita-rudzite-6440a0271/"
            target="_blank"
            rel="noreferrer"
          >
            Rita Rudzite{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/RuRi-Code-Cloud/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          hosted by{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
