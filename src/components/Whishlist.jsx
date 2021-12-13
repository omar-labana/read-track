import img from "../assets/whishlist-illustration.svg";

const Whishlist = () => {
    return (
        <section className="relative bg-browny max-w-5xl mx-auto h-auto rounded-3xl my-28 p-10 ">
          <h2 className="text-browny-dark text-4xl font-bold">Want to Read</h2>
          <img
            className="absolute w-56 -bottom-3 right-10"
            src={img}
            alt="reading-illustration"
          />
        </section>
      );
}

export default Whishlist
