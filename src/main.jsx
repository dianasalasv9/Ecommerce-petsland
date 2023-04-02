import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBw52t8XpnCPVXzIWeCBo_X23i5saJGBVs",
  authDomain: "my-ecommerce9.firebaseapp.com",
  projectId: "my-ecommerce9",
  storageBucket: "my-ecommerce9.appspot.com",
  messagingSenderId: "347608703288",
  appId: "1:347608703288:web:0302fb1d0d67000333a1cd"
};

  initializeApp(firebaseConfig);
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
