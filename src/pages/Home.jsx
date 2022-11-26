import bgVid from "../Assets/Videos/bg.mp4";
import "../App.css";

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
        <div className="content mx-4 md:mx-12 pt-10 row-span-6 ">
          <div className="text-4xl text-slate-300 text-center md:text-left md:text-5xl ">
            <a
              href="/"
              className="font-bold hover:text-red-600 hover:animate-pulse"
            >
              D-Mannitol
            </a>
          </div>
          <div>
            <p className="my-1 text-slate-300 text-lg md:text-xl text-center md:text-left">
              Welcome to the site!
            </p>
          </div>
          <div className="mt-4 hidden lg:block text-slate-300 md:text-lg text-center md:text-left">
            This is a simple web based experience of the chemical compound
            commercialy known as D-Mannitol.
          </div>
          <div className="visible lg:invisible text my-6">
            <div className="mb-1 text-center md:text-left">⚠️ Disclaimer</div>
            For a better experience it is reccomended that you visit this
            website from a larger device, preferably a{" "}
            <p className="inline font-bold">laptop</p> or a{" "}
            <p className="inline font-bold">desktop </p>
            computer. And a resolution of more than 1024 pixels in width.
            <p className="my-6 text-justify">
              But since this website was designed for responsiveness across most
              devices, it is also possible to proceed with curtrent setup.
            </p>
          </div>
        </div>
        <div className="content lg:mt-10 mt-14 md:mx-12 row-span-2 text-center md:text-left lg:text-right">
          <a href="/content" className="button">
            Start>>>
          </a>
        </div>
      </div>
    </div>
  );
}
