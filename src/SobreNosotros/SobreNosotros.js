import DocumentTitle from "react-document-title";
import { Container } from 'react-bootstrap'
import { DECOLAMI_TITLE, SOBRE_NOSOTROS } from "../constants/Constants";
import "./SobreNosotros.css";
const sobreNosotros = () => {
  return (
    <>
      <Container style={{ textAlign: "center" }}>
        <DocumentTitle title={DECOLAMI_TITLE + "Sobre Nosotros"}></DocumentTitle>
        <h3 className="pt-5  pl-5 pb-3">{SOBRE_NOSOTROS[0].title}</h3>
        <p className="pl-5 pr-5">{SOBRE_NOSOTROS[0].paragraphs[0].p}</p>
        <p className="pl-5 pr-5">{SOBRE_NOSOTROS[0].paragraphs[1].p}</p>
        <h3 className="pt-5  pl-5 pb-3">{SOBRE_NOSOTROS[1].title}</h3>
        <p className="pl-5 pr-5 year">2017</p>
        <p className="pl-5 pr-5">{SOBRE_NOSOTROS[1].paragraphs[0].p}</p>
        <p className="pl-5 pr-5 year">2018</p>
        <p className="pl-5 pr-5">{SOBRE_NOSOTROS[1].paragraphs[1].p}</p>
      </Container>
    </>
  );
};

export default sobreNosotros;
