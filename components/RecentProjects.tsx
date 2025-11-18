"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid gap-8 mt-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <div
            key={item.id}
            className="rounded-[30px] border border-white/10 bg-[#0a0b1e] p-6 flex flex-col h-full shadow-[0_0_40px_rgba(0,0,0,0.25)]"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#13162D] aspect-[16/10] mb-6">
              <Image
                src={item.img}
                alt={`${item.title} screenshot`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <h2 className="font-semibold text-xl text-white mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-[#BEC1DD] leading-relaxed flex-1">
              {item.des}
            </p>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-9 h-9 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${6 * index}px)`,
                    }}
                  >
                    <Image
                      src={icon}
                      alt="tech icon"
                      width={28}
                      height={28}
                      className="p-1"
                    />
                  </div>
                ))}
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-purple font-semibold text-sm"
              >
                Check Live Site
                <FaLocationArrow className="ms-2" color="#CBACF9" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
