import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        About Me
      </h1>

      <div className="max-w-3xl bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-2xl p-8 text-gray-800">
        <p className="text-lg leading-relaxed">
          I am <span className="font-semibold">Solomon Moughkaa Zahemen</span>, a
          visionary weaving together{" "}
          <span className="text-green-600 font-semibold">Faith</span> and{" "}
          <span className="text-blue-600 font-semibold">Technology</span> to
          design solutions that inspire, equip, and transform lives. <br /><br />
          My story is not only about coding lines of software but also about
          writing stories of impact. Every project I create is an act of faith
          expressed through innovation.
        </p>
      </div>
    </div>
  );
}

export default About;
