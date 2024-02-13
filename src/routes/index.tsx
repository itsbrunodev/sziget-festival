import { About } from "@/components/about";
import { Artists } from "@/components/artists";
import { Footer } from "@/components/footer";
import { FreshNews } from "@/components/fresh-news";
import { Header } from "@/components/header";
import { Program } from "@/components/program";
import { VideoShowcase } from "@/components/video-showcase";

export function Index() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Program />
      <Artists />
      <FreshNews />
      <About />
      <div className="w-full sm:px-8 px-4">
        <hr className="h-px w-full text-zinc-500" />
      </div>
      {/* <div className="mx-8 h-px w-full border-t-[1px] border-t-zinc-300" /> */}
      <VideoShowcase />
      <Footer />
    </div>
  );
}
