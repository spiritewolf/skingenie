import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Survey } from "./components/Survey";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { SurveyProvider } from "./context/SurveyState";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <SurveyProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/survey" component={Survey} />
        </SurveyProvider>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
