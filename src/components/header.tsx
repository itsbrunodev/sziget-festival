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
    <header className="center relative flex h-[500px] md:h-[750px] w-full flex-col gap-6 text-center">
      <span className="text-sm font-light tabular-nums text-zinc-700 sm:text-base">
        07-12 AUG 2024 BUDAPEST, HUNGARY
      </span>
      <div className="relative">
        <h1 className="center-absolute absolute z-20 w-screen text-5xl font-black leading-[2.75rem] text-zinc-800 sm:text-7xl sm:leading-[4rem] md:text-8xl md:leading-[5.4rem] lg:text-9xl lg:leading-[7rem]">
          SZIGET <br /> FESTIVAL
        </h1>
        <div className="relative h-[160px] w-[250px] bg-primary-100 sm:h-[200px] sm:w-[350px] md:h-[300px] md:w-[450px] lg:h-[350px] lg:w-[500px]">
          <Showcase />
        </div>
      </div>
      <span className="text-sm font-light text-zinc-700 sm:text-base">
        POP, ROCK, HIP-HOP, EDM, TECHNO AND MORE ON THE ISLAND OF ÓBUDA
      </span>
    </header>
  );
}
