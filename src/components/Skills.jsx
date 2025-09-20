import React from "react";

const Skills = () => {
  const skills = ["React", "Tailwind CSS", "Full-Stack Dev", "AI", "Web3"];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-brand">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
