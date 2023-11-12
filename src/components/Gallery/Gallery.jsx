import React from "react";
import Title from "../Title/Title";
import {
  GallerySection,
  GalleryContainer,
  GalleryPicture,
} from "./styles";
import {Spikes} from "../../global/styles"
import gal1 from "../../assets/gallery-01.png";
import gal2 from "../../assets/gallery-02.png";
import gal3 from "../../assets/gallery-03.jpg";
import gal4 from "../../assets/gallery-04.png";
import gal5 from "../../assets/gallery-05.jpg";
import gal6 from "../../assets/gallery-06.png";

const GalleryCard = ({ pic }) => {
  return (
    <GalleryPicture>
      <img src={pic} alt="" />
    </GalleryPicture>
  );
};

const Gallery = () => {
  return (
    <>
      <Spikes />
      <GallerySection id="gallery">
        <Title text="gallery" />
        <GalleryContainer>
          {pics.map((pic, i) => (
            <GalleryCard key={i} pic={pic} />
          ))}
        </GalleryContainer>
      </GallerySection>
    </>
  );
};

const pics = [gal1, gal2, gal3, gal4, gal5, gal6];

export default Gallery;
