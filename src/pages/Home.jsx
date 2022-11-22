import bgVid from "../Assets/Videos/bg.mp4";

export function Home() {
  return (
    <div className="font-mono">
      <video
        className="video invisible lg:visible"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVid} />
      </video>
      <div className="content mx-8 md:mx-20 pt-10">
        <div className="text-4xl text-white text-center md:text-left md:text-5xl">
          <a href="/" className="font-bold hover:text-red-600">
            D-Mannitol
          </a>
        </div>
        <div>
          <p className="my-2 text-white text-lg md:text-xl text-center md:text-left">
            Welcome to the site!
          </p>
        </div>
        <div className="visible lg:invisible text-white text-center text-justify md:text-left text-lg my-8">
          For a better experience it is reccomended that you visit this website
          from a larger device, preferably a{" "}
          <p className="inline font-bold">laptop</p> or a{" "}
          <p className="inline font-bold">desktop </p>
          computer.
        </div>
      </div>
    </div>
  );
}
