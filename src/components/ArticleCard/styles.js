import { styled } from "@mui/material";
import { bounceRight } from "../../global/styles";


export const ArticleContainer = styled("div")(({ theme }) => ({
  boxShadow: "0 2px 15px rgba(0, 0, 0,  10%)",
  borderRadius: "6px",
  flexBasis: "23%",
  display: "flex",
  flexDirection: "column",
  marginBottom: "40px",
  transition: '0.2s ease-in',

  "&:hover": {
    boxShadow: "0 2px 15px rgba(0, 0, 0,  20%)",
    transform: 'translateY(-10px)',
    "svg":{
      animation: `${bounceRight} 1s infinite`
    }
  },

  "@media (max-width:1200px)":{
    flexBasis: '31%'
  },

  "@media (max-width:992px)":{
    flexBasis: '45%'
  },

  "@media (max-width:600px)":{
    flexBasis: '95%'
  },


}));

export const ArticleImage = styled("figure")(({ theme }) => ({
  minHeight: "60px",
  width: "100%",
  // marginBottom: "15px",

  "& img": {
    height: "auto",
    width: "100%",
    display: "block",
    borderRadius: "6px 6px 0 0",
  },
}));

export const ArticleContent = styled("div")(({ theme }) => ({
  padding: "15px",

  "& h1": {
    fontSize: "20px",
  },

  "& p": {
    color: "#777",
    lineHeight: "1.4",
  },
}));

export const ArticleFooter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  borderTop: "1px solid #eee",
  color: "#2196f3",

  "& a": {
    color: "#2196f3",
    fontWeight: "bold",
    cursor: "pointer",
  },

  "& svg": {
    // fontSize: "30px",
    fontWeight: 'bold',
  },
}));
