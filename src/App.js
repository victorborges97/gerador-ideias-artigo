import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";

import Navbar from "./components/Navbar";
import IdeiasScreen from "./components/IdeiasScreen";
import PerguntaScreen from "./components/PerguntaScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/perguntas" />} />
          <Route path="/perguntas" exact component={PerguntaScreen} />
          <Route path="/ideias" component={IdeiasScreen} />
          <Route exact path="*" render={() => <h2>Rota não encontrada!</h2>} />
        </Switch>
      </div>
    </Router>
  );
}
