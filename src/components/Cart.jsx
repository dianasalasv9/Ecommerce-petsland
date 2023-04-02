import { Link } from "react-router-dom";
import FormCart from "./CheckOut";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import Button from 'react-bootstrap/Button';
import Brief from "./Brief";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
<Container className="my-5">
  <Row>
    <Col className="text-center">
      <Link to={"/catalogo"}>
      <Button variant="danger">Regresar al catálogo</Button>
      </Link>
      <h3 className="h3">Carrito Vacio</h3>
    </Col>
  </Row>

</Container>          


      </>
    );
  }

  return (
    <Container>
      <Row>
        <Col lg="4"><FormCart/></Col>
        <Col className="my-5" lg="8"><Brief/></Col>
      </Row>
    </Container>
  );
};

export default Cart;
