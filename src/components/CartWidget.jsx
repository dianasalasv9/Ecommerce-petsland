import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = ({}) => {
  const { cartQty } = useContext(CartContext);

  return (
    <>       
    <div>
            <i><FontAwesomeIcon icon={faCartShopping} fontSize={40} fade/></i>
            <p className="numeroItems">{cartQty}</p>
    </div>
    </>
  )
}

export default CartWidget