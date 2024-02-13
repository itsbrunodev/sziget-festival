import { PalmtreeIcon, PhoneIcon, TicketIcon } from "lucide-react";

import {
  SiFacebook,
  SiInstagram,
  SiSnapchat,
  SiX,
} from "@icons-pack/react-simple-icons";

export function Footer() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-center bg-primary-100">
        <div className="flex w-full max-w-content flex-col gap-12 sm:flex-row">
          <div className="flex flex-col gap-6 pt-12 sm:px-0 px-4 text-center sm:flex-row sm:gap-0 sm:py-12 sm:text-start">
            <h2 className="sm:whitespace-nowrap text-3xl font-black text-zinc-800">
              TICKETS & MORE
            </h2>
            <p className="mx-auto text-lg sm:max-w-[30%]">
              Buy a single ticket or the whole package, including transportation
              and accommodation.
            </p>
          </div>
          <button className="center flex bg-primary-300 py-8 transition-colors hover:bg-primary-400 sm:aspect-square sm:h-full sm:py-0">
            <div className="center flex flex-col gap-2 text-white">
              <TicketIcon className="h-16 w-16" />
              <h3 className="text-xl">
                CHECK
                <br />
                TICKETS
              </h3>
            </div>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center bg-zinc-800">
        <div className="flex w-full max-w-content gap-12">
          <div className="flex w-full sm:justify-between sm:items-start items-center py-12 sm:gap-0 gap-12 sm:flex-row flex-col">
            <a
              className="flex items-center gap-4 transition-opacity hover:opacity-80"
              href="/"
            >
              <div className="center relative flex h-16 w-16 rounded-full bg-zinc-500">
                <PalmtreeIcon className="text-zinc-300" />
              </div>
              <h1 className="-mb-px text-3xl font-black leading-none text-zinc-500">
                SZIGET
                <br />
                FESTIVAL
              </h1>
            </a>
            <div className="flex flex-col gap-2 text-zinc-500">
              <h4 className="sm:text-right text-center">KEEP IN TOUCH</h4>
              <div className="flex gap-8">
                <a className="transition-colors hover:text-primary-200" href="#">
                  <SiFacebook />
                </a>
                <a className="transition-colors hover:text-primary-200" href="#">
                  <SiX />
                </a>
                <a className="transition-colors hover:text-primary-200" href="#">
                  <SiInstagram />
                </a>
                <a className="transition-colors hover:text-primary-200" href="#">
                  <SiSnapchat />
                </a>
                <a className="transition-colors hover:text-primary-200" href="#">
                  <PhoneIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-zinc-950">
        <div className="flex w-full sm:flex-row flex-col sm:px-0 px-4 max-w-content sm:justify-between sm:items-start items-center py-4 text-sm font-light text-zinc-500 sm:gap-0 gap-4">
          <p>© SZIGET FESTIVAL, ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <a className="transition-colors hover:text-zinc-200" href="#">
              Terms of Use
            </a>
            <a className="transition-colors hover:text-zinc-200" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
