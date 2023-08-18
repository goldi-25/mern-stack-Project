import React from "react";
import { IEvent } from "../../../typings/event";
import styled from "styled-components";
import tw from 'twin.macro' ;
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";


interface IEventProps extends IEvent {}

const EventContainer = styled.div`
  width: 16em;
  min-height: 22em;
  max-height: 22em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-3
    sm:m-3
    md:m-6
  `};
`;

const EventThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const EventName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `};
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
  `};
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline-flex
    text-xs
    font-thin
  `};
`;

const EventDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `};
`;

const EventDetail = styled.span`
  ${tw`
    flex
    items-center
  `};
`;

const EventInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

const BookButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `};
`;

export function Event(props:IEventProps){
    const {name,thumbnailSrc,eventsType,price} = props;
return <EventContainer>
    <EventThumbnail>
        < img src={thumbnailSrc}/>
    </EventThumbnail>
    <EventName>
        {name}
    </EventName>
    <PricesContainer>
        <DailyPrice>${price} <SmallText>/Day</SmallText></DailyPrice>
    </PricesContainer>
    
<Seperator />
<EventDetailsContainer>
    <EventDetail>
        <SmallIcon><FontAwesomeIcon icon={faBookAtlas}/></SmallIcon>
        <EventInfo>{eventsType}</EventInfo>
    </EventDetail>
</EventDetailsContainer>
<BookButton text="Book Now" />
</EventContainer>
    
}