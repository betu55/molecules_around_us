import img from "../Assets/Images/formula1.png";
let main_paragraph =
  "Mannitol is an osmotic diuretic that is metabolically inert in humans and occurs naturally, as a sugar or sugar alcohol, in fruits and vegetables. Mannitol elevates blood plasma osmolality, resulting in enhanced flow of water from tissues, including the brain and cerebrospinal fluid, into interstitial fluid and plasma.";

let icon = "->";

const info = (key, val) => {
  return (
    <div>
      {key}: <p className="text-red-400 inline">{val}</p>
    </div>
  );
};

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
      <div className="block 2xl:hidden 2xl:row-span-1 text mt-6 mx-4 md:mx-12">
        {main_paragraph}
      </div>
      <div className="h-full grid grid-rows-7 2xl:grid-rows-5 content mx-4 md:mx-12">
        <div className="row-span-5 lg:row-span-3 text grid grid lg:grid-cols-11  mt-8 ">
          <div className="hidden 2xl:block 2xl:col-span-2 mr-6">
            {main_paragraph}
          </div>
          <div className="row-span-6 lg-row-span-2 lg:col-span-7 md:w-5/6 lg:w-full border-2 border-slate-400">
            <iframe
              src="https://app.vectary.com/p/2EpMpaVJAEmMqlZH127ydQ"
              frameborder="0"
              width="100%"
              height="100%"
              title="3D-Model"
            ></iframe>
          </div>
          <div className="h-fit lg:col-span-4 2xl:col-span-2 lg:ml-6 lg:mt-0 mt-4">
            {info("CAS Number", "69-65-8")}
            {info("Cost for 100g", "CA$34.40")}
            <div>
              Molecular Formula:{" "}
              <div className="text-red-400 inline">
                C<sub>6</sub>H<sub>14</sub>O<sub>6</sub>
              </div>
            </div>
            {info("M.P.(°C)", "166-170°C")}
            {info("B.P.(°C)", "290-295°C @ 3.5 mmHG")}
            <div>
              Density (g/cm<sup>3</sup>):{" "}
              <div className="text-red-400 inline">
                1.52 g/cm<sup>3</sup> @ room temperature
              </div>
            </div>
          </div>
        </div>
        <div className="lg:row-span-1 text-2xl text-slate-300 text-justify md:text-left md:mt-16">
          Physical Description
          <div className="text2 mt-4">
            <div className="inline text-red-400">{icon} </div>
            D-mannitol appears as an odorless white crystalline powder or
            free-flowing granules.
          </div>
          <div className="text2 mt-2">
            <div className="inline text-red-400">{icon} </div>
            Has a sweet taste.
          </div>
          <div className="text2 mt-2">
            <div className="inline text-red-400">{icon} </div>
            White odorless solid
          </div>
          <div className="text2 mt-2">
            <div className="inline text-red-400">{icon} </div>
            Flash Point greather than 300°F (National Toxicology Program, 1992)
          </div>
          <div className="text2 mt-2">
            <div className="inline text-red-400">{icon} </div>
            Solubility is 100mg/mL at 68°F (National Toxicology Program, 1992)
          </div>
        </div>
      </div>
      <div className="content mx-4 md:mx-12">
        <div className="mt-4">
          <div className="text-2xl text-slate-300">Structural Formula:</div>
          <div className="mt-4 lg:ml-8">
            <img
              src={img}
              alt="Structural formula"
              className="bg-white w-2/3 lg:w-3/5 xl:w-1/3"
            />
          </div>
        </div>
      </div>
      <div className="content mx-4 md:mx-12 mt-16 pb-8">
        <div className="mt-4">
          <div className="text-2xl text-slate-300">Medical Information</div>
          <div className="mt-4 lg:ml-8 text2">
            <div className="inline text-red-400">{icon} </div>
            Used for the promotion of diuresis before irreversible renal failure
            becomes established, the reduction of intracranial pressure, the
            treatment of cerebral edema, and the promotion of urinary excretion
            of toxic substances. Mannitol is also indicated as add-on
            maintenance therapy for improving pulmonary function in cystic
            fibrosis patients aged 18 and over who have passed the BRONCHITOL
            tolerance test (BTT).
          </div>
        </div>
      </div>
    </div>
  );
}
