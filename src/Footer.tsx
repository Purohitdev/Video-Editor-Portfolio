'use client';

import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import Marquee from 'react-fast-marquee';

export default function Footer() {
    const testimonials = [
        "Absolutely loved the final video – top-notch editing!",
        "Great storytelling and smooth transitions, highly recommend!",
        "This editor brings my ideas to life. Every. Single. Time.",
        "Professional, fast, and super creative – loved the experience!",
        "The best video editor I've worked with. Period.",
        "Happy customer of the best video editor around!",
      ];

  return (
    <footer className="bg-[#0f0f0f] text-white px-6 md:px-24 py-20 font-sans">
      {/* Top: Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
        <div className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
          <h2 className="uppercase">Let's Work</h2>
          <h2 className="italic text-gray-500 md:ml-40">Together</h2>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mb-16">
        <Marquee speed={60} gradient={false}>
          <div className="flex gap-6">
            {testimonials.map((text, index) => (
              <div
                key={index}
                className="bg-[#555] text-white px-6 py-4 rounded-xl flex items-center gap-4  text-sm whitespace-nowrap mx-2"
              >
                <span>{text}</span>
                <div className="bg-[#888] w-6 h-6 flex items-center justify-center rounded-full text-sm">
                  <FiArrowUpRight />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Socials + Email */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        {/* Social Icons */}
        <div className="flex gap-4">
          <div className="p-2 border border-white/20 rounded-md">
            <FaLinkedinIn />
          </div>
          <div className="p-2 border border-white/20 rounded-md">
            <FaInstagram />
          </div>
          <div className="p-2 border border-white/20 rounded-md">
            <FaTwitter />
          </div>
        </div>

        {/* Email Subscription */}
        <div className="flex items-center bg-white/5 rounded-full overflow-hidden px-6 py-2 w-full max-w-md">
          <input
            type="email"
            placeholder="hello@email.com"
            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 flex-1"
          />
          <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
       
       
      <a href="https://dev.impic.tech/" className="underline"> <p>
          Made by Dev
        </p>

        </a> 
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Home</a>
          <a href="#">About me</a>
          <a href="#">Project</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </footer>
  );
}
