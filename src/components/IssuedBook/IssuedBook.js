import React from "react";
import "./IssuedBook.css";

const IssuedBook = (props) => {
  // Distructing object
  const { issuedBooks } = props;

  // Total cost by reduce
  const totalCost = issuedBooks.reduce(
    (total, currentBook) => total + currentBook.book_price,
    0
  );

   // Render HTML
  return (
    <div className="issued-books">
      <h1>Issued Books</h1>
      <h3>
        Total issued: <span className="number-text">{issuedBooks.length}</span>{" "}
      </h3>
      <h3>
        Total cost: <span className="number-text">{totalCost} Taka</span>
      </h3>
      <hr></hr>
      <div>
        {/*  Maping single book name from list. */}
        {issuedBooks.map((book) => (
          <p className="book-name">{book.book_name}</p>
        ))}
      </div>
    </div>
  );
};

export default IssuedBook;
