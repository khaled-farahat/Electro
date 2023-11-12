import React from "react";
import { FeatureContainer, FeatureImage, MoreButton, TextContainer } from "./styles";

const Feature = ({ feature }) => {
  return (
    <FeatureContainer col={feature.color}>
      <FeatureImage col={feature.color}>
        <img src={feature.image} />
      </FeatureImage>

      <TextContainer  col = {feature.color}>
        <h1>{feature.title}</h1>
        <p>{feature.description}</p>
      </TextContainer>
      <MoreButton col = {feature.color}>More</MoreButton>
    </FeatureContainer>
  );
};

export default Feature;
