import styled from "styled-components";

export const FeatureContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-color: #E7CDC2;
    padding: 4rem 0;
`;

export const FeatureTitle = styled.h1`
    color: #7E391B;
    font-weight: bold;

    @media screen and (max-width: 550px){
        font-size: 1.8rem;
    }
`;

export const CardArea = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 0 4rem;
   
   @media screen and (max-width:1100px){
     gap: 0 2rem;
   }
   @media screen and (max-width: 860px){
     grid-template-columns: 1fr;
     padding: 5rem 0;
     gap: 4rem 0;
   }
   @media screen and (max-width: 550px){
     grid-template-columns: 1fr;
     padding: 2.5rem 0;
   }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4rem auto;
    width: 300px;

    @media screen and (max-width:1100px){
       width: 250px;
   }
    @media screen and (max-width: 860px){
        margin: 0 auto;
        width: 450px;
   }

    @media screen and (max-width: 550px){
        width: 310px;
   }

`;

export const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const AreaText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 2rem;
    background-color: #7E391B;
    color:#FFFFFF;
    border-radius: 5px;
    font-weight: bold;
    margin-top: -1rem;
`;

export const Desc = styled.h3`
    font-size: 20px;
    font-weight: 100;
    color:#7E391B;
    text-align: justify;
    line-height: 1.5rem;
    margin-top: 1rem;

    @media screen and (max-width:1100px){
       font-size: 16px;
   }
   @media screen and (max-width: 860px){
    line-height: 1.8rem;
    font-size: 19px;
   }
   @media screen and (max-width: 550px){
    line-height: 1.5rem;
    font-size: 15px;
   }
`;
