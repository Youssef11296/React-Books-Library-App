import React, { useContext } from "react";
import "./Nav.css";
import { BookContext } from "../context/BookContext";

const Nav = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <header>
      <nav>
        <a href="#" className="logo">
          Books
        </a>
        <div className="nav__number">You Read: {`${books.length} Books`}</div>
      </nav>
    </header>
  );
};

export default Nav;
