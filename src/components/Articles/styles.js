import { styled } from "@mui/material";
import { Container } from "../../global/styles";

export const ArticlesContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  // gap: 7,
  marginBottom: "60px",
  // paddingTop: "70px",

  "@media (max-width:600px)": {
    justifyContent: "center",
  },
}));
