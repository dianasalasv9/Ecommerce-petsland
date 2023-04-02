import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Brief = () => {
    const { cart, totalAmount, removeProduct } = useContext(CartContext);

    function currencyFormat(num) {
        return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

  return (
    <>
    {cart.map((item) => {
        return (
            <Container key={item.id} className="">
              <Row className="border-1">
                <Col className="d-flex justify-content-center align-items-center" lg="3">
                  <img className="img-fluid" src={item.image} alt="" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center" lg="3">
                  <h5>{item.name}</h5>
                </Col>
                <Col className="mt-5" lg="3">
                  <h5><strong>Cantidad:</strong>  {item.quantity}</h5><br/>
                  <h5><strong>Subtotal:</strong>  {currencyFormat(item.price * item.quantity)}.-</h5>
                </Col>
                <Col className="d-flex justify-content-center align-items-center" lg="3">
                  <Button className="bg-danger rounded-circle" onClick={() => removeProduct(item.id)}>X</Button>
                </Col>                                                
              </Row>

          </Container>
        );
    })}
    <div className="text-right">
      <h1 className="h1 text-right">Total: {currencyFormat(totalAmount)}</h1>
    </div>
    </>
  )
}

export default Brief