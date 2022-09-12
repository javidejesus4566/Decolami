import { Component } from "react";
import { Image, Container, Card, ListGroup } from 'react-bootstrap'
class ContactPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { paddingTop: "40px", textAlign: "center ", color: "white" }
    }
  }
  componentDidMount() {
    if (this.props.color === "black") {
      this.setState({
        style: { paddingTop: "40px", textAlign: "center ", color: "black" }
      })
    }
  }
  render() {
    return (
      // <div className="contactPanel">
      //   <ul>{this.generateContacts()}</ul>
      // </div>
      <Container style={this.state.style}>
        <ListGroup style={{ backgroundColor: "transparent" }}  >
          {this.generateContacts()}
        </ListGroup>
      </Container>
    );
  }

  generateContacts = () => {
    const links = this.props.contacts.map((contact) => (
      <ListGroup.Item key={contact.alt} style={{ backgroundColor: "transparent", border: "none", padding: "2px" }}>
        <Image
          width="20px"
          height="20px"
          src={contact.img}
          alt={contact.alt}
          href={"#" + contact.alt}
          fluid />
        {contact.description}
      </ListGroup.Item>
      // <div key={contact.alt} className="contact_item">
      //   <img
      //     width="20"
      //     height="20"
      //     className="mr-1"
      //     href={"#" + contact.alt}
      //     alt={contact.alt}
      //     src={contact.img}
      //   />
      //   <div>{contact.description}</div>
      // </div>
    ));
    return links;
  };
}

export default ContactPanel;
