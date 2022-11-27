import img from "../Assets/Images/formula1.png";
let main_paragraph =
  "Mannitol is an osmotic diuretic that is metabolically inert in humans and occurs naturally, as a sugar or sugar alcohol, in fruits and vegetables. Mannitol elevates blood plasma osmolality, resulting in enhanced flow of water from tissues, including the brain and cerebrospinal fluid, into interstitial fluid and plasma.";

let icon = "•";

const info = (key, val) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-2 content-between">
      <div className="inline col-span-2 lg:col-span-1 border border-gray-700 pl-2 py-1">
        {key}:{" "}
      </div>
      <p className="text-red-400 inline border border-gray-700 pl-2 py-1">
        {val}
      </p>
    </div>
  );
};

export function Content() {
  return (
    <div className="font-mono h-full w-full">
      <div className="content mx-8 md:mx-12 pt-10 row-span-6 ">
        <div className="text-4xl text-gray-200 text-center md:text-left md:text-5xl ">
          <a
            href="/"
            className="font-bold hover:text-red-600 hover:animate-pulse"
          >
            D-Mannitol
          </a>
        </div>
        <div>
          <p className="my-1 text-gray-200 text-xl md:text-2xl text-center md:text-left">
            C<sub>6</sub>H<sub>14</sub>O<sub>6</sub>
          </p>
        </div>
      </div>
      <div className="block 2xl:hidden 2xl:row-span-1 text mt-6 mx-8 md:mx-12">
        {main_paragraph}
      </div>
      <div className="h-full grid grid-rows-7 2xl:grid-rows-5 content mx-8 md:mx-12">
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
            {info("IUPAC Name", "(2R,3R,4R,5R)-hexane-1,2,3,4,5,6-hexol")}
            {info("CAS Number", "69-65-8")}
            {info("Cost for 100g", "CA$34.40")}
            {info(
              "Molecular Formula",
              <>
                C<sub>6</sub>H<sub>14</sub>O<sub>6</sub>
              </>
            )}
            {info("M.P.(°C)", "166-170°C")}
            {info("B.P.(°C)", "290-295°C @ 3.5 mmHG")}
            {info(
              <>
                Density (g/cm<sup>3</sup>)
              </>,
              <>
                1.52 g/cm<sup>3</sup> @ room temperature
              </>
            )}
          </div>
        </div>
        <div className="lg:row-span-1 text-2xl text-gray-200 text-justify md:text-left md:mt-16">
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
      <div className="content mx-8 md:mx-12">
        <div className="mt-4">
          <div className="text-2xl text-gray-200">Structural Formula:</div>
          <div className="mt-4 lg:ml-8">
            <img
              src={img}
              alt="Structural formula"
              className="bg-white w-2/3 lg:w-3/5 xl:w-1/3"
            />
          </div>
        </div>
      </div>
      <div className="content text2 mx-8 md:mx-12 mt-16 pb-8">
        <div className="text-2xl text-gray-200">Computed Properties</div>
        <div className="mt-4 lg:ml-8">
          {info("Molecular Weight", "182.17")}
          {info("Hydrogen Bond Donor Count", "6")}
          {info("Hydrogen Bond Acceptor Count", "6")}
          {info("Rotatable Bond Count", "5")}
          {info("Exact Mass", "182.07903816")}
          {info("Heavy Atom Count", "12")}
          {info("Formal Charge", "0")}
        </div>
      </div>
      <div className="content mx-8 md:mx-12 mt-16 pb-8">
        <div className="mt-4">
          <div className="text-2xl text-gray-200">Medical Information</div>
          <div className="mt-4 lg:ml-8 text2">
            <div className="inline text-red-400">{icon} </div>
            It is used to decrease pressure in the eyes, as in glaucoma, and to
            lower increased intracranial pressure. Medically, it is given by
            injection or inhalation. Effects typically begin within 15 minutes
            and last up to 8 hours.Common side effects from medical use include
            electrolyte problems and dehydration.
          </div>
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
      <div className="content mx-8 md:mx-12 mt-8 pb-8">
        <div className="text-2xl text-gray-200">Sources:</div>
        <div className="text2">
          These are the different websites from which information was gathered
          <br /> <br />
          <div>
            1.<> </>
            <a
              href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16899#:~:text=As%20a%20medication%2C%20it%20is,last%20up%20to%208%20hours."
              className="italic hover:text-red-400"
              target="_"
            >
              ChEBI
            </a>
          </div>
          <div>
            2.<> </>
            <a
              href="https://pubchem.ncbi.nlm.nih.gov/compound/6251#section=Names-and-Identifiers"
              className="italic hover:text-red-400"
              target="_"
            >
              PubChem
            </a>
          </div>
          <div>
            3.<> </>
            <a
              href="https://www.sigmaaldrich.com/CA/en/search/d-mannitol?focus=products&page=1&perpage=30&sort=relevance&term=d-mannitol&type=product"
              className="italic hover:text-red-400"
              target="_"
            >
              Millipore Sigma
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
