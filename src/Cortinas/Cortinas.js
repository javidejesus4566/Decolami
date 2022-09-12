import { useEffect } from "react";
import DocumentTitle from "react-document-title";
import SmoothScrolling from "./smoothScrolling";
import {
  CORTINAS_CAPRICCIO,
  CORTINAS_ENROLLABLES,
  CORTINAS_PERMAS,
  CORTINAS_ROMANAS,
  CORTINAS_TRIPLE_SHADE,
  CORTINAS_ZEBRAS,
  CORTINA_DESLIZANTES,
  DECOLAMI_TITLE,
  CORTINAS_VENECIANAS,
  CORTINAS_VENECIANAS_DESCRIPCION,
  CORTINAS_ENROLLABLES_DESCRIPCION,
  CORTINAS_ROMANAS_DESCRIPCION,
  CORTINAS_CAPRICCIO_DESCRIPCION,
  CORTINAS_ZEBRA_DESCRIPCION,
  CORTINAS_PERMAS_DESCRIPCION,
  CORTINAS_TRIPLE_SHADE_DESCRIPCION,
  CORTINAS_DESLIZANDTE_DESCRIPCION
} from "../constants/Constants";
import Gallery from "../Gallery/Gallery";


let REFS = {
  ROMANAS: "Romanas",
  ENROLLABLES: "Enrollables",
  CAPRICIO: "Capriccio",
  ZEBRA: "Zebra",
  VENECIANAS: "Venecianas",
  PERMAS: "Permas",
  TRIPLE: "Triple",
  PANEL_DESLIZANTE: "Panel Deslizante"
}

let timer = 25;
const Cortinas = (props) => {



  useEffect(() => {
    try {
      let { refCortinas } = props.match.params;
      let ref = Array(...String(refCortinas).split(" "));
      if (ref[1] === "de") {
        setTimeout(() => {
          SmoothScrolling.scrollTo(REFS.PANEL_DESLIZANTE)
        }, timer)
      } else {
        setTimeout(() => {
          SmoothScrolling.scrollTo(ref[1])
        }, timer)
      }
    } catch (err) {
      console.warn(err)
    }
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div class="mx-auto">

          <DocumentTitle title={DECOLAMI_TITLE + "Persianas"}></DocumentTitle>


          <DocumentTitle title={DECOLAMI_TITLE + "Cortinas"}></DocumentTitle>

          <h3 className="text-center p-4" >
            Cortinas <span id={REFS.ENROLLABLES} href="Enrollables" className="badge badge-secondary">Enrollables</span>
          </h3>
          <p className="pl-5 pr-5 lead">{CORTINAS_ENROLLABLES_DESCRIPCION}</p>

          <Gallery elements={CORTINAS_ENROLLABLES}></Gallery>

          <div style={{ borderTop: "2px solid #808080 ", marginLeft: 20, marginRight: 20 }}></div>

          <h3 className="text-center p-4">
            Cortinas <span id={REFS.ROMANAS} className="badge badge-secondary">Romanas</span>
          </h3>
          <p className="pl-5 pr-5 lead">{CORTINAS_ROMANAS_DESCRIPCION}</p>

          <Gallery elements={CORTINAS_ROMANAS}></Gallery>

          <div style={{ borderTop: "2px solid #808080 ", marginLeft: 20, marginRight: 20 }}></div>

          <h3 className="text-center p-4">
            Cortinas <span id={REFS.CAPRICIO} className="badge badge-secondary">Capriccio</span>
          </h3>
          <p className="pl-5 pr-5 lead">{CORTINAS_CAPRICCIO_DESCRIPCION}</p>

          <Gallery elements={CORTINAS_CAPRICCIO}></Gallery>

          <div style={{ borderTop: "2px solid #808080 ", marginLeft: 20, marginRight: 20 }}></div>
          <h3 className="text-center p-4">
            Cortinas <span id={REFS.ZEBRA} className="badge badge-secondary">Zebra</span>
          </h3>
          <p className="pl-5 pr-5 lead">{CORTINAS_ZEBRA_DESCRIPCION}</p>

          <Gallery elements={CORTINAS_ZEBRAS}></Gallery>


          <div style={{ borderTop: "2px solid #808080 ", marginLeft: 20, marginRight: 20 }}></div>

          <h3 className="text-center p-4">
            Cortinas <span id={REFS.VENECIANAS} className="badge badge-secondary">Venecianas</span>
          </h3>
          <p className="pl-5 pr-5 lead">{CORTINAS_VENECIANAS_DESCRIPCION}</p>

          <Gallery elements={CORTINAS_VENECIANAS}></Gallery>

          <div style={{ borderTop: "2px solid #808080 ", marginLeft: 20, marginRight: 20 }}></div>

          <h3 className="text-center p-4">
            Cortinas <span id={REFS.PERMAS} className="badge badge-secondary">Permas</span>
          </h3>
          <p className="pl-5 pr-5 lead">{CORTINAS_PERMAS_DESCRIPCION}</p>
          <Gallery elements={CORTINAS_PERMAS}></Gallery>

          <div style={{ borderTop: "2px solid #808080 ", marginLeft: 20, marginRight: 20 }}></div>

          <h3 className="text-center p-4">
            Cortinas <span id={REFS.TRIPLE} className="badge badge-secondary">Triple Shade</span>
          </h3>
          <p className="pl-5 pr-5 lead">{CORTINAS_TRIPLE_SHADE_DESCRIPCION}</p>
          <Gallery elements={CORTINAS_TRIPLE_SHADE}></Gallery>

          <div style={{ borderTop: "2px solid #808080 ", marginLeft: 20, marginRight: 20 }}></div>

          <h3 className="text-center p-4">
            Cortinas de <span id={REFS.PANEL_DESLIZANTE} className="badge badge-secondary">Panel Deslizante</span>
          </h3>
          <p className="pl-5 pr-5 lead">{CORTINAS_DESLIZANDTE_DESCRIPCION}</p>
          <Gallery elements={CORTINA_DESLIZANTES}></Gallery>
        </div>
      </div>
    </div>
  );
};

export default Cortinas;
