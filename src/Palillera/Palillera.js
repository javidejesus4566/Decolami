import DocumentTitle from "react-document-title";
import {
    DECOLAMI_TITLE,
    DESCRIPCION_PALILLERIA,
    PALILLERIA,
} from "../constants/Constants.js";
import Gallery from "../Gallery/Gallery";

const palillera = () => {
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="row">
                <div class="mx-auto">
                    <DocumentTitle title={DECOLAMI_TITLE + "Palilleria"}></DocumentTitle>

                    <h3 className="text-center p-4">
                        Palilleria
                    </h3>
                    <p className="pl-5 pr-5 lead">{DESCRIPCION_PALILLERIA}</p>
                    <Gallery elements={PALILLERIA} />
                </div>
            </div>
        </div>
    );
};

export default palillera;
