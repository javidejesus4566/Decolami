
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

const decoRouteHeader = (props) => {
  return (
    <LinkContainer to={props.path}>
      <Nav.Link ><b>{props.text}</b></Nav.Link>
    </LinkContainer>
  );
};

export default decoRouteHeader;
