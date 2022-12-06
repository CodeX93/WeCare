import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import Navbar from "./Navbar";
import "../Component.css";
import IngredientsData from "../IngredientsData";

import "../Component.css";

export default function Ingredient() {
  const [Ingredient, setIngredient] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [Types, setTypes] = useState([]);

  const [quantity, setQuantity] = React.useState(0);
  const [type, setType] = React.useState("");
  const [category, setCatergory] = React.useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios.get(
        "54.249.143.57:3001/inventory/getCategory"
      );
      setCategories(result.data);
      setCatergory(result.data[0].CategoryName);
    };
    const fetchTypes = async () => {
      const result = await axios.get("54.249.143.57:3001/inventory/getType");
      console.log(result.data);
      setTypes(result.data);
      setType(result.data[0].TypeName);
    };
    // const fetchData = async () => {
    //   const result = await axios.get("54.249.143.57:3001/ingredientdata");
    //   setIngredient(result.data);
    // };
    fetchCategories();
    fetchTypes();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    console.log("clicked");
    console.log(category);
    const sendData = async () => {
      console.log("sending data");
      const obj = {
        Type: type,
        Product: category,
        Quantity: quantity,
      };
      const result = await axios.post(
        "54.249.143.57:3001/inventory/postingredientdata",
        obj
      );
    };
    sendData();
    console.log("Sent data");
  };

  return (
    <div className="ProductManagement ">
      <Navbar />
      <div>
        <h1 className="ComponentHeader mt-4 mb-4 mx-5">
          Manage Your Ingredient
        </h1>
        <div />
        <div className="InputField mx-3">
          <FloatingLabel controlId="floatingSelect" label="Product Category">
            <Form.Select
              aria-label="Floating label select example"
              onChange={(e) => {
                setCatergory(e.target.value);
              }}
            >
              {Categories.map((ing) => (
                <option value={ing.CategoryName}>{ing.CategoryName}</option>
              ))}
            </Form.Select>
          </FloatingLabel>

          <br></br>

          <FloatingLabel controlId="floatingSelect" label="Product Type">
            <Form.Select
              aria-label="Floating label select example"
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              {" "}
              {Types.map((ing) => (
                <option value={ing.TypeName}>{ing.TypeName}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <br></br>

          <br></br>

          <FloatingLabel label="Quantity">
            <Form.Control
              required
              type="number"
              maxLength={10}
              id="inputPassword5"
              name="quantity"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </FloatingLabel>
          <br></br>
          <Button variant="outline-success" onClick={handleClick}>
            Add Ingredient
          </Button>
        </div>
      </div>
    </div>
  );
}
