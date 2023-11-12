import React from "react";
import {
  CardContainer,
  IconsContainer,
  ImageContainer,
  StyledFigure,
  TextContainer,
} from "./styles";
import { YouTube, Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const TeamCard = ({ member }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <StyledFigure>
          <img src={member.image} alt="" />
        </StyledFigure>
        <IconsContainer>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <LinkedIn />
          </a>
          <a href="#">
            <YouTube />
          </a>
        </IconsContainer>
      </ImageContainer>
      <TextContainer>
        <h2>{member.name}</h2>
        <p>{member.description}</p>
      </TextContainer>
    </CardContainer>
  );
};

export default TeamCard;
