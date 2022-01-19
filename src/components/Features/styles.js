import styled from "styled-components";

export const FeatureContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    width: 85%;
    display: flex;
    justify-content: space-between;
   
   @media screen and (max-width:1140px){
        flex-direction: column;
        align-items: center;
   }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 30px 0px;

    @media screen and (max-width:1140px){
        flex-direction: column;
        width: 80%;
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
`;
