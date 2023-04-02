import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ItemList = ({product}) => {
  return (
    <>
        <Container className="mb-5">
          <Row>
            {product.map((product) => (
              <Item
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              category={product.category}
              image={product.image}
              />
              ))}
          </Row>
        </Container>
    </>    
  );
};

export default ItemList
  