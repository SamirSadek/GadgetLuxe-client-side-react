const Banner = () => {
  return (
    <div
      className="hero h-[60vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/nfS0ccK/4330641-19018-min.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">Tech Dreams Come True</h1>
          <p className="mb-5">
          Embrace the Future of Technology. Uncover the Best in Electronics and Gadgets. Welcome to a World of Quality and Innovation. Start Your Journey Here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
