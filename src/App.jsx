import React from "react";
import "./App.css";
import Nav from "./comps/Nav";
import BookList from "./comps/BookList";
import { BookProvider } from "./context/BookContext";
import Form from "./comps/Form";
import db from "./firebase/Config";

function App() {
  return (
    <BookProvider>
      <div className="app">
        <Nav />
        <Form />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
