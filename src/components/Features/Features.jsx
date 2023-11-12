import React from "react";
import Feature from "../Feature/Feature";
import Title from "../Title/Title";
import { FeaturesContainer } from "./styles";
import feat1 from "../../assets/features-01.jpg";
import feat2 from "../../assets/features-02.jpg";
import feat3 from "../../assets/features-03.jpg";

const Features = () => {
  return (
    <section id="features" style={{
      paddingTop: "60px",
      marginBottom: "30px",
    }}>
      <Title text="Features" />
      <FeaturesContainer>
        {features.map((feature, i) => (
          <Feature feature={feature} key={i} />
        ))}
      </FeaturesContainer>
    </section>
  );
};

const features = [
  {
    image: feat1,
    color: "red",
    title: "quality",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
  },

  {
    image: feat2,
    color: "green",
    title: "time",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
  },

  {
    image: feat3,
    color: "blue",
    title: "passion",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
  },
];

export default Features;
