'use client';

import { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'TheMotto',
    date: 'June 10, 2024',
    year: '2020',
    video: 'https://videos.pexels.com/video-files/8100345/8100345-uhd_1440_2732_25fps.mp4',
  },
  {
    title: 'Lovelace Studio',
    date: 'June 10, 2024',
    year: '2020',
    video: 'https://videos.pexels.com/video-files/9032408/9032408-uhd_1440_2560_25fps.mp4',
  },
  {
    title: 'TheMotto',
    date: 'June 10, 2024',
    year: '2020',
    video: 'https://videos.pexels.com/video-files/7914927/7914927-hd_1080_1920_30fps.mp4',
  },
  {
    title: 'Lovelace Studio',
    date: 'June 10, 2024',
    year: '2020',
    video: 'https://videos.pexels.com/video-files/2795742/2795742-uhd_1440_2560_25fps.mp4',
  },
];

const marqueeText = [
  'Photographer', 'Creative Director', 'Award-Winning',
  'Since 1993', 'Based New York', 'Visual Designer',
  'Product Designer', 'Digital Studio'
];

export default function Projects() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    } as any); 

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: -40,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'bottom top',
              scrub: true,
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        );
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="relative bg-[#141414] text-white py-32 px-6 md:px-24 font-mono overflow-hidden pb-0">
      {/* Marquee Layers */}
      {[
  { top: 'top-[20%] md:top-[30%]', rotate: '-rotate-6', z: 'z-10', dir: 'left', speed: 60 },
  { top: 'top-[45%] md:top-[35%]', rotate: 'rotate-6', z: 'z-20', dir: 'right', speed: 40 },
  { top: 'top-[65%] md:top-[70%]', rotate: 'rotate-6', z: 'z-10', dir: 'right', speed: 40 },
  { top: 'top-[85%] md:top-[75%]', rotate: '-rotate-6', z: 'z-20', dir: 'left', speed: 60 },
].map(({ top, rotate, z, dir, speed }, i) => (
  <div
    key={i}
    className={`absolute ${top} left-0 ${z} ${rotate} w-screen`}
  >
    <Marquee
      gradient={false}
      speed={speed}
      direction={dir as 'left' | 'right'}
      autoFill={true}
      className="bg-white/10 py-3 backdrop-blur-sm"
    >
      <div className="flex items-center gap-10 text-white tracking-wider text-[1.2rem] md:text-[2rem] font-medium">
        {marqueeText.map((word, idx) => (
          <span key={`${i}-${idx}`} className="flex items-center gap-4">
            {word} <span className="text-white/50">✦</span>
          </span>
        ))}
      </div>
    </Marquee>
  </div>
))}


      {/* Content */}
      <div className="relative z-30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif italic">Our latest</h2>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">projects</h3>
          </div>
          <p className="text-xs md:text-sm max-w-md text-gray-400 font-light mt-6 md:mt-0">
            Each project reflects our dedication to excellence, creativity, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="space-y-4"
            >
              <div className="w-full aspect-square bg-[#111] overflow-hidden rounded-md border border-gray-800">
                <video
                  src={project.video}
                  loop
                  playsInline
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center text-gray-400 text-xs uppercase tracking-widest">
                <span>{project.date}</span>
                <span>{project.year}</span>
              </div>
              <h4 className="text-xl font-light tracking-tight font-sans">
                {project.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
