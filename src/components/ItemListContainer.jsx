import React from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from "../data.json";
import ItemList from "./ItemList";


const ItemListContainer = () => {
  const { category } = useParams();
  const productFilter = Data.filter((product) => product.category === category);
  console.log(productFilter);

  return (
    <Container>
      <Row>
        <Col>
        { !category ? <h2>Catálogo</h2> : <h2>{`${category}`}</h2> }

        </Col>
      </Row>

      <Row>
        {category ? <ItemList product={productFilter} /> : <ItemList product={Data} /> }
      </Row>
    </Container>  
    
    
    
  );
};

export default ItemListContainer;
