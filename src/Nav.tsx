import { Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center py-6 bg-[#141414] text-white">
      <div className="flex justify-between items-center w-[88%] px-8 py-4 rounded-4xl bg-white/15">
        <a
          href="#hero"
          className="font-bold tracking-widest text-white hover:opacity-90 transition"
        >
          📽 Devansh
        </a>

        <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wider text-gray-400">
          <li>
            <a href="#hero" className="hover:text-white transition text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
        >
          <Mail size={18} />
        </a>
      </div>
    </nav>
  );
}
