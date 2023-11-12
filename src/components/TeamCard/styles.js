import { styled } from "@mui/material";

export const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "31%",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  marginBottom: "30px",
  transition: "0.3s",
  // paddingRight: '2px',
  // flexGrow:1,

  "&::before": {
    content: "''",
    position: "absolute",
    height: "100%",
    width: "80%",
    backgroundColor: "#f3f3f3",
    top: 0,
    right: "-5px",
    zIndex: -3,
    borderRadius: "8px",
  },

  "&::after": {
    content: "''",
    position: "absolute",
    height: "100%",
    width: "0",
    backgroundColor: "#e4e4e4",
    top: 0,
    right: "-5px",
    zIndex: -2,
    borderRadius: "8px",
    transition: "0.3s",
  },

  "&:hover": {
    "::after": {
      width: "80%",
    },
    "img, h2, p": {
      filter: "grayscale(100%)",
    },
  },

  "@media (max-width:1200px)": {
    flexBasis: "48%",
  },

  "@media (max-width:992px)": {
    flexBasis: "40%",
    img: {
      width: "250px",
    },
  },

  "@media (max-width:768px)": {
    flexBasis: "90%",
    img: {
      width: "400px",
    },

    "&::before": {
      width: "100%",
      content: '""',
    },
    "&:hover": {
      "&::after": {
        width: "100%",
      },
    },
  },

  "@media (max-width:600px)": {
    img: {
      width: "220px",
    },
    justifyContent: 'flex-start'
  },
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  gap: 15,
  alignItems: "center",
  paddingTop: "60px",
  width: "100%",
  // paddingRight: '5px',
}));

export const StyledFigure = styled("figure")(({ theme }) => ({
  "& img": {
    width: "300px",
    height: "auto",
    borderRadius: "8px",
  },
}));

export const IconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  "& a": {
    color: "#777",
  },

  "& a:hover": {
    color: "#2196f3",
  },

  "& svg": {
    margin: "15px 10px",
  },
}));

export const TextContainer = styled("div")(({ theme }) => ({
  "& h2": {
    color: "#2196f3",
  },

  "& p": {
    // marginTop: '10px' ,
    marginBottom: "25px",
  },
}));
