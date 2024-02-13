import ShowcaseImage from "../../public/cover-image.jpg";

function Showcase() {
  return (
    <img
      className="full object-cover"
      src={ShowcaseImage}
      alt="Showcase Image"
      draggable={false}
    />
  );
}

export function Header() {
  return (
    <header className="center relative flex h-[750px] w-full flex-col gap-6 text-center">
      <span className="text-sm font-light tabular-nums text-zinc-700 sm:text-base">
        07-12 AUG 2024 BUDAPEST, HUNGARY
      </span>
      <div className="relative">
        <h1 className="center-absolute absolute z-20 w-screen text-6xl font-black leading-[3.5rem] text-zinc-800 sm:text-9xl sm:leading-[7rem]">
          SZIGET <br /> FESTIVAL
          {/* WELCOME
          <br /> TO SZIGET */}
        </h1>
        <div className="relative h-[200px] w-[350px] bg-primary-100 sm:h-[350px] sm:w-[500px]">
          <Showcase />
        </div>
      </div>
      <span className="text-sm font-light text-zinc-700 sm:text-base">
        POP, ROCK, HIP-HOP, EDM, TECHNO AND MORE ON THE ISLAND OF ÓBUDA
      </span>
    </header>
  );
}
