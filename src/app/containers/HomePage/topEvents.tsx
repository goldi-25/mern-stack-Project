import React, { useState } from "react";
import styled from "styled-components";
import tw from 'twin.macro' ;
import { IEvent } from "../../../typings/event";
import { Event } from "../../components/event";
import MadhuriDixit from "image/MadhuriDixit.jpeg";
import NoraFatehi from "image/NoraFatehi.jpg";
import ArjitSingh from "image/arijitsingh.jpg";
import Carousel,{Dots,slidesToShowPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { current } from "@reduxjs/toolkit";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "app/components/responsive";

const TopEventsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const EventsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

export function TopEvents() {

const[current,setCurrent] = useState(0);

const isMobile = useMediaQuery({maxWidth:SCREENS.sm});


     const testEvent : IEvent = {
        name: "Madhuri Dixit",
        thumbnailSrc: MadhuriDixit,
        price: 70000,
        eventsType: "Dance",
    };
    const testEvent2 : IEvent = {
        name: "Arjit Singh",
        thumbnailSrc: ArjitSingh,
        price: 50000,
        eventsType: "Singing",
    };

     const testEvent3 : IEvent = {
          name: "Nora Fatehi",
          thumbnailSrc: NoraFatehi,
          price: 50000,
          eventsType: "Singing",
      };

const events=[
            <Event {...testEvent}/>,
            <Event {...testEvent2}/>,
            <Event {...testEvent3}/>,
            <Event {...testEvent}/>,
            <Event {...testEvent2}/>,
            <Event {...testEvent3}/>,
];

const numberOfDots=isMobile ? events.length:Math.ceil(events.length/3);
 return (
    <TopEventsContainer>
        <Title>Explore Our Top Events </Title>
        <EventsContainer>
        <Carousel 
        value={current} 
        onChange={setCurrent} 
        slides={events}
        
            plugins={[
                "clickTochange",
                {
                resolve:slidesToShowPlugin,
                options:{
                    numberOfSlides:3,
                },
            },
            ]} 
breakpoints={{
    640:{
        plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ],
        },
        900: {
          plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ],
        },
      } 
    }
 />
<Dots value={current} onChange={setCurrent} number ={numberOfDots}/>
        </EventsContainer>
    </TopEventsContainer>
    );  
}

