import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Survey } from "./components/Survey";
import { Result } from "./components/Result";
import { Contact } from "./components/Contact";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { LoadScreen } from "./layout/LoadScreen";
import { SurveyProvider } from "./context/SurveyState";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <SurveyProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/survey/loading" component={LoadScreen} />
          <Route exact path="/results" component={Result} />
        </SurveyProvider>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
