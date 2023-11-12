import { styled } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export const StyledHeader = styled("header")(({ theme }) => ({
  boxShadow: "0 0 10px #ddd",
  position: "relative",
}));

export const HeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "background.default",
  fontSize: "20px",
  position: "relative",
  // minHeight: "75px",

  "@media (max-width:768px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));

export const StyledUl = styled("ul")(({ theme }) => ({
  display: "flex",
  color: "black",
  "@media (max-width:768px)": {
    fontSize: "0.9rem",
  },
}));

export const StyledLi = styled("li")(({ theme }) => ({
  color: "black",
  position: "relative",
  minHeight: "75px",
  display: "flex",
  alignItems: "center",
  padding: "0.5rem 1.8rem",
  cursor: "pointer",

  "&::before": {
    content: "''",
    position: "absolute",
    left: "0",
    top: "0",
    width: "0",
    height: "95%",
    backgroundColor: "#fafafa",
    borderTop: "5px solid #2196f3",
    transition: "0.2s linear",
    zIndex: "-1",
  },

  "&:hover::before": {
    // animation: '0.2s linear forwards LeftToRight  ',
    width: "100%",
  },

  "& a": {
    color: "black",
    zIndex: "2",
  },
  "&:hover a": {
    color: "#2196f3",
  },

  "@media (max-width:767px)": {
    padding: "5px 10px",
    minHeight: "fit-content",
  },
}));
