import DocumentTitle from "react-document-title";
import { DECOLAMI_TITLE, PERSIANAS_VENECIANAS } from "../constants/Constants";
import Gallery from "../Gallery/Gallery";

const persianas = () => {
  return (
    <div>
      <DocumentTitle title={DECOLAMI_TITLE + "Persianas"}></DocumentTitle>
      <h3 className="text-center p-4">
        Persianas <span className="badge badge-secondary">Venecianas</span>
      </h3>
      <Gallery elements={PERSIANAS_VENECIANAS}></Gallery>
    </div>
  );
};

export default persianas;
