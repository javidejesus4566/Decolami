import DocumentTitle from "react-document-title";
import {
    DECOLAMI_TITLE,
    DESCRIPCION_PISOS,
    PISOS,
} from "../constants/Constants.js";
import Gallery from "../Gallery/Gallery";

const pisos = () => {
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="row">
                <div class="mx-auto">
                    <DocumentTitle title={DECOLAMI_TITLE + "Pisos"}></DocumentTitle>

                    <h3 className="text-center p-4">
                        Pisos <span className="badge badge-secondary">Laminados</span>
                    </h3>
                    <p className="pl-5 pr-5 lead">{DESCRIPCION_PISOS}</p>
                    <Gallery elements={PISOS} />
                </div>
            </div>
        </div>
    );
};

export default pisos;
