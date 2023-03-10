import React from 'react'
import Item from "./Item";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({product}) => {
  return (
      <Row>
      {product.map((product) => (
              <Item
                key={product.id}
                id={product.id}
                name={product.name}
                description_short={product.description_short}
                price={product.price}
                stock={product.stock}
                category={product.category}
                image={product.image}
              />
            )
          )
        }        
      </Row>
    
  )
}

export default ItemList