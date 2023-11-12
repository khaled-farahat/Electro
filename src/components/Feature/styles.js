import { styled } from "@mui/material";

export const FeatureContainer = styled("div")(({ theme, col }) => ({
  border: "1px solid #ccc",
  marginBottom: "30px",
  flexBasis: "31%",
  overflow: "hidden",

  "&:hover": {
    "& button": {
      color: "#fff",
    },
    "& button::after": {
      width: "100%",
    },
    "& figure::after": {
      borderWidth: "0px 600px 170px 0px",
    },
  },

  "@media (max-width:1200px)":{
    flexBasis: "45%",
  },

  "@media (max-width:600px)":{
    flexBasis: "95%",
  }

}));

export const FeatureImage = styled("figure")(({ theme, col }) => ({
  width: "100%",
  position: "relative",

  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
  },

  "&::before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    backgroundColor: col,
    opacity: ".5",
    zIndex: "1",
  },

  "&::after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderColor: "transparent transparent white transparent",
    borderStyle: "solid",
    borderWidth: "0px 0px 170px 500px",
    zIndex: 2,
    transition: "all .3s ease-in-out",
  },
}));

export const TextContainer = styled("div")(({ theme, col }) => ({
  // padding: "30px",
  textAlign: "center",

  "& h1": {
    fontSize: "40px",
    textTransform: "capitalize",
    position: "relative",
    width: "fit-content",
    marginRight: "auto",
    marginLeft: "auto",
  },

  "& h1::after": {
    content: "''",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "-5px",
    width: "70%",
    height: "5px",
    backgroundColor: col,
  },

  "& p": {
    lineHeight: "2",
    fontSize: "20px",
    margin: "30px 0",
    padding: "25px",
    color: "#777",
    width: "100%",
  },
}));

export const MoreButton = styled("button")(({ theme, col }) => ({
  display: "block",
  padding: "10px 20px",
  border: `3px solid ${col}`,
  borderRadius: "5px",
  backgroundColor: "transparent",
  color: col,
  fontSize: "20px",
  fontWeight: "bold",
  // padding: '15px',
  margin: "15px auto",
  cursor: "pointer",
  transition: "all .3s ease-in-out",
  position: "relative",

  "&::after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "100%",
    backgroundColor: col,
    left: "0",
    top: "0",
    zIndex: -1,
    transition: "all .3s ease-in-out",
  },
}));
