import React from "react";
import Title from "../Title/Title";
import {
  EventContainer,
  EventWrapper,
  EventsContainer,
  SubscribeContainer,
  TextContainer,
  Time,
  TimeContainer,
} from "./styles";
import events from "../../assets/events.png";

const Events = () => {
  return (
    <section
      id="events"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <Title text={"latest events"} />
      <EventsContainer>
        <EventWrapper>
          <figure>
            <img src={events} alt="event" />
          </figure>
          <EventContainer>
            <TimeContainer>
              <Time>
                <span>7</span>
                <span>days</span>
              </Time>
              <Time>
                <span>7</span>
                <span>hours</span>
              </Time>
              <Time>
                <span>7</span>
                <span>minutes</span>
              </Time>
              <Time>
                <span>7</span>
                <span>seconds</span>
              </Time>
            </TimeContainer>
            <TextContainer>
              <h1>Tech Masters Event 2023</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
                tenetur doloremque iusto ut adipisci quam ratione aliquam
                excepturi nulla in harum, veritatis porro
              </p>
            </TextContainer>
          </EventContainer>
        </EventWrapper>

        <SubscribeContainer>
          <input type="email" placeholder="Enter Your Email"/>
          <button>Subscribe</button>
        </SubscribeContainer>
      </EventsContainer>
    </section>
  );
};

export default Events;
