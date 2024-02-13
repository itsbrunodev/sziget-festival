import MusicIsOurPassion2 from "../../public/macklemore-middle.jpg";
import MusicIsOurPassion3 from "../../public/people-flags.jpg";
import MusicIsOurPassion1 from "../../public/people-stage.jpeg";

export function About() {
  return (
    <div className="flex max-w-content flex-col sm:flex-row gap-12 py-24">
      <div className="flex h-full sm:w-1/2 w-full flex-col gap-20 px-4 sm:px-0">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-black text-zinc-800">
            MUSIC IS
            <br />
            OUR PASSION
          </h2>
          <p className="text-lg text-zinc-900">
            The first Sziget Festival was organized back in 1993 as a small
            gathering and has since evolved into one of Europe's largest music
            festivals.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-light text-zinc-700">
            01 - Dust in the air over the island
          </p>
          <div className="aspect-[9/13] w-full object-cover">
            <img
              className="h-full object-cover"
              src={MusicIsOurPassion1}
              alt="Dust in the air over the island"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="flex h-full sm:w-1/2 w-full flex-col gap-12 px-4 sm:px-0">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="aspect-[13/6] w-full object-cover">
              <img
                className="h-full object-cover"
                src={MusicIsOurPassion2}
                alt="People filming Macklemore"
                draggable={false}
              />
            </div>
            <p className="text-sm font-light text-zinc-700">
              02 - People filming Macklemore
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="aspect-[13/6] w-full object-cover">
              <img
                className="h-full object-cover"
                src={MusicIsOurPassion3}
                alt="Diverse flags"
                draggable={false}
              />
            </div>
            <p className="text-sm font-light text-zinc-700">
              03 - Diverse flags
            </p>
          </div>
        </div>
        <div className="mt-auto flex h-full flex-col gap-8">
          <p className="text-lg text-zinc-900">
            Each year we strive to bring Szitizens some of the biggest names out
            there, and host over 1,000 shows across 60 stages, for 6 days
            straight. There are over 100 nationalities represented at Sziget,
            with people coming from as far away as Brazil or New Zealand.
          </p>
          <a
            className="w-fit border-b-[6px] border-b-primary-400 pb-0.5 font-black transition-colors hover:border-b-primary-200 sm:ml-0 ml-auto"
            id="heading-font"
          >
            SEE MORE
          </a>
        </div>
      </div>
    </div>
  );
}
