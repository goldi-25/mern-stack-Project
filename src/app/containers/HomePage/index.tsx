import { Footer } from "app/components/footer";
import React from "react";
import styled from "styled-components";
import tw from 'twin.macro' ;
import { Bookcard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import  { Navbar } from "../../components/navbar";
import { AboutUs } from "../aboutUs";
import { BookingSteps } from "../bookingSteps";
import { TopEvents } from "./topEvents";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
`}
`;

export function HomePage(
){
return( <PageContainer> 
    <Navbar />
    <TopSection />
    <Marginer direction="vertical" margin="4em"/>
    <Bookcard />
    <Marginer direction="vertical" margin="10em"/>
    <BookingSteps />
    <Marginer direction="vertical" margin="8em"/>
    <AboutUs />
    <Marginer direction="vertical" margin="8em"/>
    <TopEvents />
    <Footer />
    </PageContainer> 
    );
}
