import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom"

const Item = ({ id, name, price, description_short, image }) => {
  return (
      <Card className="mx-2 mb-3" key={id} style={{ width: '30%' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description_short} <br></br>{price}
          </Card.Text>
          <Button as={Link} to={`/item/${id}`} variant="primary">Details</Button>
        </Card.Body>
      </Card>
    )
}

export default Item