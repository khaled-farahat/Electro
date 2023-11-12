import React from "react";
import {
  ArticleContainer,
  ArticleContent,
  ArticleFooter,
  ArticleImage,
} from "./styles";
import { TrendingFlat } from "@mui/icons-material";

const ArticleCard = ({ article }) => {
  return (
    <ArticleContainer>
      <ArticleImage>
        <img src={article.image} alt={article.title} />
      </ArticleImage>
      <ArticleContent>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </ArticleContent>
      <ArticleFooter>
        <a href="#">Read More</a>
        <TrendingFlat />
      </ArticleFooter>
    </ArticleContainer>
  );
};

export default ArticleCard;
