import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

function Image(
  props: React.ImgHTMLAttributes<HTMLImageElement> & { url?: string }
) {
  const DynamicTag = props.url ? "a" : "div";

  return (
    <DynamicTag
      className={cn(
        "relative !m-0 w-full gap-10 !p-0",
        props.url && "transition-all hover:grayscale"
      )}
      href={props.url}
      target="_blank"
    >
      <p className="pb-2 text-xs font-light text-zinc-800">{props.alt}</p>
      <img
        src={props.src}
        className="full h-64 object-cover object-center"
        draggable={false}
        alt={props.alt}
      />
    </DynamicTag>
  );
}

/**
 * https://ui.aceternity.com/components/parallax-scroll
 */
export function ParallaxScroll({
  images,
  altNames,
  urls,
  className,
}: {
  images: string[];
  altNames: string[];
  urls?: string[];
  className?: string;
}) {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({});

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  function toPart(images: string[], start?: number, end?: number) {
    return images.slice(start, end).map((x, i) => ({
      src: x,
      altName: altNames.slice(start, end)[i],
      url: urls?.slice(start, end)[i],
    }));
  }

  const firstPart = toPart(images, 0, third);
  const secondPart = toPart(images, third, third * 2);
  const thirdPart = toPart(images, third * 2);

  return (
    <div
      className={cn("h-[40rem] w-full items-start overflow-y-auto", className)}
      ref={gridRef}
    >
      <div
        className="mx-auto grid grid-cols-1 items-start gap-8 overflow-y-hidden py-52 md:grid-cols-2 lg:grid-cols-3"
        ref={gridRef}
      >
        <div className="grid gap-8">
          {firstPart.map((x, i) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + i}>
              <Image src={x.src} alt={x.altName} url={x.url} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((x, i) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + i}>
              <Image src={x.src} alt={x.altName} url={x.url} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((x, i) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + i}>
              <Image src={x.src} alt={x.altName} url={x.url} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
