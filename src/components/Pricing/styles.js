import { styled } from "@mui/material";
import { Container } from "../../global/styles";

export const PricingSection = styled("section")(({ theme }) => ({
  padding: "100px 0",
  backgroundColor: "#ececec",
}));

export const PricingContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: 'wrap',


  "@media (max-width:768px)":{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

}));

/*********************************************************************************************************************/
export const PlanContainer = styled("div")(({ theme, isMostPopular }) => ({
  flexBasis: "31%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0",
  boxShadow: "0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%)",
  backgroundColor: "white",
  position: "relative",
  transform: `translateY(${isMostPopular ? "-20px" : "0"})`,

  "& .title": {
    textTransform: "capitalize",
  },

  "& figure": {
    width: "90px",
    marginTop: "30px",
    marginBottom: "30px",
    img: {
      width: "100%",
    },
  },

  "& .cost": {
    fontSize: "60px",
    fontWeight: "bold",
    color: "#2196f3",
    position: "relative",
    marginBottom: "20px",
    "&::after": {
      display: "block",
      content: "'Per Month'",
      position: "absolute",
      bottom: "-5px",
      transform: "translateX(-50%)",
      left: "65%",
      fontSize: "16px",
      color: "#777",
      width: "100%",
      fontWeight: "normal",
    },
  },
}));

export const PropertiesContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  // justifyContent: 'flex-start',

  "& p": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "15px 20px",
    fontSize: "16px",
    borderTop: "1px solid #eee",
    "& svg": {
      marginRight: "10px",
      color: "#2196f3",
      fontWeight: "bold",
    },
  },
}));

export const ChooseButton = styled("button")(({ theme }) => ({
  marginTop: "15px",
  marginBottom: "15px",
  padding: "15px 20px",
  border: "2px solid #2196f3",
  borderRadius: "5px",
  backgroundColor: "white",
  color: "#2196f3",
  fontWeight: "bold",
  fontSize: "15px",
  cursor: "pointer",
  transition: "0.3s",

  "&:hover": {
    backgroundColor: "#2196f3",
    color: "white",
  },
}));

export const MostPopular = styled("div")(({ theme }) => ({
  display: "block",
  position: "absolute",
  backgroundColor: "#2196f3",
  color: "white",
  transform: "rotateZ(90deg)",
  padding: "0px 25px 0px 10px",
  fontSize: "18px",
  fontWeight: "bold",
  top: "53px",
  right: "-20px",

  "& span": {
    display: "block",
    position: "relative",
    width: "100%",
    "::after": {
      content: "''",
      borderWidth: "16px",
      borderStyle: "solid",
      borderColor: "transparent white transparent transparent",
      position: "absolute",
      top: 0,
      right: "-25px",
    },
  },
}));
