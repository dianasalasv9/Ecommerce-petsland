import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Petsland"}/>
    </>
  );
};

export default App;
