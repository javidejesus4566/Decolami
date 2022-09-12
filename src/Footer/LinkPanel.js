import { Component } from "react";
import { Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";
class LinkPanel extends Component {
  render() {
    return (
      <div className="linkPanel" style={{ textAlign: "center" }}>
        <h6 className="link_title">{this.props.title}</h6>
        <ul className="mr-5" >{this.generateLinks()}</ul>
      </div>
    );
  }

  generateLinks = () => {
    const links = this.props.links.map((link) => (
      <li key={link.path} className="link_list" >
        <LinkContainer to={link.path} style={{ textAlign: "center" }} >
          <a href={link.path} >{link.name}</a>
        </LinkContainer>
      </li>
    ));
    return links;
  };
}

export default LinkPanel;
