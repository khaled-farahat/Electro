import { styled } from "@mui/material";
import { Container } from "../../global/styles";

export const EventsContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const EventWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& > figure": {
    flexBasis: "40%",
    "& > img": {
      width: "100%",
    },
  },

  "@media (max-width:992px)": {
    // flexDirection: "column",
    justifyContent: "center",
    "& > figure": {
      display: "none",
    },
  },
}));

export const EventContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  flexDirection: "column",
  flexBasis: "65%",
  "@media (max-width:992px)": {
    flexGrow: 1,
  },
}));

export const TimeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 20,
  marginBottom: "20px",
}));

export const Time = styled("div")(({ theme }) => ({
  border: "1px solid #d4d4d4",
  borderRadius: "6px",
  transition: "0.3s",

  "& > span": {
    display: "block",
  },

  "& span:last-child": {
    padding: "0px 15px",
    borderTop: "1px solid #d4d4d4",
    fontSize: "13px",
    textTransform: "capitalize",
  },

  "& span:first-child": {
    fontSize: "50px",
    fontWeight: "bold",
    padding: "10px 25px",
    color: "#2196f3",
  },

  "@media (max-width:768px)": {
    "& span:first-child": {
      padding: "10px 15px",
    },
  },

  "&:hover": {
    borderColor: "#1787e0",
    "& span:last-child": {
      borderTopColor: "#1787e0",
    },
  },
}));

export const TextContainer = styled("div")(({ theme }) => ({
  "& h1": {
    fontSize: "35px",
  },

  "& p": {
    lineHeight: " 1.7",
    fontSize: "19px",
    color: "#777",
  },
}));

export const SubscribeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#f6f5f5",
  padding: "20px 30px",
  borderRadius: "40px",
  marginTop: "100px",

  "& input": {
    border: "none",
    outline: "none",
    padding: "20px 15px",
    borderRadius: "40px",
    backgroundColor: "#fff",
    marginRight: "20px",
    width: "400px",
    "&::placeholder": {
      color: "#777",
    },
  },

  "& button": {
    border: "none",
    outline: "none",
    padding: "20px 20px",
    borderRadius: "40px",
    backgroundColor: "#2196f3",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#1787e0",
    },
  },

  "@media (max-width:768px)": {
    flexDirection: "column",
    width: "95%",
    borderRadius: 0,
    "& input": {
      width: "100%",
      marginBottom: "20px",
      borderRadius: 0,
    },
    "& button": {
      width: "100%",
      borderRadius: 0,
    },
  },
}));
