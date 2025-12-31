import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="pointer-events-none h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center -z-10"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            MEV BUILDS
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Welcome to MEVBuilds — a full-stack development studio delivering modern, scalable web solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full mt-4 items-center justify-center">
            <a className="w-full md:w-auto" href="mailto:mohamed.elmasoudi.dev@gmail.com">
              <MagicButton
                title="Email US"
                icon={<FaEnvelope />}
                position="left"
              />
            </a>
            <a
              className="w-full md:w-auto"
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
      </div>
    </div>
  );
};

export default Hero;
