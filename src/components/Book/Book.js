import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Book.css";

const Book = (props) => {
  //Distructing book object
  const { book_image, book_name, book_writer, book_publisher, book_price } =
    props.book;

  // Render HTML
  return (
    <div className="book">
      <img className="book-image" src={book_image} alt="book_image" />
      <h2>নাম: {book_name}</h2>
      <p>লেখক: {book_writer}</p>
      <p>প্রকাশক: {book_publisher}</p>
      <p>মূল্য: {book_price} টাকা</p>

      {/* Issue Book */}
      <button className="btn-issue" onClick={() => props.issueBook(props.book)}>
        <FontAwesomeIcon icon={faShoppingCart} /> Issue Book
      </button>

      <br />
      <br />

      {/* Open external site */}
      <a target="_blank" href="https://www.rokomari.com/book" rel="noreferrer">
        <FontAwesomeIcon icon={faBook} size="2x" color="#765555" />
      </a>
    </div>
  );
};

export default Book;
