import { styled } from "@mui/material";
import { Container } from "../../global/styles";

export const LandingSection = styled("section")(({ theme }) => ({
  minHeight: "calc(100vh - 75px)",
  backgroundColor: "#ececec",
  position: "relative",
  overflow: "hidden",

  "&::after": {
    content: "''",
    display: "block",
    height: "175px",
    backgroundColor: "white",
    width: "120%",
    position: "absolute",
    bottom: "-57px",
    // transform: "rotateZ(-7deg) translate(-30px, 10px)",
    transform: "skewY(-5deg)",
    // zIndex: -1,
  },

  // "&::before": {
  //   content: "''",
  //   position: "absolute",
  //   left: 0,
  //   top: "-40px",
  //   width:" 100%",
  //   height: "100%",
  //   backgroundColor: "#ececec",
  //   zIndex: -1,
  //   transform: "skewY(-6deg)",
  //   transformOrigin: "top left",
  // },
}));

export const LandingContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "40px 0",

  "@media (max-width: 992px)": {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: '80%',
  },
}));

export const StyledFigure = styled("figure")(({ theme }) => ({
  "& img": {
    width: "600px",
  },

  "@media (max-width: 992px)": {
    display: "none",
  },
}));

export const StyledText = styled("div")((theme) => ({
  paddingTop: "20px",

  "& h1": {
    fontSize: "42px",
    lineHeight: "1.1",
  },

  "& p": {
    color: "#666",
    fontSize: "24px",
    lineHeight: "1.7",
  },
}));
