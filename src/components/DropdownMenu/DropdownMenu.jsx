import React from "react";
import { DropdownContainer, StyledLi } from "./styles";
import megaMenu from "../../assets/megamenu.png";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import {
  Apartment,
  CalendarMonth,
  CheckCircleOutline,
  ContentPaste,
  Leaderboard,
  Percent,
  PlayCircleOutline,
} from "@mui/icons-material";

const DropdownMenu = ({open, setOpen}) => {
  return (
    <DropdownContainer style={{display:open}}>
      <figure>
        <img src={megaMenu} />
      </figure>
      <ul onClick={()=>{setOpen('none')}}>
        <StyledLi>
          <a href="#testimonials">
            <QuestionAnswerOutlinedIcon />
            Testimonials
          </a>
        </StyledLi>
        <StyledLi>
          <a href="#team">
            <PersonOutlineOutlinedIcon />
            Team Members
          </a>
        </StyledLi>
        <StyledLi>
          <a href="#services">
            <Apartment />
            Services
          </a>
        </StyledLi>
        <StyledLi>
          <a href="#our-skills">
            <CheckCircleOutline />
            Our Skills
          </a>
        </StyledLi>
        <StyledLi>
          <a href="#work-steps">
            <ContentPaste />
            How It Works
          </a>
        </StyledLi>
      </ul>

      <ul onClick={()=>{setOpen('none')}}>
        <StyledLi>
          <a href="#events">
            <CalendarMonth />
            Events
          </a>
        </StyledLi>
        <StyledLi>
          <a href="#pricing">
            <StorageRoundedIcon />
            Pricing Plans
          </a>
        </StyledLi>
        <StyledLi>
          <a href="#video">
            <PlayCircleOutline />
            Top Videos
          </a>
        </StyledLi>
        <StyledLi>
          <a href="#stats">
            <Leaderboard />
            Stats
          </a>
        </StyledLi>
        <StyledLi>
          <a href="#discount">
            <Percent />
            Request A Discount
          </a>
        </StyledLi>
      </ul>
    </DropdownContainer>
  );
};

export default DropdownMenu;
