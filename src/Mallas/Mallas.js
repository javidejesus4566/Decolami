import DocumentTitle from "react-document-title";
import {
    DECOLAMI_TITLE,
    DESCRIPCION_MALLAS,
    MALLAS,
} from "../constants/Constants.js";
import Gallery from "../Gallery/Gallery";

const mallas = () => {
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="row">
                <div class="mx-auto">
                    <DocumentTitle title={DECOLAMI_TITLE + "Mallas"}></DocumentTitle>

                    <h3 className="text-center p-4">
                        Mallas <span className="badge badge-secondary">Proteccion</span>
                    </h3>
                    <p className="pl-5 pr-5 lead">{DESCRIPCION_MALLAS}</p>
                    <Gallery elements={MALLAS} />
                </div>
            </div>
        </div>
    );
};

export default mallas;
