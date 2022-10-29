import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// variabile
const books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "J. K. Rowling",
    bookImage:
      "https://m.media-amazon.com/images/I/41mo3-FGjXL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    price: 38.98,
  },
  {
    id: 2,
    title: "Billy Summer",
    author: "Stephen King",
    bookImage:
      "https://nemira.ro/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/t/stephen-king---billy-summers---coperta-fata---c1---color.jpg",
    price: 15,
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}
const Book = ({ title, author, bookImage, price }) => {
  const clickHandler = () => {
    alert("yo");
  };
  const getPrice = (price) => {
    console.log(price);
  };

  return (
    <div
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={bookImage} alt=""></img>
      <h1>{title}</h1>
      <h1>{author}</h1>
      <h1>{price}$</h1>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
      <button onClick={() => getPrice(price)}>Get Title</button>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
