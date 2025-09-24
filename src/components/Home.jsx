import React from "react";
import Hero from "./Hero";

function Home() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center">
      <Hero />
      <p className="mt-6 text-lg md:text-xl text-gray-200 italic max-w-2xl">
        “We merge <span className="font-semibold text-green-400">Faith</span> 
        and <span className="font-semibold text-green-400">Technology</span> 
        to help you inspire, innovate, and impact the world.”
      </p>
    </section>
  );
}

export default Home;
