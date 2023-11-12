import { styled } from "@mui/material";
import { Container } from "../../global/styles";

export const TeamContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: 30,

  "@media (max-width:992px)": {
    // justifyContent: "space-between",
    justifyContent: "center",
  },

  "@media (max-width: 768px)": {
    justifyContent: "center",
  },
}));
