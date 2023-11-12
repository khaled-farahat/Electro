import React from "react";
import Title from "../Title/Title";
import {
  TestimonialContainer,
  TestimonialImage,
  TestimonialsContainer,
  TestimonialsSection,
} from "./styles";
import { Rating } from "@mui/material";
import avatar1 from "../../assets/avatar-01.png";
import avatar2 from "../../assets/avatar-02.png";
import avatar3 from "../../assets/avatar-03.png";
import avatar4 from "../../assets/avatar-04.png";
import avatar5 from "../../assets/avatar-05.png";
import avatar6 from "../../assets/avatar-06.png";

const Testimonial = ({ testimonial }) => {
  return (
    <TestimonialContainer>
      <TestimonialImage>
        <img src={testimonial.image} alt="" />
      </TestimonialImage>
      <h2>{testimonial.username}</h2>
      <h3>{testimonial.job}</h3>
      <Rating name="read-only" value={testimonial.rating} readOnly />
      <p>{testimonial.text}</p>
    </TestimonialContainer>
  );
};

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Title text="Testimonials" />
      <TestimonialsContainer>
        {/* <Testimonial testimonial={testimonial} /> */}
        {testimonials.map((testimonial, index) => (
          <Testimonial testimonial={testimonial} key={index} />
        ))}
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

const testimonial = {
  image: avatar1,
  username: "Mohamed Farag",
  job: "Web Developer",
  rating: 5,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
};

const testimonials = [
  {
    image: avatar1,
    username: "Mohamed Farag",
    job: "Full Stack Developer",
    rating: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    image: avatar2,
    username: "Mohamed Farag",
    job: "Web Developer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    image: avatar3,
    username: "Mohamed Farag",
    job: "Web Developer",
    rating: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    image: avatar4,
    username: "Mohamed Farag",
    job: "Web Developer",
    rating: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    image: avatar5,
    username: "Mohamed Farag",
    job: "Web Developer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    image: avatar6,
    username: "Mohamed Farag",
    job: "Web Developer",
    rating: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
];

export default Testimonials;
