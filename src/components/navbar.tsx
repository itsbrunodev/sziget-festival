import { AlignJustifyIcon, PalmtreeIcon } from "lucide-react";
import { Drawer } from "vaul";

import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = window.location.pathname;

  return (
    <div className="fixed z-40 flex w-full justify-center bg-white/50 backdrop-blur-lg">
      <div className="flex w-full items-center justify-between px-8 py-4">
        <a
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          href="/"
        >
          <div className="center relative flex h-9 w-9 rounded-full bg-primary-300">
            <PalmtreeIcon className="h-4 text-primary-800" />
          </div>
          <h1 className="-mb-px font-black leading-none text-zinc-900">
            SZIGET
            <br />
            FESTIVAL
          </h1>
        </a>
        <div className="hidden items-center gap-4 text-xs font-semibold text-zinc-900 sm:flex">
          {ROUTES.map((route, i) => (
            <a
              className={cn(
                "transition-colors",
                pathname === "/"
                  ? "hover:text-zinc-500"
                  : pathname.includes(route.href)
                    ? ""
                    : "text-zinc-700 hover:text-zinc-900"
              )}
              href={route.href}
              id="heading-font"
              key={i}
            >
              {route.name}
            </a>
          ))}
        </div>
        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <button
              className="inline-flex text-zinc-900 hover:text-zinc-500 sm:hidden"
              aria-label="Open bottom drawer"
            >
              <AlignJustifyIcon size={20} />
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/20" />
            <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[40%] flex-col bg-zinc-950">
              <div className="flex-1 bg-zinc-950 p-4">
                <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-800" />
                <div className="flex flex-col items-center gap-4 text-lg font-semibold">
                  {ROUTES.map((route, i) => (
                    <a
                      className="w-full bg-zinc-900 py-4 text-center text-zinc-200 hover:bg-zinc-800"
                      href={route.href}
                      key={i}
                    >
                      {route.name}
                    </a>
                  ))}
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
}
