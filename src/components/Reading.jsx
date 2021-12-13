import img from "../assets/reading-illustration.svg";

const Reading = () => {
  return (
    <section className="relative bg-browny max-w-5xl mx-auto h-auto rounded-3xl my-28 p-10 ">
      <h2 className="text-browny-dark text-4xl font-bold">Currently Reading</h2>
      <img
        className="absolute w-56 -top-12 right-10"
        src={img}
        alt="reading-illustration"
      />
    </section>
  );
};

export default Reading;
