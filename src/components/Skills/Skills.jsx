import React from "react";
import Title from "../Title/Title";
import {
  SkillBar,
  SkillContainer,
  SkillTitle,
  SkillsContainer,
  SkillsDiv,
} from "./styles";
import screen from "../../assets/skills.png";

const Skill = ({ skill }) => {
  return (
    <SkillContainer>
      <SkillTitle>
        <h1>{skill.title}</h1>
        <span>{`${skill.percentage}%`}</span>
      </SkillTitle>
      <SkillBar>
        <div
          style={{
            width: `${skill.percentage}%`,
            height: "100%",
          }}
        >
          <span></span>
        </div>
      </SkillBar>
    </SkillContainer>
  );
};

const Skills = () => {
  return (
    <section
      id="our-skills"
      style={{
        paddingTop: "60px",
        marginBottom: '60px',
      }}
    >
      <Title text="our skills" />
      <SkillsContainer>
        <figure>
          <img src={screen} alt="skill" />
        </figure>
        <SkillsDiv>
          {/* <Skill skill={skill} /> */}
          {skills.map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
        </SkillsDiv>
      </SkillsContainer>
    </section>
  );
};

const skill = {
  title: "Html",
  percentage: 80,
};

const skills = [
  {
    title: "Html",
    percentage: 80,
  },
  {
    title: "React",
    percentage: 95,
  },
  {
    title: "css",
    percentage: 90,
  },
  {
    title: "rails",
    percentage: 50,
  },
];

export default Skills;
