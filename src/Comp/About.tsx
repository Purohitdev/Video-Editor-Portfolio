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
//   { number: "14", label: "Years of experience" },
  { number: "20+", label: "Projects done" },
  { number: "20+", label: "Satisfied clients" },
  { number: "02", label: "Trusted partners" },
  { number: "39", label: "Professional members" },
];

export default function AboutHero() {
  return (
    <section className="bg-[#141414] text-white py-24 px-6 md:px-32 text-center relative overflow-hidden">
      {/* Circular Logo */}
      <div className="flex justify-center mb-12">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4H7MOPPcNfhFFIR0xypqfC3UXNRkC-m7Zj4wuaGvxsJ-hsgel"
          alt="Circular Badge"
          className="w-30 h-30 mix-blend-color-dodge"
        />
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-serif leading-tight text-left">
        <span className="font-semibold text-white">
          With years of industry expertise, our team of visionaries, storytellers,
          and design virtuosos come together to weave magic that captivates hearts and minds.
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-10 text-sm md:text-base mx-auto font-mono leading-relaxed text-left">
        With years of experience and a diverse portfolio, we have established
        ourselves as a leading force in the world of video production. At our
        core, we believe in the transformative power of visual storytelling. Our
        mission is to bring your ideas to life, creating content that not only
        meets but exceeds your expectations.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 mt-16">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="flex flex-col items-start border-t border-b border-gray-700/50 py-8 px-4 hover:border-violet-500 transition-all duration-300"
    >
      <div className="text-5xl font-serif text-white">{stat.number}</div>
      <div className="text-gray-400 text-sm font-mono tracking-wide mt-2 leading-snug">
        {stat.label}
      </div>
    </div>
  ))}
</div>


      {/* Marquee */}
      <div className="mt-16">
        <Marquee gradient={false} speed={50} pauseOnHover={true} autoFill={true}>
          {iconComponents.map((Icon, index) => (
            <div key={index} className="mx-10 text-4xl text-white hover:text-violet-400 transition-all duration-300">
              {Icon}
            </div>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={50} pauseOnHover={true} autoFill={true} direction="right" className="mt-10">
          {iconComponents.map((Icon, index) => (
            <div key={index} className="mx-10 text-4xl text-white hover:text-violet-400 transition-all duration-300">
              {Icon}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
