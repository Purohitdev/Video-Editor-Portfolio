'use client';

import Marquee from 'react-fast-marquee';

const projects = [
  {
    title: 'TheMotto',
    date: 'June 10, 2024',
    year: '2020',
    video: '/themotto.mp4',
  },
  {
    title: 'Lovelace Studio',
    date: 'June 10, 2024',
    year: '2020',
    video: '/lovelace.mp4',
  },
  {
    title: 'TheMotto',
    date: 'June 10, 2024',
    year: '2020',
    video: '/themotto.mp4',
  },
  {
    title: 'Lovelace Studio',
    date: 'June 10, 2024',
    year: '2020',
    video: '/lovelace.mp4',
  },
];

const marqueeText = [
  'Photographer', 'Creative Director', 'Award-Winning',
  'Since 1993', 'Based New York', 'Visual Designer',
  'Product Designer', 'Digital Studio'
];

export default function Projects() {
  return (
    <section className="relative bg-[#141414] text-white py-32 px-6 md:px-24 font-mono overflow-hidden">
      {/* Marquee Layer */}
      <div className="absolute top-[30%] left-0 z-10 -rotate-6 w-screen">
        <Marquee
          gradient={false}
          speed={60}
          autoFill={true}
          className="bg-white/10 py-3 backdrop-blur-sm"
        >
          <div className="flex items-center gap-10 text-white tracking-wider text-[2rem] font-medium">
            {marqueeText.map((word, idx) => (
              <span key={`top-${idx}`} className="flex items-center gap-4">
                {word} <span className="text-white/50">✦</span>
              </span>
            ))}
          </div>

          
        </Marquee>

        
      </div>

      <div className="absolute top-[35%] left-0 z-20 rotate-6 w-screen">
        <Marquee
          gradient={false}
          speed={40}
          direction="right"
          autoFill={true}
          className="bg-white/10 py-3 backdrop-blur-sm"
        >
          <div className="flex items-center gap-10 text-white tracking-wider text-[2rem] font-medium">
            {marqueeText.map((word, idx) => (
              <span key={`bottom-${idx}`} className="flex items-center gap-4">
                {word} <span className="text-white/50">✦</span>
              </span>
            ))}
          </div>
        </Marquee>
      </div>


      <div className="absolute top-[70%] left-0 z-10 rotate-6 w-screen">
        <Marquee
          gradient={false}
          speed={40}
          direction="right"
          autoFill={true}
          className="bg-white/10 py-3 backdrop-blur-sm"
        >
          <div className="flex items-center gap-10 text-white tracking-wider text-[2rem] font-medium">
            {marqueeText.map((word, idx) => (
              <span key={`bottom-${idx}`} className="flex items-center gap-4">
                {word} <span className="text-white/50">✦</span>
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      <div className="absolute top-[75%] left-0 z-20 -rotate-6 w-screen">
        <Marquee
          gradient={false}
          speed={60}
          autoFill={true}
          className="bg-white/10 py-3 backdrop-blur-sm"
        >
          <div className="flex items-center gap-10 text-white tracking-wider text-[2rem] font-medium">
            {marqueeText.map((word, idx) => (
              <span key={`top-${idx}`} className="flex items-center gap-4">
                {word} <span className="text-white/50">✦</span>
              </span>
            ))}
          </div>

          
        </Marquee>

        
      </div>

      

      {/* Content Layer */}
      <div className="relative z-10">
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
            <div key={index} className="space-y-4">
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
