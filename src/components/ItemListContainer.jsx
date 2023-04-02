import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemListContainer = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(docs);
    });
  }, []);

  const catFilterCategory = products.filter(
    (product) => product.category === category
  );
  const catFilterSubCategory = products.filter(
    (product) => product.subcategory === subcategory
  );

  function render() {
    if (subcategory) {
      return <ItemList product={catFilterSubCategory} />;
    } else {
      return category ? (
        <ItemList product={catFilterCategory} />
      ) : (
        <ItemList product={products} />
      );
    }
  }

 

  function link_routes() {
    if (category != null) {
      return "Categorías> "
    }   else {
      return <h2 className="h1 text-center my-4" id="catalogo_text">Catálogo</h2>;
    }
  }

  return (
    <>
    
      <Container>
       <Row>
          <Col>
            {link_routes()}
            {({category}) ? <Link>{category}{subcategory}</Link>:{}}
          </Col>
        </Row>
      </Container>
      <Container>
        <div color="black"></div>
        {render()}
      </Container>
    </>
  );
};

export default ItemListContainer;
