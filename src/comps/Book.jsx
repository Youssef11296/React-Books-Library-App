import { Button, Card, CardContent, Modal } from "@material-ui/core";
import React, { useState } from "react";
import "./Book.css";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import db from "../firebase/Config";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Book = (props) => {
  // The States
  const classes = useStyles;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [price, setPrice] = useState("");

  // Funtions
  const handleUpdate = (e) => {
    e.preventDefault();
    // Checking The Validation Of The Book Name & Price
    if (!isNaN(price) && price > 0) {
      if (!isNaN(input)) {
        prompt(
          "Name can't be a number, Try to enter it as a number between double qoutation"
        );
      } else {
        // Update The Book Name & Price
        db.collection("books").doc(props.id).set(
          {
            name: input,
            price: price,
          },
          { merge: true }
        );
      }
    } else {
      prompt("Price must be a positive number");
    }

    // Empty The Whole State
    setInput("");
    setPrice("");
    setOpen(false);
  };
  const handleDelete = () => {
    db.collection("books").doc(props.id).delete();
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form className={`${classes.paper} form__control form__modal`}>
          <input
            type="text"
            placeholder={props.book.name}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder={props.book.price}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </form>
      </Modal>
      <Card className="book__item">
        <CardContent>
          <div className="book__name">{props.book.name}</div>
          <div className="book__price">{props.book.price}$</div>
        </CardContent>
        <div className="btns__container">
          <DeleteIcon className="book__delete" onClick={handleDelete} />
          <UpdateIcon className="book__update" onClick={() => setOpen(true)} />
        </div>
      </Card>
    </>
  );
};

export default Book;
