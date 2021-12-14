import result from "../assets/results.svg";

const Results = () => {
  return (
    <section className="relative bg-browny max-w-5xl mx-auto h-auto rounded-3xl my-10 p-10 ">
      <h2 className="text-browny-dark text-4xl font-bold">Search Results</h2>
      <img
        className="absolute w-56 -bottom-2 -right-10"
        src={result}
        alt="result-illustration"
      />
    </section>
  );
};

export default Results;
