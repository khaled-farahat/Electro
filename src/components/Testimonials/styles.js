import { styled } from "@mui/material";
import { Container } from "../../global/styles";



export const TestimonialsSection = styled('section')(({theme})=>({
  backgroundColor: '#ececec',
  paddingTop: '60px',
  marginBottom: '60px',
  paddingBottom: '30px',
}))

export const TestimonialsContainer = styled(Container)(({theme})=>({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  '@media (max-width:600px)':{
    justifyContent: 'center'
  },
}))




/***************************************************************************************/

export const TestimonialContainer = styled('div')(({theme})=>({

  display: 'flex',
  flexDirection: 'column',
  position: "relative",
  padding: '15px 20px',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 7%)',
  flexBasis: '31%',
  borderRadius: '5px',
  marginBottom: '40px',
  // gap: '8px',

  '& h2':{
    fontSize: '18px',
  },

  '& h3':{
    color: '#777',
    fontWeight: 'normal',
    fontSize: '18px',
  },

  '& p':{
    color: '#777',
  },

  "@media (max-width:1200px)":{
    flexBasis: '45%',
  },

  '@media (max-width:600px)':{
    flexBasis: '95%',
  },


}))

export const TestimonialImage = styled('figure')(({theme})=>({
  position: 'absolute',
  top:'-50px',
  right:'-10px',
  width:'100px',
  height:'100px',
  borderRadius: '50%',
  border: '10px solid #ececec',

  '& img':{
    width:'100%',
    height:'100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
}))
