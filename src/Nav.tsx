import { Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center py-6 bg-[#141414] text-white ">
    <div className=" flex justify-between items-center w-[88%] px-8 py-4 rounded-4xl bg-white/15">
    <div className="font-bold tracking-widest">📽 PALERMO</div>
      <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wider text-gray-400">
        <li className="text-white">Home</li>
        <li>Projects</li>
        <li>About Us</li>
        <li>Blog</li>
      </ul>
      <button className="bg-white text-black rounded-full p-2 ">
        <Mail size={18} />
      </button>
    </div>
    </nav>
  );
}
