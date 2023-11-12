import React from "react";
import {
  StepContainer,
  StepsDiv,
  TextContainer,
  WorkContainer,
  WorkSection,
} from "./styles";
import Title from "../Title/Title";
import workImg from "../../assets/work-steps.png";
import work1 from "../../assets/work-steps-1.png";
import work2 from "../../assets/work-steps-2.png";
import work3 from "../../assets/work-steps-3.png";

const Step = ({ step }) => {
  return (
    <StepContainer>
      <figure>
        <img src={step.image} alt={step.title} />
      </figure>
      <TextContainer>
        <h1>{step.title}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          nesciunt obcaecati quisquam quis laborum recusandae debitis vel
        </p>
      </TextContainer>
    </StepContainer>
  );
};

const Work = () => {
  return (
    <WorkSection id="work-steps">
      <Title text="How it Works ?" />
      <WorkContainer>
        <figure>
          <img src={workImg} alt="work-1" />
        </figure>
        <StepsDiv>
          {/* <Step step={step} /> */}
          {steps.map((step, index) => (
            <Step step={step} key={index} />
          ))}
        </StepsDiv>
      </WorkContainer>
    </WorkSection>
  );
};

const step = {
  title: "Business Analysis",
  image: work1,
};

const steps = [
  {
    title: "Business Analysis",
    image: work1,
  },
  {
    title: "Architecture",
    image: work2,
  },
  {
    title: "Developement",
    image: work3,
  },
];

export default Work;
