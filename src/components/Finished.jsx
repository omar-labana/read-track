import img from "../assets/finished-illustration.svg";

const Finished = () => {
    return (
        <section className="relative bg-browny max-w-5xl mx-auto h-auto rounded-3xl my-20 p-10 ">
          <h2 className="text-browny-dark text-4xl font-bold">Finished Reading</h2>
          <img
            className="absolute w-56 -bottom-3 right-10"
            src={img}
            alt="reading-illustration"
          />
        </section>
      );
}

export default Finished
