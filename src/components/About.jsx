import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-20">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        About Me
      </h1>

      {/* Content */}
      <div className="max-w-3xl bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-2xl p-8 text-gray-800">
        <p className="text-lg leading-relaxed">
          I am <span className="font-semibold">Solomon Moughkaa Zahemen</span>, a visionary blending 
          <span className="text-green-600 font-semibold"> Faith</span> and 
          <span className="text-blue-600 font-semibold"> Technology</span> to 
          create innovative solutions that inspire and transform lives.  
          <br /><br />
          My journey is about more than code — it’s about impact. Every project 
          is a testimony that technology, when driven by purpose, can change the world.  
        </p>
      </div>
    </div>
  );
}

export default About;
