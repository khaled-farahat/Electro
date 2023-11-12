import { styled } from "@mui/material";
import { Container } from "../../global/styles";

export const FeaturesContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",

  "@media (max-width:600px)": {
    justifyContent: "center",
  },
}));
