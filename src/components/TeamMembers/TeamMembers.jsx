import React from "react";
import Title from "../Title/Title";
import { TeamContainer } from "./styles";
import TeamCard from "../TeamCard/TeamCard";
import mem1 from "../../assets/team-01.jpg";
import mem2 from "../../assets/team-02.jpg";
import mem3 from "../../assets/team-03.jpg";
import mem4 from "../../assets/team-04.jpg";
import mem5 from "../../assets/team-05.png";
import mem6 from "../../assets/team-06.png";
import mem7 from "../../assets/team-07.jpg";
import mem8 from "../../assets/team-08.jpg";

const TeamMembers = () => {
  return (
    <section
      id="team"
      style={{
        paddingTop: "60px",
        marginBottom: '30px',
      }}
    >
      <Title text="team member" />
      <TeamContainer>
        {/* <TeamCard member={member} /> */}
        {members.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </TeamContainer>
    </section>
  );
};

const members = [
  {
    name: "Name",
    description: "Simple Short Description",
    image: mem1,
  },
  {
    name: "Name",
    description: "Simple Short Description",
    image: mem2,
  },
  {
    name: "Name",
    description: "Simple Short Description",
    image: mem3,
  },
  {
    name: "Name",
    description: "Simple Short Description",
    image: mem4,
  },
  {
    name: "Name",
    description: "Simple Short Description",
    image: mem5,
  },
  {
    name: "Name",
    description: "Simple Short Description",
    image: mem6,
  },
  {
    name: "Name",
    description: "Simple Short Description",
    image: mem7,
  },
  {
    name: "Name",
    description: "Simple Short Description",
    image: mem8,
  },
];

export default TeamMembers;
