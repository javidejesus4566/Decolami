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
        <Col md={6} lg={6} sm={6} xs={6} id="Area"  >
          <Container >
            <Card key={element.id} style={{ width: '10rem', border: '0px', paddingRight: "8px", paddingLeft: "5px", backgroundColor: "transparent" }} mt>
              <Card.Img variant="top" height={130} width={50} src={element.img} style={{ backgroundColor: "transparent" }} />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>
                  <strong>
                    {element.title}
                  </strong>
                </Card.Title>
                <Card.Text style={{ height: "110px", width: "130px", fontSize: "11px", paddingTop: "5px", paddingRight: "3px" }}>
                  {element.text}
                </Card.Text>
                <Card.Footer style={{ height: "80px", backgroundColor: "transparent", border: 'none', justifyContent: 'Left', alignItems: 'Left', alignContent: 'flex-start' }} >
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
