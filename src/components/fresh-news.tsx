import { MailIcon } from "lucide-react";

import ImageSource from "../../public/balloons.jpg";

export function FreshNews() {
  return (
    <div className="flex w-full flex-col items-center bg-primary-100 pb-12">
      <div className="full origin-bottom">
        <img
          className="h-[400px] w-full origin-bottom object-cover sm:h-[600px]"
          src={ImageSource}
          draggable={false}
        />
      </div>
      <div className="flex w-full max-w-content sm:flex-row flex-col items-center justify-between gap-6 px-4 pt-12 sm:px-0">
        <h2 className="text-3xl font-black text-zinc-800">GET FRESH NEWS</h2>
        <div className="relative w-96">
          <input
            className="full border-b-2 border-b-zinc-400 bg-transparent py-2 font-light text-zinc-700 outline-none transition-colors placeholder:text-zinc-400 focus:border-b-zinc-600"
            type="text"
            placeholder="Enter your email to get fresh news"
          />
          <MailIcon
            className="absolute bottom-0.5 right-0 h-full text-zinc-400"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}
