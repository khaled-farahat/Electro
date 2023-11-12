import { styled } from "@mui/material";
import { Container, flash } from "../../global/styles";

export const GallerySection = styled("section")(({ theme }) => ({
  // marginTop: "30px",
  backgroundColor: "#ececec",
  paddingTop: "70px",
  marginBottom: '60px',
  paddingBottom: "30px",
}));

export const GalleryContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  paddingBottom: "20px",
  justifyContent: "space-between",

  "@media (max-width:600px)": {
    justifyContent: "center",
  },
}));

export const GalleryPicture = styled("div")(({ theme }) => ({
  border: "15px solid white",
  flexBasis: "31%",
  boxShadow:
    "0px 12px 20px 0px rgba(0, 0, 0,  13%), 0px 2px 4px 0px rgba(0, 0, 0,  12%)",
  marginBottom: "30px",
  overflow: "hidden",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    display: "block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "0",
    height: "0",
    backgroundColor: "white",
    opacity: 0,
    transition: "0.15s ease-out",
  },

  "& img": {
    display: "block",
    width: "100%",
    height: "auto",
    transition: "0.3s linear",
  },

  "&:hover": {
    img: {
      transform: "rotateZ(6deg) scale(1.1)",
    },

    "::after": {
      width: "100%",
      height: "100%",
      animation: `${flash} 0.2s linear`,
    },
  },

  "@media (max-width:768px)": {
    flexBasis: "45%",
  },

  "@media (max-width:600px)": {
    flexBasis: "95%",
  },
}));


