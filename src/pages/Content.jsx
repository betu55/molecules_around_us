// import img from "../Assets/Images/CPS Lab 03.png";

export function Content() {
  return (
    <div className="font-mono h-full w-full">
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
          <p className="my-1 text-slate-300 text-xl md:text-2xl text-center md:text-left">
            C<sub>6</sub>H<sub>14</sub>O<sub>6</sub>
          </p>
        </div>
      </div>
      <div className="h-full grid grid-rows-6 2xl:grid-rows-5 content mx-4 md:mx-12">
        <div className="row-span-5 lg:row-span-3 text grid grid lg:grid-cols-11 mt-8 ">
          <div className="hidden 2xl:block 2xl:col-span-2 text-justify mr-6">
            This is Mannitol also known as Osmitrol, Mannite, Osmofundin etc.
          </div>
          <div className="lg:col-span-7 md:w-5/6 lg:w-full border border-slate-400">
            <iframe
              src="https://app.vectary.com/p/2EpMpaVJAEmMqlZH127ydQ"
              frameborder="0"
              width="100%"
              height="100%"
              title="3D-Model"
            ></iframe>
          </div>
          <div className="lg:col-span-3 2xl:col-span-2 lg:ml-6 lg:mt-0 mt-4">
            CAS Number: 69-65-8 <br /> Cost for 100g: CA$34.40
          </div>
        </div>
        <div className="row-span-1 text">fo</div>
      </div>
    </div>
  );
}
