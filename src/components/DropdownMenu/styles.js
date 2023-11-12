import { styled } from "@mui/material";
import { Container } from "../../global/styles";

export const DropdownContainer = styled(Container)(({ theme }) => ({
  position: "absolute",
  top: "calc(100%)",
  display: "flex",
  // justifyContent: "space-between",
  padding: "30px",
  zIndex: "100",
  gap: "15px",
  backgroundColor: 'white',
  // opacity: 0,
  // display: "none",
  transition: "0.3s linear",

  "@media (max-width:1200px)": {
    "& figure img": {
      width: "400px",
    },
  },

  "@media (max-width:992px)": {
    "& figure": {
      display: "none",
    },

    "@media (max-width:768px)": {
      "&": {
        flexDirection: "column",
        width: "95%",
        padding: 0,
        gap: 0,
        marginTop: "3px",
      },

      "& ul:last-child": {
        borderTop: "1px solid   #e9e6e6",
      },
    },

    "& > *": {
      flex: 1,
    },
  },

  borderBottom: "3px solid #2196f3",
}));

export const StyledLi = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0.5rem 1.8rem",
  flexDirection: "row",
  fontWeight: "700",
  fontSize: "1.2rem",
  position: "relative",
  cursor: "pointer",

  "&:not(:last-child)": {
    borderBottom: "1px solid #e9e6e6",
  },

  "&::before": {
    content: "''",
    position: "absolute",
    left: "0",
    height: "100%",
    backgroundColor: "#fafafa",
    width: "0",
    transition: "0.3s linear",
    zIndex: "-1",
  },

  "&:hover::before": {
    width: "100%",
  },

  "& a": {
    display: "flex",
    alignItems: "center",
    color: "#2196f3",
    gap: 7,
    zIndex: "2",
    // padding: '15px'
  },

  // "@media (max-width:767px)": {
  //   "&": {
  //     maxWidth: '100%',
  //     padding: '0.5rem',
  //   },
  // },
}));

