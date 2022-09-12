import { Component } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import "./Gallery.css";
class Gallery extends Component {
  render() {
    return (
      <Container >
        <Row style={{ textAlign: "center" }}>
          {this.showGallery()}
        </Row>
      </Container>
    );
  }

  showGallery() {
    const cardElements = this.props.elements.map((element) => (
      //   <div key={element.id} className="col-md-4 ">
      //   <div className="card mb-4 border-0 width">
      //     <img alt={element.title} src={element.img} className="card-img-top"></img>
      //     <div className="card-body">
      //       <h5 className="card-title">{element.title}</h5>
      //       <p className="card-text">{element.text}</p>
      //       {this.renderBotton(element.link)}
      //     </div>
      //   </div>
      // </div >
      <>
        <Col md={6} lg={4} id="Area"  >
          <Container >
            <Card key={element.id} style={{ width: '20rem', border: '0px', paddingRight: "15px", paddingLeft: "15px", backgroundColor: "transparent" }} mt>
              <Card.Img variant="top" height={250} width={250} src={element.img} style={{ backgroundColor: "transparent" }} />
              <Card.Body>
                <Card.Title style={{ fontSize: "18px" }}>
                  <strong>
                    {element.title}
                  </strong>
                </Card.Title>
                <Card.Text style={{ height: "130px", paddingTop: "5px" }}>
                  {element.text}
                </Card.Text>
                <Card.Footer style={{ height: "150px", backgroundColor: "transparent", border: 'none' }} >
                  {this.renderBotton(element.link, element.title)}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </>
    ));
    return cardElements;
  }

  renderBotton(link, title) {
    return link ? (
      <LinkContainer to={`${link}/${title}`}>
        <a
          href={link}
          className="btn btn-dark" >
          Detalles
        </a>
      </LinkContainer>
    ) : (
      <div></div>
    );
  }
}
export default Gallery;
