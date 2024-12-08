import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DownloadResume from "./DownloadResume";
import Image from "next/image";
import BGimage from "@/public/background.jpg";

export default function Hero() {

  return (
    <div className="h-screen relative bg-[#0e0e0e] overflow-hidden flex flex-col items-center justify-center px-4">
      <Image
        src={BGimage}
        alt="Background"
        className="absolute md:top-1/2 bottom-0"
      />


      <div className="absolute top-8 right-8 z-10">
        <DownloadResume />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-2 relative z-10 text-center">
        Tanishka Deep
      </h1>

      <p className="text-xl md:text-2xl text-neutral-400 mb-4 relative z-10 font-medium">
        Full Stack Developer
      </p>
      <div className="flex justify-center items-center gap-4 relative z-10">
        <a href="https://github.com/tanishkadeep" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/tanishkadeep/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-2xl hover:scale-110" />
        </a>
        <a href="mailto:tanishkadeep09@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail className="text-2xl hover:scale-110" />
        </a>
      </div>

    </div>

  );
}