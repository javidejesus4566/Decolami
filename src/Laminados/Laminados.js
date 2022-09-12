import DocumentTitle from "react-document-title";
import { useEffect } from 'react'
import {
  DECOLAMI_TITLE,
  LAMINADOS,
  LAMINADOS_PROTECCION_SOLAR,
  LAMINADOS_DECORATIVOS_DESCRIPCION,
  LAMINADOS_PROTECCION_SOLAR_DESCRIPCION,
} from "../constants/Constants.js";
import Gallery from "../Gallery/Gallery";
import SmoothScrolling from "./smoothScrolling";

let REFS = {
  DECORACION: "Decoracion",
  PROTECCION: "Protección "
}

let timer = 25;

const Laminados = (props) => {

  useEffect(() => {
    try {
      let { refLaminados } = props.match.params;
      let ref = Array(...String(refLaminados).split(" "));

      if (ref[1] === "de") {
        setTimeout(() => {
          SmoothScrolling.scrollTo(REFS.PROTECCION)
        }, timer)
      } else {
        setTimeout(() => {
          SmoothScrolling.scrollTo(REFS.DECORACION)
        }, timer)
      }
    } catch (err) {
      console.warn(err) 
    }
  }, [])
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="row">
        <div class="mx-auto">
          <DocumentTitle title={DECOLAMI_TITLE + "Laminados"}></DocumentTitle>

          <h3 className="text-center p-4">
            Laminados <span id={REFS.PROTECCION} className="badge badge-secondary">Protección Solar</span>
          </h3>
          <p className="pl-5 pr-5 lead">{LAMINADOS_PROTECCION_SOLAR_DESCRIPCION}</p>

          <Gallery elements={LAMINADOS_PROTECCION_SOLAR} />
          <div style={{ borderTop: "2px solid #808080 ", marginLeft: 20, marginRight: 20 }}></div>

          <h3 className="text-center p-4">
            Laminados <span id={REFS.DECORACION} className="badge badge-secondary">Decoración</span>
          </h3>
          <p className="pl-5 pr-5 lead">{LAMINADOS_DECORATIVOS_DESCRIPCION}</p>
          <Gallery elements={LAMINADOS} />

        </div>
      </div>

    </div>
  );
};

export default Laminados;
