import styled from "@emotion/styled";
import { Container, moveLeftToRight } from "../../global/styles";

export const SkillsContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& figure": {
    flexBasis: "38%",
    img: {
      width: "100%",
      height: "auto",
    },
  },

  "@media (max-width:768px)": {
    justifyContent: "center",
    "& figure": {
      display: "none",
    },
  },
}));

export const SkillsDiv = styled("div")(({ theme }) => ({
  flexBasis: "60%",
  display: "flex",
  flexDirection: "column",
  "@media (max-width:768px)": {
    flexBasis: "95%",
  },
}));

/**********************************************************************************************************************/

export const SkillContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
}));

export const SkillTitle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",

  "& h1": {
    textTransform: "uppercase",
    // fontWeight: '700',
    fontSize: "1.2rem",
  },

  "& span": {
    display: "block",
    color: "#2196f3",
    fontSize: "0.6rem",
    fontWeight: "bold",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "0 5px",
  },
}));

export const SkillBar = styled("div")(({ theme }) => ({
  width: "100%",
  height: "25px",
  backgroundColor: "#eee",

  "& div span": {
    display: "block",
    height: "100%",
    width: "100%",
    backgroundColor: "#2196f3",
    animation: `${moveLeftToRight} 1s ease-in-out forwards`,
  },
}));
