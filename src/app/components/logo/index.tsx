import React from "react";
import styled from "styled-components";
import tw from 'twin.macro' ;

import WeddingLogo from "./../../../image/mangalayam.png";

interface ILogoProps{
    color ? :"white" | "dark" ;
    bgColor ? :"white" | "dark" ;
}

const LogoContainer = styled.div`
${tw`
flex 
items-center
`}
`;
const LogoText = styled.div `

${tw`
text-xl
md:text-2xl
font-bold
text-black
m-1
`};
${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`as any ;

const Image = styled.div`
    width: auto ;
    ${tw`h-6 md:h-9`};


img {
    width : auto;
    height : 100% ;
}
`;



export function Logo (props:ILogoProps){
const {color,bgColor} = props;

    return(
        <LogoContainer>
            <Image>
                <img src = {bgColor === "white"? WeddingLogo :  WeddingLogo} />
            </Image>       
            <LogoText color={color || "dark"}>Mangalayam</LogoText>
         </LogoContainer>
    );
}