import Finished from "../components/Finished";
import Hero from "../components/Hero";
import Reading from "../components/Reading";
import Whishlist from "../components/Whishlist";
import Shelf from "../components/Shelf";
import add from "../assets/add.svg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ getAll, update }) => {
  const [books, setBooks] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    getAll()
      .then((books) => {
        setLoading(true);
        const reading = books.filter(
          (book) => book.shelf === "currentlyReading"
        );
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const read = books.filter((book) => book.shelf === "read");
        setBooks(() => ({
          currentlyReading: reading,
          wantToRead: wantToRead,
          read: read,
        }));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  const handleClick = (book, shelf) => {
    update(book, shelf)
      .then(() => {
        if (shelf !== "none") {
          setBooks((previousBooks) => {
            const oldShelf = book.shelf;
            const updatedOldShelf = books[book.shelf].filter(
              (b) => b.id !== book.id
            );
            book.shelf = shelf;
            const updatedNewShelf = [...books[shelf], book];
            return {
              ...previousBooks,
              [oldShelf]: updatedOldShelf,
              [shelf]: updatedNewShelf,
            };
          });
        } else {
          setBooks((previousBooks) => ({
            ...previousBooks,
            [book.shelf]: books[book.shelf].filter((b) => b.id !== book.id),
          }));
        }
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <>
      <Hero />
      <Reading />
      {!loading && (
        <Shelf
          name="Currently Reading"
          books={books.currentlyReading}
          handleClick={handleClick}
        />
      )}
      {loading && <p className="text-center w-full text-3xl">Loading...</p>}
      <Whishlist />
      {!loading && (
        <Shelf
          name="Want to Read"
          books={books.wantToRead}
          handleClick={handleClick}
        />
      )}
      {loading && <p className="text-center w-full text-3xl">Loading...</p>}
      <Finished />
      {!loading && (
        <Shelf
          name="Finished Reading"
          books={books.read}
          handleClick={handleClick}
        />
      )}
      {loading && <p className="text-center w-full text-3xl">Loading...</p>}
      <Link
        to="/search"
        className="fixed p-3 bottom-10 right-10  text-browny bg-browny-dark rounded-full"
      >
        <img src={add} alt="add" className="w-10" />
      </Link>
    </>
  );
};

export default Home;
