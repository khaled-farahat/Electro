import React from "react";
import { Spikes } from "../../global/styles";
import Title from "../Title/Title";
import {
  DetailsSpan,
  GraySpan,
  IconContainer,
  NumberContainer,
  NumberSpan,
  ServiceCardContainer,
  ServicesContainer,
  ServicesSection,
} from "./styles";
import {
  Security,
  Handyman,
  Map,
  LaptopMac,
  ColorLens,
  Campaign,
} from "@mui/icons-material";

const ServiceCard = ({ service, index }) => {
  return (
    <ServiceCardContainer>
      <IconContainer>
        {service.icon}
        <h1>{service.title}</h1>
      </IconContainer>
      <NumberContainer>
        <NumberSpan>{index < 9 ? `0${index}` : index}</NumberSpan>
        {/* <GraySpan></GraySpan> */}
        <DetailsSpan>
          <a>Details</a>
        </DetailsSpan>
      </NumberContainer>
    </ServiceCardContainer>
  );
};

const Services = () => {
  return (
    <>
      <Spikes />
      <ServicesSection id="services">
        <Title text="services" />
        <ServicesContainer>
          {/* <ServiceCard service={service} index={1} /> */}
          {services.map((service, index) => (
            <ServiceCard service={service} index={index + 1} key={index} />
          ))}
        </ServicesContainer>
      </ServicesSection>
    </>
  );
};

const service = {
  icon: <Security />,
  title: "Security",
};

const services = [
  {
    icon: <Security />,
    title: "Security",
  },
  {
    icon: <Handyman />,
    title: "Fixing Issues",
  },
  {
    icon: <Map />,
    title: "Location",
  },
  {
    icon: <LaptopMac />,
    title: "Coding",
  },
  {
    icon: <ColorLens />,
    title: "Design",
  },
  {
    icon: <Campaign />,
    title: "Marketing",
  },
];

export default Services;
