import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Survey } from "./components/Survey";
import { Header } from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
