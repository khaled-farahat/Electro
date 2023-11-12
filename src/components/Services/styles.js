import { styled } from "@mui/material";
import { Container } from "../../global/styles";

export const ServicesSection = styled("section")(({ theme }) => ({
  backgroundColor: "#ececec",
  paddingTop: "60px",
  paddingBottom: "60px",
}));

export const ServicesContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",

  "@media (max-width:600px)": {
    justifyContent: "center",
  },

}));

/**********************************************************************************************************************/

export const ServiceCardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "30%",
  backgroundColor: "white",
  boxShadow: "0 12px 20px 0 rgba(0, 0, 0, 13%), 0 2px 4px 0 rgba(0, 0, 0, 12%)",
  marginBottom: "30px",
  position: "relative",
  transition: "0.3s",

  "&::before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    height: "3px",
    width: "0",
    backgroundColor: "#2196f3",
    transition: "0.3s",
  },

  "&:hover": {
    "&::before": {
      width: "100%",
    },
    transform: "translateY(-10px)",
  },

  "@media (max-width:768px)": {
    flexBasis: "48%",
  },

  "@media (max-width:600px)": {
    flexBasis: "95%",
  },
}));

export const IconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "30px",
  paddingBottom: "30px",

  "& svg": {
    color: "#d5d5d5",
    fontSize: "80px",
  },

  "& h1": {
    color: "#2196f3",
  },
}));

export const NumberContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  justifyContent: "space-between",
  backgroundColor: "#f9f9f9",
}));

export const NumberSpan = styled("span")(({ theme }) => ({
  display: "block",
  backgroundColor: "#2196f3",
  color: "white",
  padding: "0px 30px",
  fontSize: "27px",
  fontWeight: "bold",
  position: "relative",

  "&::after": {
    content: "''",
    position: "absolute",
    top: "-30px",
    right: "-42px",
    height: "170%",
    width: "50px",
    backgroundColor: "#d5d5d5",
    transform: "skewX(-25deg) skewY(6deg) ",
  },
}));

export const GraySpan = styled("span")(({ theme }) => ({
  // display: 'block',
  // backgroundColor: '#d5d5d5',
  // height: '100%',
}));

export const DetailsSpan = styled("span")(({ theme }) => ({
  display: "block",
  color: "#2196f3",
  // flexGrow: 1,
  // alignSelf: "flex-end",
  padding: "10px",
  paddingRight: "15px",
}));
