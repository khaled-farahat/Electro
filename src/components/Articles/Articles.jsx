import React from "react";
import Title from "../Title/Title";
import ArticleCard from "../ArticleCard/ArticleCard";
import art1 from "../../assets/cat-01.jpg";
import art2 from "../../assets/cat-02.jpg";
import art3 from "../../assets/cat-03.jpg";
import art4 from "../../assets/cat-04.jpg";
import art5 from "../../assets/cat-05.jpg";
import art6 from "../../assets/cat-06.jpg";
import art7 from "../../assets/cat-07.jpg";
import art8 from "../../assets/cat-08.jpg";

import { ArticlesContainer } from "./styles";
const Articles = () => {
  return (
    <section
      id="articles"
      style={{
        paddingTop: "60px",
      }}
    >
      <Title text="Articles" />
      <ArticlesContainer>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </ArticlesContainer>
    </section>
  );
};


const articles = [
  {
    image: art1,
    title: "Test Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
  },
  {
    image: art2,
    title: "Test Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
  },
  {
    image: art3,
    title: "Test Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
  },
  {
    image: art4,
    title: "Test Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
  },
  {
    image: art5,
    title: "Test Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
  },
  {
    image: art6,
    title: "Test Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
  },
  {
    image: art7,
    title: "Test Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
  },
  {
    image: art8,
    title: "Test Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
  },
];

export default Articles;
