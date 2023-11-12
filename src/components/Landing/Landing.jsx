import React from "react";
import landingImage from "../../assets/landing-image.png";
import { LandingContainer, LandingSection, StyledFigure, StyledText } from "./styles";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import { bounce, debounce } from "../../global/styles";

const Landing = () => {
  return (
    <LandingSection>
      <LandingContainer>
        <StyledText>
          <h1>Welcome, To Electro World</h1>
          <p>
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </StyledText>
        <StyledFigure
          sx={{
            animation: `${debounce} 5s alternate infinite linear`,
          }}
        >
          <img src={landingImage} />
        </StyledFigure>
        <a href="#articles">
          <KeyboardDoubleArrowDownRoundedIcon
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "calc(50% - 1rem)",
              transform: "translateX(-50%)",
              fontSize: "3rem",
              color: "#2196f3",
              cursor: "pointer",
              animation: `${bounce} 1s infinite`,
              // "@keyframes bounce": {
              //   "0%, 100%": {
              //     transform: "translateY(0)",
              //   },
              //   "50%": {
              //     transform: "translateY(-10px)",
              //   },
              // },
              zIndex: 2,
            }}
          />
        </a>
      </LandingContainer>
    </LandingSection>
  );
};

export default Landing;
