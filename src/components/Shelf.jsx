import Book from "./Book";
const Shelf = ({ name, books, loading }) => {
  return (
    <>
      <ul className="max-w-5xl mx-auto rounded-3xl p-10 grid grid-cols-3 justify-items-center">
        {books.map((book) => (
          <Book book={book} key={book.title} />
        ))}
      </ul>
    </>
  );
};

export default Shelf;
