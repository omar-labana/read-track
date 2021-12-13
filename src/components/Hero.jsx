import { Link } from "react-router-dom";
import img from "../assets/hero-illustration.svg";
const Hero = () => {
  return (
    <header className="flex justify-between bg-browny max-w-5xl mx-auto rounded-3xl mt-20 p-10">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-browny-dark text-6xl font-bold">Read Tracer</h1>
          <p className="text-browny-dark text-xl my-5 font-semibold">
            Search and browse a collection of books and add them to your
            library. You can trace the progress of each book and add books to a
            want to read list.{" "}
          </p>
        </div>

        <Link
          to="/search"
          className="bg-browny-dark text-browny py-5 px-10 text-2xl rounded-xl w-fit"
        >
          Search Books
        </Link>
      </div>
      <img className="w-96" src={img} alt="hero-illustration" />
    </header>
  );
};

export default Hero;
