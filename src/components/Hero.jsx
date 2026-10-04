import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const words = ["WELCOME", "ITZFIZZ"];

const stats = [
  { value: "58%", text: "Increase in pick up point use" },
  { value: "23%", text: "Decrease in customer phone calls" },
  { value: "27%", text: "Increase in pick up point use" },
  { value: "40%", text: "Decrease in customer phone calls" },
];

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".letter", {
        opacity: 0,
        y: -40,
        duration: 0.8,
        stagger: 0.06,
      }).from(
        ".stat",
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          stagger: 0.25,
        },
        "-=0.2"
      );

      gsap.fromTo(
        ".car",
        { y: "30vh", scale: 1 },
        {
          y: "0vh",
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=1500",
            scrub: 1,
            pin: true,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      {/* Headline + Stats */}
      <div className="absolute inset-x-0 top-[12%] px-6 text-center">
        <h1 className="flex flex-wrap justify-center gap-x-10 text-4xl font-bold tracking-[0.5em] md:text-6xl">
          {words.map((word) => (
            <span key={word} className="flex">
              {word.split("").map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.text} className="stat">
              <p className="text-4xl font-bold md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-gray-400">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Car */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center">
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCueGDcgem6oo6gAC95pGY6Gf9hz0hcPc0sVFTpwXfQ&s=10"}
          alt="car"
          className="car h-[40vh] w-auto will-change-transform"
        />
      </div>
    </section>
  );
}