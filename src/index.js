import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./Contacto/Contacto";
import Header from "./Header/Header";
import Cortinas from "./Cortinas/Cortinas";
import Laminados from "./Laminados/Laminados";
import SobreNosotros from "./SobreNosotros/SobreNosotros";
import Footer from "./Footer/Footer";
import mallas from "./Mallas/Mallas";
import shutter from "./Shutters/Shutters";
import toldos from "./Toldos/Toldo-Retractil";
import palillera from "./Palillera/Palillera";
import pisos from "./Pisos/Pisos";
import ScrollRestoration from 'react-scroll-restoration'
const Routing = () => {
  return (
    <Router>
      <ScrollRestoration />
      <Header />
      <Switch className="content">
        <Route path="/inicio" component={App} />
        <Route path="/mallas" component={mallas} />
        <Route path="/laminados/:refLaminados" component={Laminados} />
        <Route path="/cortinas/:refCortinas" component={Cortinas} />
        <Route path="/shutter" component={shutter} />
        <Route path="/toldos" component={toldos} />
        <Route path="/palillera" component={palillera} />
        <Route path="/pisos" component={pisos} />
        <Route path="/sobreNosotros" component={SobreNosotros} />
        <Route path="/contactUs" component={Contacto} />
        <Route path="*">
          <App />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
