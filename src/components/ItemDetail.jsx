import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemDetail = ({ data }) => {
  const { id } = useParams();
  const { addItem } = useContext(CartContext);
  const [product, setProduct] = useState([]);

  function currencyFormat(num) {
    return "$" + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "productos", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      const doc = snapshot.data();
      console.log(doc);
      setProduct(doc);
    });
  }, []);

  const dataFilter = data.filter((dato) => dato.id == id);

  const onAdd = (quantity, id) => {
    addItem(quantity, id);
  };

  return (
    <>
      {dataFilter.map((dato) => (
        <div key={dato.id}>
          <Container>
            <Row>
              <Col lg="6">
                <img className="img-fluid" src={dato.image} alt="" />
              </Col>
              <Col lg="6">
                <h4 className="h2 mt-10">{dato.name}</h4>
                <p className="p">{dato.description_short}</p>
                <p>{currencyFormat(dato.price)}</p>
                <h3 className="h3"></h3>
                <ItemCount stock={dato.stock} onAdd={onAdd} id={dato.id} />
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
