"use client";
import Image from "next/image";
import React from "react";
import { companies } from "@/data";

function Companies() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-16">
      {companies.map((company) => (
        <React.Fragment key={company.id}>
          <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
            <Image
              src={company.img}
              alt={company.name}
              width={40}
              height={40}
              className="md:w-10 w-6 h-auto"
            />
            <h1 className="md:text-xl text-base font-semibold text-white tracking-wide">
              {company.name}
            </h1>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Companies;
