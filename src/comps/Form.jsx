import React, { useState } from "react";
import "./Form.css";
import db from "../firebase/Config";
import firebase from "firebase";
import { Button, FormControl, Input } from "@material-ui/core";

const Form = () => {
  const [input, setInput] = useState("");
  const [price, setPrice] = useState("");

  // Functions
  const addBook = (e) => {
    e.preventDefault();

    // Checking The Validation Of The Book Name & Price
    if (!isNaN(price) && price > 0) {
      if (!isNaN(input)) {
        prompt(
          "Name can't be a number, Try to enter it as a number between double qoutation"
        );
      } else {
        db.collection("books").add({
          name: input,
          price: price,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    } else {
      prompt("Price must be a positive number");
    }

    // Set The Book Name & Price To Empty
    setInput("");
    setPrice("");
  };

  return (
    <form>
      <FormControl className="form__control">
        <Input
          className="form__input"
          type="text"
          placeholder="Enter a new book ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Input
          className="form__input"
          type="text"
          placeholder="Enter a price ..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button
          className="form__button"
          variant="contained"
          color="primary"
          type="submit"
          disabled={!input || !price}
          onClick={addBook}
        >
          Add
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
