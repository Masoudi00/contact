import Image from "next/image";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden pt-20 pb-10"
      id="contact"
    >
      {/* background grid */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-96 min-h-96 w-full"
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            fill
            className="object-cover opacity-50"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <a href="mailto:mohamed.elmasoudi.dev@gmail.com">
            <MagicButton
              title="Email US"
              icon={<FaEnvelope />}
              position="left"
            />
          </a>
          <a
            href="https://wa.me/212777163865?text=Hi%2C%20I'm%20interested%20in%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Chat on WhatsApp"
              icon={<FaWhatsapp />}
              position="left"
              gradientClassName="bg-[conic-gradient(from_90deg_at_50%_50%,#7CFF8B_0%,#1D5C3A_50%,#7CFF8B_100%)]"
              innerClassName="bg-[#0c1f14] text-[#c2ffd9]"
            />
          </a>
        </div>
      </div>
      <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          Copyright © 2025 Mev Builds
        </p>

        <div className="flex items-center md:gap-3 gap-6 justify-center">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.ref} target="_blank" rel="noreferrer">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
