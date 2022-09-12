
import SocialBar from '../SocialBar/SocialBar'
import LinkPanel from "./LinkPanel";
import ContactPanel from "./ContactPanel";
import decolamiLogo from "../assets/img/logo-decolami.png";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {
  SERVICIOS,
  COMPANY,
  CONTACT_Footer,
} from "../constants/Constants";
import "./Footer.css";
const footer = () => {
  return (
    <footer className="footer bg-light mt-auto">
      <div className="content">
        <br />
        <div className="commom footer_col_description">
          <Link to="/inicio">
            <img
              src={decolamiLogo}
              width="250"
              height="auto"
              className="logo d-inline-block align-top"
              href="#decolamilogo"
              alt="Deco Lami logo"
            />
          </Link>
        </div>
        <div className="common footer_col_social">
          <SocialBar />
        </div>
        <div className="commom footer_col"  >
          <Container style={{ textAlign: "center" }}>
            <LinkPanel title="Servicios" links={SERVICIOS} />
          </Container>
        </div>
        <div className="commom footer_col">
          <LinkPanel title="Compañia" links={COMPANY} />
        </div>
        <div className="commom contacts">
          <Container style={{ textAlign: "center" }}>
            <ContactPanel contacts={CONTACT_Footer} />
            <br />

          </Container>
          <br></br>
        </div>
      </div>
    </footer>
  );
};

export default footer;
