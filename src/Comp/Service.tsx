

'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'CINEMATIC VIDEO EDITING',
    description:
      'Professional editing for films, trailers, and story-driven content with dramatic color grading and pacing.',
    image:
      'https://i.pinimg.com/736x/1d/70/3d/1d703d9b3be773aadcadc34ef3225f6e.jpg',
  },
  {
    title: 'SOCIAL MEDIA EDITING',
    description:
      'Fast, trendy edits tailored for platforms like Instagram Reels, TikTok, and YouTube Shorts.',
    image:
      'https://i.pinimg.com/736x/5b/24/dc/5b24dcd96454392ee8ad09f2382c8dbc.jpg',
  },
  {
    title: 'VLOG EDITING',
    description:
      'Engaging and smooth edits for lifestyle, travel, or daily vlogs with attention to pacing and personality.',
    image:
      'https://i.pinimg.com/736x/39/d4/69/39d469212f0c991de6313a372efb1657.jpg',
  },
  {
    title: 'CORPORATE VIDEO EDITING',
    description:
      'Clean, professional edits for presentations, interviews, and promotional business videos.',
    image:
      'https://i.pinimg.com/736x/c6/29/38/c629381de4847f2dceb59e6a2d399281.jpg',
  },
  {
    title: 'MUSIC VIDEO EDITING',
    description:
      'Creative rhythm-synced edits that elevate your music and visuals to a cinematic level.',
    image:
      'https://i.pinimg.com/736x/51/3c/6d/513c6d81ac5aa073f50d7120896904b3.jpg',
  },
  {
    title: 'MOTION GRAPHICS & VFX',
    description:
      'Dynamic motion design, animated titles, and visual effects to make your content stand out.',
    image:
      'https://i.pinimg.com/736x/27/5c/bc/275cbca5696372e6ebffdf3c1d6d8e58.jpg',
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    } as any); // using `as any` to suppress TS complaint

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.to(cardsRef.current, {
        x: '-50%',
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
        },
      });
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id='Services'
      className="bg-[#141414] text-white py-20 px-6 md:px-24 font-mono overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h2>
      <p className="text-gray-400 text-sm md:text-base max-w-xl mb-12">
        Each project reflects our dedication to excellence, creativity, and innovation.
      </p>

      <div
        ref={cardsRef}
        className="flex gap-8 w-max mt-12 md:h-[60vh] items-stretch"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="space-y-4 min-h-[50vh] w-[70vw] md:w-[30vw] flex-shrink-0"
          >
            <div className="w-full h-[45vh] overflow-hidden bg-gray-800 rounded-md shadow-md">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <h3 className="text-sm tracking-wider font-semibold text-white uppercase">
              {service.title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed tracking-wide">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
