import { ParallaxScroll } from "./animated/parallax-scroll";

export function Artists() {
  const artistList = [
    {
      name: "Fred again..",
      url: "https://open.spotify.com/artist/4oLeXFyACqeem2VImYeBFe",
    },
    {
      name: "Martin Garrix",
      url: "https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ",
    },
    {
      name: "Sam Smith",
      url: "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI",
    },
    {
      name: "Stormzy",
      url: "https://open.spotify.com/artist/2SrSdSvpminqmStGELCSNd",
    },
    {
      name: "Louis Tomlinson",
      url: "https://open.spotify.com/artist/57WHJIHrjOE3iAxpihhMnp",
    },
    {
      name: "Four Tet",
      url: "https://open.spotify.com/artist/7Eu1txygG6nJttLHbZdQOh",
    },
    {
      name: "Big Thief",
      url: "https://open.spotify.com/artist/5QdyldG4Fl4TPiOIeMNpBZ",
    },
    {
      name: "Fontaines D.C.",
      url: "https://open.spotify.com/artist/3SXwqSqAoBz9WCI9PDQzY6",
    },
    {
      name: "Aurora",
      url: "https://open.spotify.com/artist/1WgXqy2Dd70QQOU7Ay074N",
    },
    {
      name: "Azahriah",
      url: "https://open.spotify.com/artist/6EIriUxo7vznEgJtTDlXpq",
    },
    {
      name: "Becky Hill",
      url: "https://open.spotify.com/artist/4EPJlUEBy49EX1wuFOvtjK",
    },
    {
      name: "ARTBAT",
      url: "https://open.spotify.com/artist/3BkRu2TGd2I1uBxZKddfg1",
    },
    {
      name: "L'Impératrice",
      url: "https://open.spotify.com/artist/4PwlsrN0t5mLN0C827cbEU",
    },
    {
      name: "Crystal Fighters",
      url: "https://open.spotify.com/artist/75EZuo5MHV2572NRpMWotC",
    },
    {
      name: "Richie Hawtin",
      url: "https://open.spotify.com/artist/3AhwIUus3pIaA3CvYBEtpy",
    },
    {
      name: "ANOTR",
      url: "https://open.spotify.com/artist/4p5WgeiPSPpqPDs7T6OkWf",
    },
    {
      name: "Honey Dijon",
      url: "https://open.spotify.com/artist/0XfQBWgzisaS9ltDV9bXAS",
    },
    {
      name: "Dom Dolla",
      url: "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m",
    },
    {
      name: "Overmono",
      url: "https://open.spotify.com/artist/01PnN11ovfen6xUOHfNpn3",
    },
    {
      name: "Nia Archives",
      url: "https://open.spotify.com/artist/7BMR0fwtEvzGtK4rNGdoiQ",
    },
    {
      name: "Argy",
      url: "https://open.spotify.com/artist/1NaQOKgddaJipUtmptb7GI",
    },
    {
      name: "Eris Drew & Octo Octo",
      url: "https://open.spotify.com/artist/4VKbZ8lm0Bm1AbtzAbBdpO",
    },
    {
      name: "MEUTE",
      url: "https://open.spotify.com/artist/1z5xbcOeFRQXBVDpvRPh8H",
    },
    {
      name: "grandson",
      url: "https://open.spotify.com/artist/4ZgQDCtRqZlhLswVS6MHN4",
    },
    {
      name: "LIBERATO",
      url: "https://open.spotify.com/artist/4X89u81dkCXBSGo8i2DhMW",
    },
    {
      name: "Zoe Wees",
      url: "https://open.spotify.com/artist/03d2mJXSMtuPI0nIvLnhoS",
    },
    {
      name: "Joker Out",
      url: "https://open.spotify.com/artist/0ZNfJyThuy6vLnPEpPaJdf",
    },
    {
      name: "Goldband",
      url: "https://open.spotify.com/artist/6mS5GeFyhea6w9OKo8PO3p",
    },
    {
      name: "Yard Act",
      url: "https://open.spotify.com/artist/2h3ooJn8m8X8cL2g1BZ1Rd",
    },
    {
      name: "Joesef",
      url: "https://open.spotify.com/artist/28EyduqESEOVMO6vglvaUZ",
    },
    {
      name: "Warhaus",
      url: "https://open.spotify.com/artist/5uy67fWgovgNdbkP1kAf7m",
    },
    {
      name: "Ellen Allien",
      url: "https://open.spotify.com/artist/5lsC3H1vh9YSRQckyGv0Up",
    },
    {
      name: "Fideles",
      url: "https://open.spotify.com/artist/39RaU9BN81x3KBo299bwXs",
    },
    {
      name: "Chloé Caillet",
      url: "https://open.spotify.com/artist/68ywCN6ZpInbcilOfLBa3a",
    },
    {
      name: "AMÉMÉ",
      url: "https://open.spotify.com/artist/1txb9Qg5lJ3KATxPcIYyvO",
    },
    {
      name: "Nova Twins",
      url: "https://open.spotify.com/artist/7I95CM75shzCjHuTzrepjM",
    },
    {
      name: "Joost",
      url: "https://open.spotify.com/artist/6s5ubAp65wXoTZefE01RNR",
    },
    {
      name: "Blondshell",
      url: "https://open.spotify.com/artist/7qrEXiLLnWkkYHhadZ1Oij",
    },
    {
      name: "Wednesday",
      url: "https://open.spotify.com/artist/4j7DrazfBZLLD0OrVoAtEe",
    },
    {
      name: "DAGNY",
      url: "https://open.spotify.com/artist/6Paz0vXJJ9bCPf0fEm3qzg",
    },
    {
      name: "Pip Blom",
      url: "https://open.spotify.com/artist/6zWJfH1TTmIqEi7EV35HGr",
    },
  ];

  return (
    <div className="flex max-w-content flex-col items-center py-24">
      <div className="flex flex-col gap-6 px-4 text-center">
        <h2 className="text-4xl font-extrabold text-zinc-900" id="line-up">
          2024 LINE-UP
        </h2>
        <p className="text-lg text-zinc-900">
          You're familiar with the scene. We've been hanging out with top
          artists for quite some time. A big shoutout to Fred again.., as well
          as Martin Garrix, Azahriah, Joost, Sam Smith and many more.
        </p>
      </div>
      <ParallaxScroll
        className="h-full px-4 sm:px-0"
        images={artistList.map(
          (artist) =>
            `/artists/${artist.name.toLowerCase().replace(/[ .]/g, "_")}.jpeg`
        )}
        altNames={artistList.map((artist) => artist.name)}
        urls={artistList.map((artist) => artist.url)}
      />
      <h4 className="text-center text-xl font-black leading-5 text-zinc-900">
        & MANY MORE
        <br /> TO BE ANNOUNCED
      </h4>
    </div>
  );
}
