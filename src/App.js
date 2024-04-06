import React from "react";
import Weather from "./js/Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />
      </div>
    </div>
  );
}
