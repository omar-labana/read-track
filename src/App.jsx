import * as BooksAPI from "./services";
import Book from "./components/Book";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
const App = () => {
  // const [books, setBooks] = useState([]);
  // const [query, setQuery] = useState("android");
  // useEffect(() => {
  //   BooksAPI.search(query)
  //     .then((books) => {
  //       setBooks(books);
  //       // console.log(books, query);
  //     })
  //     .catch((err) => {
  //       setBooks([]);
  //       console.log(err);
  //     });
  // }, [query]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
