import Navbar from "react-bootstrap/NavBar";
import { useState, useEffect } from 'react'
import { Nav, Image, Container, Row, Col } from "react-bootstrap";
import decolamiLogo from "../assets/img/logo-decolami.png";
import SocialBar from '../SocialBar/SocialBar'
import DecoRoute from "../constants/DecoRoute";
import SocialMediaPanel from "../Footer/SocialMediaPanel";
import ContactPanel from "../Footer/ContactPanel";
import { CONTACT_PANEL, } from "../constants/Constants";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* Information */}
      <section id="HeaderLogoSections">
        <Container >
          <Row>
            <Col xs={12} md={4} >
              <Image
                src={decolamiLogo}
                style={{
                  maxHeight: "180px",
                  maxWidth: "180px"
                }}
                href="/inicio"
                fluid />
            </Col>
            <Col xs={12} md={4}>
              <Container style={{ paddingTop: "0px" }}>
                <ContactPanel contacts={CONTACT_PANEL} />
              </Container>

            </Col>
            <Col xs={12} md={4}>
              <Container style={{ paddingTop: "30px" }}>
                <SocialBar />
              </Container>
            </Col>
          </Row>
        </Container>
        <Navbar expand="lg" className="justify-content-center ">
          <Navbar.Toggle aria-controls="basic-navbar-nav  justify-content-center " id="toggle" />
          <Navbar.Collapse id="basic-navbar-nav"  >
            <Nav
            >
              <DecoRoute path="/inicio" text="Inicio" ></DecoRoute>
              <DecoRoute path="/mallas" text="Mallas"></DecoRoute>
              <DecoRoute path="/laminados/Laminados Decorativos" text="Laminados"></DecoRoute>
              <DecoRoute path="/cortinas/Cortinas Enrollables" text="Cortinas"></DecoRoute>
              <DecoRoute path="/shutter" text="Shutters"></DecoRoute>
              <DecoRoute path="/toldos" text="Toldos"></DecoRoute>
              <DecoRoute path="/palillera" text="Palilleras"></DecoRoute>
              <DecoRoute path="/pisos" text="Pisos"></DecoRoute>
              <DecoRoute path="/sobreNosotros" text="Sobre Nosotros"></DecoRoute>
              <DecoRoute path="/contactUs" text="Contáctanos"></DecoRoute>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>



    </>
  );
};

export default Header;
