import React from "react";

const skillsContent = [
  {
    name: "React.Jsx",
    skillPercent: "65",
  },
  {
    name: "HTML/CSS",
    skillPercent: "90",
  },
  {
    name: "Ionic",
    skillPercent: "85",
  },
  {
    name: "Figma/Adobe XD",
    skillPercent: "55",
  },
  {
    name: "Java",
    skillPercent: "80",
  },
  {
    name: "Inkscape",
    skillPercent: "80",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
