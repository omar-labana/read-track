import Results from "../components/Results";
import SearchCard from "../components/SearchCard";
import { useState, useEffect } from "react";
import Shelf from "../components/Shelf";
import home from "../assets/home.svg";
import { Link } from "react-router-dom";

const Search = ({ search, update, getAll }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      search(query.trim())
        .then((books) => {
          if (books.error) {
            setBooks([]);
          } else {
            getAll().then((ids) => {
              books.map((b) => {
                const index = ids.findIndex((e) => e.id === b.id);
                if (index >= 0) {
                  b.shelf = ids[ids.findIndex((e) => (e.id === b.id))].shelf;
                } else {
                  b.shelf = "none";
                }
              });
              setBooks(books);
              setLoading(false);
            });
          }
        })
        .catch(() => {
          setBooks([]);
          setLoading(false);
        });
    } else {
      setBooks([]);
      setLoading(false);
    }
  }, [query]);

  const handleClick = (book, shelf) => {
    update(book, shelf).catch((err) => {
      setError(err);
    });
  };

  return (
    <>
      <SearchCard query={query} setQuery={setQuery} />
      <Results />
      {loading && <p className="text-center w-full text-3xl">Loading...</p>}
      {!loading && (
        <Shelf name="Search Results" books={books} handleClick={handleClick} />
      )}
      <Link
        to="/"
        className="fixed p-3 bottom-10 right-10  text-browny bg-browny-dark rounded-full"
      >
        <img src={home} alt="add" className="w-10" />
      </Link>
    </>
  );
};

export default Search;
