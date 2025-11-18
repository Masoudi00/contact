"use client";

import { useEffect } from "react";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Companies from "@/components/Companies";

const Home = () => {
  useEffect(() => {
    const navigationEntries = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];
    const navigationType = navigationEntries[0]?.type;
    const legacyReload =
      typeof performance.navigation !== "undefined" &&
      performance.navigation.type === performance.navigation.TYPE_RELOAD;

    if (navigationType === "reload" || legacyReload) {
      window.location.replace("https://mevbuilds.com");
    }
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Companies />
        <Experience />
        <RecentProjects />
        <Approach />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
