import ImageSource from "../../public/drone-shot.jpeg";

export function Program() {
  return (
    <div className="flex w-full flex-col items-center bg-primary-100 pt-0">
      <div className="full origin-bottom">
        <img
          className="h-[400px] w-full origin-bottom object-cover sm:h-[600px]"
          src={ImageSource}
          draggable={false}
        />
      </div>
      <div className="flex w-full max-w-content flex-col items-center gap-6 py-6 sm:px-0 px-4">
        <p className="sm:text-lg text-base text-zinc-600">
          Full week of day & night parties
        </p>
        <div className="flex gap-6 sm:flex-row flex-col">
          <div className="flex flex-col text-center">
            <h2 className="text-sm font-extrabold text-zinc-800 sm:text-base">
              PRE PARTIES
            </h2>
            <p className="text-xs font-light text-zinc-700 sm:text-base">
              07-08 AUG
            </p>
          </div>
          <div className="mt-3 h-0.5 bg-zinc-700 sm:flex hidden w-20" />
          <div className="flex flex-col text-center">
            <h2 className="text-sm font-extrabold text-zinc-800 sm:text-base">
              MAIN PROGRAM
            </h2>
            <p className="text-xs font-light text-zinc-700 sm:text-base">
              08-11 AUG
            </p>
          </div>
          <div className="mt-3 h-0.5 bg-zinc-700 sm:flex hidden w-20" />
          <div className="flex flex-col text-center">
            <h2 className="text-sm font-extrabold text-zinc-800 sm:text-base">
              AFTER PARTY
            </h2>
            <p className="text-xs font-light text-zinc-700 sm:text-base">
              11-12 AUG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
