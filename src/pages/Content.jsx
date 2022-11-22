export function Content() {
  return (
    <div className="font-mono h-full w-full">
      <div className="content mx-4 md:mx-16 pt-10 row-span-6 ">
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
      </div>
    </div>
  );
}
