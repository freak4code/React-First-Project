import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import IssuedBook from "../IssuedBook/IssuedBook";
import "./Library.css";

const Library = () => {
  // Books state variable
  const [books, setBooks] = useState([]);

  // Issued Books state variable
  const [issuedBooks, setIssuedBooks] = useState([]);

  // Load Books
  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Add issued books
  const issueBook = (book) => {

      // Check if book already issued
    if (issuedBooks.find((issuedBook) => issuedBook.id === book.id) == null) {
      const newIssuedBooks = [...issuedBooks, book];
      setIssuedBooks(newIssuedBooks);
    }
  };

  // Render HTML
  return (
    <div>
      <div className="library-container">
        <div className="books-container">
          {/*  Maping single book from list. Listen for event listener */}

          {books.map((book) => (
            <Book key={book.id} book={book} issueBook={issueBook}></Book>
          ))}
        </div>

        <div className="issue-container">
          <IssuedBook issuedBooks={issuedBooks}></IssuedBook>
        </div>
      </div>
    </div>
  );
};

export default Library;
