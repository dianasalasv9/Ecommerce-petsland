import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, id, price, name }) => {
  const [count, setCount] = useState(1);
  const addQty = () => {
    setCount(count + 1);
  };
  const substractQty = () => {
    setCount(count - 1);
  };
    
  return (
    <div>
        {count <= 1 ? (
            <Button variant="primary" disabled>-</Button>
        ) : (
          <Button variant="primary" onClick={substractQty}>-</Button>
        )}

          <Button
            onClick={() => addToCart()}
            variant="secondary"
          >
            Add to cart: {count}
          </Button>

          {count < stock ? (
          <Button variant="primary" onClick={addQty}>+</Button>
        ) : (
          <Button variant="primary"disabled>+</Button>
        )}
        
      
    </div>
  )
}

export default ItemCount