import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";

const Item = ({ id, name, description_short, price, image }) => {

  function currencyFormat(num) {
    return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

  return (
      <Col className="col-lg-4 mx-auto mb-3" key={id}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description_short}
            </Card.Text>
            <Card.Text>
              {currencyFormat(1*price)}.
            </Card.Text>            
            <Link to={`/item/${id}`}>
              <Button variant="success">Ver más</Button>
            </Link>            
          </Card.Body>
        </Card>
      </Col>
  );
};

export default Item;
