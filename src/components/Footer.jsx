import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FbIcon from "../assets/fb_icon.png";

const Footer = () => {
  return (
    <Container fluid className="bg-warning">
      <div className="py-6">
        <Row>
          <Col>
            <h5>
              <strong>Menú</strong>
            </h5>
            <ul>
              <Link to={`/category/${"Vacunas"}`}>
                <li>
                  <h6>Vacunas</h6>
                </li>
              </Link>
              <Link to={`/category/${"Desparasitantes"}`}>
                <li>
                  <h6>Desparasitaciones</h6>
                </li>
              </Link>
              <Link to={`/category/${"Alimentos"}`}>
                <li>
                  <h6>Alimentos</h6>
                </li>
              </Link>
            </ul>
          </Col>
          <Col>
            <h5>
              <strong>Redes Sociales</strong>
            </h5>
            <img className="fbicon" src={FbIcon} alt="" srcSet="" />
          </Col>
          <Col>
            <h5>Suscríbete a nuestro newsletter</h5>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Suscribirse
              </Button>
              <Form.Control
                aria-label="Correo electrónico"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
