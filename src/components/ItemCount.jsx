import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const ItemCount = ({ stock, onAdd, id }) => {
  const [quanti, setQuanti] = useState(1);

  const addQty = () => {
    setQuanti(quanti + 1);
  };

  const removeQty = () => {
    setQuanti(quanti - 1);
  };

  return (
    <div className="item_count_main">
      <div>
        {quanti <= 1 ? (
            <Button className="bg-secondary" value="-">-</Button>
        ) : (
          <Button className="bg-danger" onClick={removeQty}>-</Button>
        )}
        <div>
          <Button
            onClick={() => onAdd(quanti, id)}
            variant="primary">
            Agregar al Carrito: {quanti}
          </Button>
        </div>
        {quanti < stock ? (
          <Button className="bg-success" onClick={addQty}>+</Button>
        ) : (
          <div>
            <Button className="bg-secondary">+</Button>
            <Badge className="text-dark bg-alert">Sin inventario</Badge>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
