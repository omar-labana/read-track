import search from "../assets/search.svg";
import home from "../assets/home.svg";
import { Link } from "react-router-dom";

const Search = ({ query, setQuery }) => {
  return (
    <header className="flex flex-col gap-3 bg-browny max-w-5xl mx-auto rounded-3xl mt-20 p-10 relative">
      <h1 className="text-browny-dark text-6xl font-bold z-10">
        Search Book Tags
      </h1>
      <p className="text-browny-dark text-3xl font-bold w-3/4 z-10">
        You can search a list of book tags to show a list of books that matches
        your search term.
      </p>
      <input
        className="w-full p-5 outline-none rounded-2xl my-4 text-2xl z-10"
        type="text"
        name="search"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Term"
      />
      
      <Link
        to={"/"}
        className="py-3 px-5 bg-browny-dark rounded-2xl my-4 text-2xl w-fit text-browny font-bold"
      >
        <img className="inline w-10 my-au" src={home} alt="Home" /> Go back
      </Link>
      <img
        className="absolute w-2/4 bottom-6 right-2"
        src={search}
        alt="search"
      />
    </header>
  );
};

export default Search;
