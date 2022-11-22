import bgVid from "../Assets/Videos/bg.mp4";

export function Home() {
  return (
    <div className="font-mono h-full w-full">
      <video
        className="video invisible lg:visible h-full w-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVid} />
      </video>
      <div className="h-full w-full lg:grid grid-rows-8">
        <div className="content mx-4 md:mx-20 pt-10 row-span-6 ">
          <div className="text-4xl text-slate-300 text-center md:text-left md:text-5xl ">
            <a
              href="/"
              className="font-bold hover:text-red-600 hover:animate-pulse"
            >
              D-Mannitol
            </a>
          </div>
          <div>
            <p className="my-2 text-slate-300 text-lg md:text-xl text-center md:text-left">
              Welcome to the site!
            </p>
          </div>
          <div className="mt-4 hidden lg:block text-slate-300 md:text-lg text-center md:text-left">
            This is a simple web based experience of the chemical compound
            commercialy known as D-Mannitol.
          </div>
          <div className="visible lg:invisible text-slate-300 text-left md:text-left md:text-lg my-6">
            For a better experience it is reccomended that you visit this
            website from a larger device, preferably a{" "}
            <p className="inline font-bold">laptop</p> or a{" "}
            <p className="inline font-bold">desktop </p>
            computer.
            <p className="my-6">
              It is also possible to proceed with curtrent setup.
            </p>
          </div>
        </div>
        <div className="content lg:mt-10 mx-4 md:mx-20 row-span-2">
          <p className="text-slate-300 md:text-lg text-left md:text-left ">
            And this is the second row
          </p>
        </div>
      </div>
    </div>
  );
}
