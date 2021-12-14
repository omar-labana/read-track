import Book from "./Book";
const Shelf = ({ name, books, handleClick }) => {
  return (
    <>
      {!books.length ? (
        <p className="text-3xl bold max-w-5xl mx-auto pl-10">
          Sorry, no books found on the {name} shelf.
        </p>
      ) : (
        <ul className="max-w-5xl mx-auto rounded-3xl p-10 grid grid-cols-3 justify-items-center">
          {books.map((book) => (
            <Book book={book} key={book.id} handleClick={handleClick} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Shelf;
