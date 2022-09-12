import DocumentTitle from "react-document-title";
import {
    DECOLAMI_TITLE,
    DESCRIPCION_TOLDOS,
    TOLDOS,
} from "../constants/Constants.js";
import Gallery from "../Gallery/Gallery";

const toldos = () => {
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="row">
                <div class="mx-auto">
                    <DocumentTitle title={DECOLAMI_TITLE + "Toldos"}></DocumentTitle>

                    <h3 className="text-center p-4">
                        Toldo <span className="badge badge-secondary">Retractil</span>
                    </h3>
                    <p className="pl-5 pr-5 lead">{DESCRIPCION_TOLDOS}</p>
                    <Gallery elements={TOLDOS} />
                </div>
            </div>
        </div>
    );
};

export default toldos;
