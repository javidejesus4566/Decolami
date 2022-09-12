import { Component } from "react";
import Gallery from "./Gallery/Gallery";
import "./App.css";
import {
  CARD_EXAMPLE,
  CATEGORIAS,
  DECOLAMI_TITLE,
} from "./constants/Constants";
import ImageSlide from "./ImageSlide/ImageSlide";
import DocumentTitle from "react-document-title";
class App extends Component {
  render() {
    return (
      <>
        <DocumentTitle title={DECOLAMI_TITLE + "Inicio"}></DocumentTitle>
        <ImageSlide slides={CARD_EXAMPLE}></ImageSlide>
        <section style={{ backgroundColor: "#F1F2E6" }}>
          <h4 className="text-center p-4">Nuestras Categorias</h4>
          <Gallery elements={CATEGORIAS}></Gallery>
        </section>
        <h4 className="text-center p-4">
          Nuestras Colecciones | Los Mas Buscados{" "}
        </h4>
        <Gallery elements={CARD_EXAMPLE}></Gallery>
        {/* <SocialBar /> */}

      </>
    );
  }
}

export default App;
