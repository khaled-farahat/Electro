import { styled } from "@mui/material";
import { Container } from "../../global/styles";

export const WorkSection = styled("section")(({ theme }) => ({
  backgroundColor: "#ececec",
  padding: "60px 0",
}));

export const WorkContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& > figure": {
    flexBasis: "48%",
  },

  "& > figure img": {
    width: "100%",
  },

  "@media (max-width:992px)": {
    flexDirection: "column",
    justifyContent: "center",
  },

  "@media (max-width:600px)": {
    "& > figure": {
      maxWidth: "95%",
    },
  },
}));

export const StepsDiv = styled("div")(({ theme }) => ({
  flexBasis: "48%",
}));

/**********************************************************************************************************************/

export const StepContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "25px 20px",
  backgroundColor: "#f6f5f5",
  border: "1px solid white",
  borderRadius: "6px",
  gap: 30,
  position: "relative",
  marginBottom: "20px",

  "& figure": {
    flexBasis: "35%",
    zIndex: 2,
    "& img": {
      width: "100%",
    },
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "0",
    height: "0",
    backgroundColor: "#ededed",
    transition: "0.3s",
    zIndex: 1,
  },

  "&:hover": {
    "&::after": {
      width: "100%",
      height: "100%",
    },
  },

  "@media (max-width:600px)": {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& figure": {
      maxWidth: "30%",
    },
  },
}));

export const TextContainer = styled("div")(({ theme }) => ({
  zIndex: 2,

  "& p": {
    color: "#777",
    fontSize: "18px",
  },

  "@media (max-width:600px)": {
    textAlign: "center",
  },
}));
