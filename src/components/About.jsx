import React from "react";
import banner from "../assets/images/banner.jpg";

function About() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-20 overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 drop-shadow-lg">
          About Me
        </h1>

        <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-lg text-gray-200">
          <p className="text-lg md:text-xl leading-relaxed">
            I am{" "}
            <span className="font-semibold text-white">
              Solomon Moughkaa Zahemen
            </span>
            , a visionary weaving together{" "}
            <span className="text-green-400 font-semibold">Faith</span> and{" "}
            <span className="text-blue-400 font-semibold">Technology</span> to
            design solutions that inspire, equip, and transform lives.
            <br />
            <br />
            My story is not only about coding lines of software but also about
            writing stories of impact. Every project I create is an act of faith
            expressed through innovation — blending excellence, creativity, and
            purpose.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
