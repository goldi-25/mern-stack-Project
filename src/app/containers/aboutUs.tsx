import React from "react";
import styled from "styled-components";
import tw from 'twin.macro' ;
import { SCREENS } from "../components/responsive";

import TwoHands from "./../../image/twohands.jpg" ;

const AboutUsContainer = styled.div`
${tw`
w-full
flex
flex-wrap
items-center
justify-center
pt-4
pb-4
pr-7
pl-7
md:pl-0
md:pr-0
bg-white
`};
`;

const WeddingContainer = styled.div`
width:auto;
height: 15em;
margin-left : -30px;

img{
    width:auto;
    height:100%;
}

@media(min-width:${SCREENS.md}){
    height:28em;
}

@media(min-width:${SCREENS.lg}){
    height:30em;
}

@media(min-width:${SCREENS["2xl"]}){
    height:35em;
    scroll-margin-left:4em;
}

`;

const InfoContainer =styled.div`
${tw`
md:w-1/2
flex
flex-col
md:ml-6
2xl:ml-16
`};
`;

const Title =styled.h1`
${tw`
text-black
text-2xl
md:text-5xl
font-extrabold
md:leading-normal
`};
`;

const InfoText = styled.p`
${tw`
md:max-w-2xl
text-sm
md:text-base
text-gray-500
font-normal
mt-4
`};
`;

export function AboutUs(){
    return (<AboutUsContainer>
        <WeddingContainer>
<img src={TwoHands} />
        </WeddingContainer>
        <InfoContainer>
            <Title>Mangalayam-Your Personal Wedding Planner.</Title>
            <InfoText>
                From photographers to wedding priests,Mangalayam has many active vendors for you to choose from.
                <br />
                Kick-start your wedding shopping here from the comfort of your home.
                
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>
    );

}

