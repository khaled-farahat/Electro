import { styled } from "@mui/material";

export const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom: "60px",
  textAlign: "center",
  border: "2px solid black",
  width: "fit-content",
  padding: "5px 20px",
  fontSize: "25px",
  textTransform: "uppercase",
  fontWeight: "bold",
  position: "relative",
  color: "black",
  transition: "0.3s linear",
  zIndex: 3,

  "&::before, &::after": {
    content: "''",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#2196f3",
    transition: "0.3s linear",
    zIndex: "-1",
  },

  "&::before": {
    left: "-25px",
  },

  "&::after": {
    right: "-25px",
  },

  "&:hover": {
    color: "white",
    borderColor: '#2196f3',
    "::before, ::after": {
      width: "52%",
      height: "102%",
      borderRadius: "0",
    },
    "::before": {
      left: "0",
    },

    "::after": {
      right: "0",
    },
  },
}));
