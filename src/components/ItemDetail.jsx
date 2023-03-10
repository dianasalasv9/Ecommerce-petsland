import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const { id } = useParams();
  const dataFilter = data.filter((dato) => dato.id == id);  
  
  return (
    <>
      {dataFilter.map((dato) => (
        <Card className="m-auto mt-5" key={dato.id} style={{ width: '33%' }}>
          <Card.Img variant="top" src={dato.image} />
          <Card.Body>
            <Card.Title>{dato.name}</Card.Title>
            <Card.Text>
              {dato.description} <br></br>{dato.price}<br></br>{dato.stock}<br></br>
              <ItemCount
                        stock={dato.stock}
                        id={dato.id}
                        price={dato.price}
                        name={dato.name}
                        />
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default ItemDetail