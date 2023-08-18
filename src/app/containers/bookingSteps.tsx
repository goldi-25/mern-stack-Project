import { faBookBookmark, faCalendar, faCalendarAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from 'twin.macro' ;


const Container = styled.div`
${tw`
flex
flex-col
w-full
items-center
pt-3
pb-3
lg:pt-6
lg:pb-6
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

const StepsContainer = styled.div`
${tw`
flex
flex-wrap
justify-evenly
mt-7
lg:mt-16
`};
`;

const StepContainer = styled.div`
${tw`
flex
flex-col
md:w-96
transition-colors
items-center
hover:text-red-500
m-3
`};
`;

const Step = styled.div`
box-shadow:0 1.3em 12px -3px rgba(0,0,0,0.4); 
${tw`
flex
rounded-lg
justify-center
p-6
`};
`;

const StepTitle = styled.h4`
${tw`
text-black
text-lg
font-semibold
mt-4
`};
`;

const StepDescription=styled.p`
${tw`
w-10/12
text-xs
md:text-sm
text-center
text-gray-600
`};
`;

const StepIcon=styled.span`
${tw`
text-red-500
text-3xl
`};
`;

export function BookingSteps(){
    return <Container>
        <Title>OUR WORKING STEPS</Title>
        <StepsContainer>
            <StepContainer>
                <Step>
                <StepIcon>
                    <FontAwesomeIcon icon = {faMapMarkedAlt}/>
                </StepIcon>
                </Step>
                <StepTitle>Choose Location </StepTitle>
                <StepDescription>Find the nearest memories event point and book your event</StepDescription>
            </StepContainer>

            <StepContainer>
                <Step>
                <StepIcon>
                    <FontAwesomeIcon icon = {faCalendarAlt}/>
                </StepIcon>
                </Step>
                <StepTitle> Pick-Up Event Date </StepTitle>
                <StepDescription>Pickup the Best Date for your events.</StepDescription>
            </StepContainer>

            <StepContainer>
                <Step>
                <StepIcon>
                    <FontAwesomeIcon icon = {faBookBookmark}/>
                </StepIcon>
                </Step>
                <StepTitle>Book Your events </StepTitle>
                <StepDescription>Every love story is beautiful, but yours should be unique.Fresh ideas for your event</StepDescription>
            </StepContainer>
        </StepsContainer>
    </Container>   
}