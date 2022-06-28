import React from "react";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Services from "./Components/Services";
import Subscribe from "./Components/Subscribe";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="f-heading">
        <h1>Features</h1>
        <p>Here are some of the Features of App</p>
      </div>
      <Features />
      <Services />
      <Subscribe />
    </div>
  );
}

export default App;
