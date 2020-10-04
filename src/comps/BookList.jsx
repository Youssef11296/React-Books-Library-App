import React, { useContext, useEffect } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";
import db from "../firebase/Config";

const BookList = () => {
  const [books, setBooks] = useContext(BookContext);

  useEffect(() => {
    db.collection("books")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBooks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="books__container">
      {books.map((book) => (
        <Book key={book.id} id={book.id} book={book.data} />
      ))}
    </div>
  );
};

export default BookList;
