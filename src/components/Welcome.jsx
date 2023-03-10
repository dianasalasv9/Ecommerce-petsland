import petshop from "../assets/petshop.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";



const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <img id="petshop" src={petshop} className="img-fluid " />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
