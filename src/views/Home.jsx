import Finished from "../components/Finished";
import Hero from "../components/Hero";
import Reading from "../components/Reading";
import Whishlist from "../components/Whishlist";
import Shelf from "../components/Shelf";

import * as BooksAPI from "../services";
import { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState({
    reading: [],
    whishlist: [],
    finished: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setLoading(true);
        const reading = books.filter(
          (book) => book.shelf === "currentlyReading"
        );
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const read = books.filter((book) => book.shelf === "read");
        setBooks(() => ({
          reading: reading,
          whishlist: wantToRead,
          finished: read,
        }));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [BooksAPI.getAll]);
  return (
    <>
      <Hero />
      <Reading />
      {!loading && <Shelf name="Currently Reading" books={books.reading} />}
      {loading && <p className="text-center w-full text-3xl">Loading...</p>}
      <Whishlist />
      {!loading && <Shelf name="Want to Read" books={books.whishlist} />}
      {loading && <p className="text-center w-full text-3xl">Loading...</p>}
      <Finished />
      {!loading && <Shelf name="Finished Reading" books={books.finished} />}
      {loading && <p className="text-center w-full text-3xl">Loading...</p>}
    </>
  );
};

export default Home;
