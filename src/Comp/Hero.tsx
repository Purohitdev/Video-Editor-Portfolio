"use client";

import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { CiPlay1 } from "react-icons/ci";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Lenis setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const el = videoRef.current;

    gsap.to(el, {
      y: -200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const backgroundDots = Array.from({ length: 80 }, () => ({
    top: Math.random() * 300,
    left: Math.random() * 1600,
    size: Math.random() * 5 + 1,
    opacity: Math.random() * 0.4 + 0.3,
    color: Math.random() > 0.5 ? "#ffffff" : "#aaaaaa",
  }));

  const boxDots = Array.from({ length: 20 }, () => ({
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 4 + 1,
    opacity: Math.random() * 0.4 + 0.4,
    color: "#999999",
  }));

  return (
    <section id="Hero" className="relative bg-[#141414] text-white px-6 md:px-32 py-4 text-center overflow-hidden ">
      {/* Background dots */}
      {backgroundDots.map((dot, index) => (
        <div
          key={`bg-${index}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: `${dot.top}px`,
            left: `${dot.left}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            opacity: dot.opacity,
          }}
        />
      ))}

      {/* Headline + CTA */}
      <div className="flex flex-col items-start justify-start relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8 text-left">
          Converting frames into sales,
          <br />
          and videos into revenue.
        </h1>
        <button className="bg-white text-black px-6 py-4 rounded-full font-semibold text-sm tracking-wide">
          Contact Us
        </button>
      </div>

      {/* Video Section */}
      <div ref={videoRef} className="mt-60 flex justify-center relative z-10 ">
        <div className="bg-gray-100 w-full max-w-full aspect-video flex items-center justify-center relative overflow-hidden">
          {boxDots.map((dot, index) => (
            <div
              key={`box-${index}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                top: dot.top,
                left: dot.left,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                backgroundColor: dot.color,
                opacity: dot.opacity,
              }}
            />
          ))}

          <img
            src="https://i.pinimg.com/736x/67/eb/65/67eb655d2758b0d33109965da2f7f308.jpg"
            alt="camera"
            className="object-contain h-full relative z-10"
          />
          <div className="absolute inset-0 flex justify-center items-center z-20">
            <button className="bg-black/60 p-8 rounded-full shadow-md backdrop-blur-[5px] h-25 w-40 flex justify-center items-center">
              <CiPlay1 className="text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute top-60 left-0 z-20 transform -rotate-7 w-screen">
        <Marquee
          gradient={false}
          speed={60}
          autoFill={true}
          className="bg-white/10 py-3 backdrop-blur-sm text-base font-medium w-screen"
        >
          <div className="flex items-center gap-10 text-white tracking-wider text-[2rem]">
            <span>Award-Winning</span>
            <span>Since 1993</span>
            <span>Based New York</span>
            <span>Digital Studio</span>
            <span>Award-Winning</span>
            <span>Since 1993</span>
            <span>Based New York</span>
            <span>Digital Studio</span>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
