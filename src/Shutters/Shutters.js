import DocumentTitle from "react-document-title";
import {
    DECOLAMI_TITLE,
    DESCRIPCION_SHUTTER,
    SHUTTERS,
} from "../constants/Constants.js";
import Gallery from "../Gallery/Gallery";

const shutter = () => {
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="row">
                <div class="mx-auto">
                    <DocumentTitle title={DECOLAMI_TITLE + "Shutter"}></DocumentTitle>

                    <h3 className="text-center p-4">
                        Shutters
                    </h3>
                    <p className="pl-5 pr-5 lead">{DESCRIPCION_SHUTTER}</p>
                    <Gallery elements={SHUTTERS} />
                </div>
            </div>
        </div>
    );
};

export default shutter;
