import React, { useState } from "react";
import { Container } from "../../global/styles";
import { HeaderContainer, StyledUl, StyledHeader, StyledLi } from "./styles";
import { Typography } from "@mui/material";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Header = () => {
  let [open, setOpen] = useState('none');

  const handleClick = () => {
    setOpen((prev)=>prev==='none'?'flex':'none')
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderContainer>
          <a href="#">
            <Typography
              variant="h1"
              sx={{
                fontSize: "25px",
                color: "#2196f3",
                fontWeight: "700",
                // minHeight: "75px",
                display: "flex",
                alignItems: "center",
                minHeight: { sm: "fit-content", md: "75px" },
                padding: "15px",
              }}
            >
              ⚡Electro
            </Typography>
          </a>
          <StyledUl>
            <StyledLi>
              <a href="#articles">Articles</a>
            </StyledLi>
            <StyledLi>
              <a href="#gallery"> Gallery </a>
            </StyledLi>
            <StyledLi>
              <a href="#features">Features</a>
            </StyledLi>
            <StyledLi onClick={handleClick}>
              <a>Other Links</a>
            </StyledLi>
          </StyledUl>
        </HeaderContainer>
        <DropdownMenu open = {open} setOpen = {setOpen}/>
      </Container>
    </StyledHeader>
  );
};

export default Header;
