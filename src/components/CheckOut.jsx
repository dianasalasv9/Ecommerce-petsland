import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

const FormCart = () => {
  const [orderId, setOrderId] = useState(null);
  const [nombre, setName] = useState("");
  const [apellido, setSurname] = useState("");
  const [mail, setEmail] = useState("");
  const db = getFirestore();
  const { cart, cleanCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
    setTimeout(() => {
      navigate("/thankyou", { replace: true });
      cleanCart();
    }, 3500);
  };

  const order = {
    nombre,
    apellido,
    mail,
    cart,
  };
  const orderCollection = collection(db, "orden");

  return (
    <div className="my-5">
      <div className="border-1 p-3">
        <form onSubmit={handleSubmit}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
          />
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Apellido"
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Button
            className="w-100"
            variant="success"
            id="confirm"
            type="submit"
          >
            Confirmar Compra
          </Button>
        </form>
      </div>
      <p className="h2"># de orden: {orderId}</p>
    </div>
  );
};

export default FormCart;
