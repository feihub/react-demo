import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ImageD from "./components/ImageD";

function App() {
  const imgInfo = {
    src: logo,
    alt: "logo",
    width: 20,
    heght: 20
  };

  const Welcom = (props) => {
    return <h1>Hello, {props.name}</h1>;
  };
  return (
    <div className="App">
      <header className="App-header">Demo3</header>

      <section className="App-sec">
        <ImageD imgInfo={imgInfo}></ImageD>
        <Welcom name="Sara"></Welcom>
        <Welcom name="Cahel"></Welcom>
        <Welcom name="Edit"></Welcom>
      </section>
    </div>
  );
}

export default App;
