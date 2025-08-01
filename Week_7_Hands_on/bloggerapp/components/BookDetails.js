import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: 'Master React', price: 670 },
    { id: 2, title: 'Deep Dive Into Angular 11', price: 800 },
    { id: 3, title: 'Mongo Essentials', price: 450 }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
