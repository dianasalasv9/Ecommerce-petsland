import dogintro from "../assets/dogintro.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
            <img className="mx-auto" src={dogintro} width={500}/>
        </Col>
      </Row>
    </Container>

  )
}

export default Welcome