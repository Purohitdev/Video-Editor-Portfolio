"use client";

import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiDavinciresolve,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBlender,
  SiCanva,
} from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconComponents = [
  <SiAdobepremierepro key="pp" />,
  <SiAdobeaftereffects key="ae" />,
  <SiDavinciresolve key="dr" />,
  <SiAdobephotoshop key="ps" />,
  <SiAdobeillustrator key="ai" />,
  <SiBlender key="blender" />,
  <SiCanva key="canva" />,
];

const stats = [
  { number: 20, label: "Projects done" },
  { number: 20, label: "Satisfied clients" },
  { number: 2, label: "Trusted partners" },
  { number: 39, label: "Professional members" },
];

export default function AboutHero() {
  useEffect(() => {
    // Animate each word in the heading
    const words = document.querySelectorAll("[data-word]");
    gsap.fromTo(
      words,
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: words[0]?.parentElement,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Animate numbers in stats
    const statEls = document.querySelectorAll("[data-stat]");
    statEls.forEach((el) => {
      const endValue = parseInt(el.getAttribute("data-end") || "0", 10);
      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: endValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          snap: { textContent: 1 },
          onUpdate: function () {
            el.textContent = Math.floor(Number(el.textContent)).toString().padStart(2, "0") + (endValue > 10 ? "+" : "");
          },
        }
      );
    });
  }, []);

  return (
    <section id="about" className="bg-[#141414] text-white px-6 md:px-32 text-center relative overflow-hidden">
      {/* Circular Logo */}
      <div className="flex justify-center mb-12">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4H7MOPPcNfhFFIR0xypqfC3UXNRkC-m7Zj4wuaGvxsJ-hsgel"
          alt="Circular Badge"
          className="w-30 h-30 mix-blend-color-dodge"
        />
      </div>

      {/* Animated Heading */}
      <h2 className="text-3xl md:text-5xl font-serif leading-tight text-left flex flex-wrap gap-x-2">
        {"With years of industry expertise, our team of visionaries, storytellers, and design virtuosos come together to weave magic that captivates hearts and minds."
          .split(" ")
          .map((word, index) => (
            <span
              key={index}
              className="inline-block opacity-20 transition-opacity duration-500"
              data-word
            >
              {word}
            </span>
          ))}
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-10 text-sm md:text-base mx-auto font-mono leading-relaxed text-left">
        With years of experience and a diverse portfolio, we have established
        ourselves as a leading force in the world of video production. At our
        core, we believe in the transformative power of visual storytelling. Our
        mission is to bring your ideas to life, creating content that not only
        meets but exceeds your expectations.
      </p>

      {/* Stats Section with animated numbers */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 mt-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-start border-t border-b border-gray-700/50 py-8 px-4 hover:border-violet-500 transition-all duration-300"
          >
            <div
              data-stat
              data-end={stat.number}
              className="text-5xl font-serif text-white"
            >
              00
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-wide mt-2 leading-snug">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee Icons */}
      <div className="mt-16">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          autoFill={true}
        >
          {iconComponents.map((Icon, index) => (
            <div
              key={index}
              className="mx-10 text-4xl text-white hover:text-violet-400 transition-all duration-300"
            >
              {Icon}
            </div>
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          autoFill={true}
          direction="right"
          className="mt-10"
        >
          {iconComponents.map((Icon, index) => (
            <div
              key={index}
              className="mx-10 text-4xl text-white hover:text-violet-400 transition-all duration-300"
            >
              {Icon}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
