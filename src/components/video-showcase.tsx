export function VideoShowcase() {
  return (
    <div className="flex w-full flex-col items-center gap-64 pt-24 sm:gap-[530px]">
      <div className="flex w-full max-w-content flex-col items-center gap-12 px-4 text-center sm:flex-row sm:items-center sm:px-0 sm:text-start">
        <h2 className="whitespace-nowrap text-3xl font-black text-zinc-800 sm:w-1/2">
          WILDEST PARTIES
        </h2>
        <p className="text-lg text-zinc-900 sm:w-1/2">
          Last year was dope. And the one before. And the one before. And the
          one before. And the one before. And the one before. Check out the last
          year best moments.
        </p>
      </div>
      <div className="relative flex w-full justify-center bg-zinc-800">
        <div className="center relative flex w-full max-w-content px-8 py-20">
          <div className="absolute bottom-[150px] aspect-video w-11/12 bg-zinc-500 shadow-xl shadow-zinc-900 sm:bottom-[185px]">
            <iframe
              className="full"
              src="https://www.youtube.com/embed/hJB9pfmUULI?si=GwAtgd0XcBmVo0Gm"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="sm:whitespace-nowrap text-3xl text-zinc-700 sm:text-7xl">
              BEST MOMENTS
            </h3>
            <a
              className="w-fit border-b-[6px] border-b-primary-400 pb-0.5 text-sm font-black text-white transition-colors hover:border-b-primary-200 sm:text-base"
              id="heading-font"
            >
              VIEW GALLERY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
