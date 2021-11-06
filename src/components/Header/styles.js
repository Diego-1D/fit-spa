import styled from "styled-components";
import HeaderImage from '../../images/header.png'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80vh;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HeaderImage});
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderHeading = styled.div`
    width:60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  
    @media screen and (max-width:1080px){
       width: 75%;
    } 

     @media screen and (max-width:680px){
       width: 90%;
    } 
`;

export const HeaderText = styled.h1`
    color:#FFFFFF;
    font-family: 'Crimson Text', serif;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 3px;
    line-height: 4rem;
    text-align: center;
    margin: 3rem 0;

    @media screen and (max-width:920px){
      font-size: 2.3rem;
    } 
    
    @media screen and (max-width:500px){
        font-size: 2rem;
        line-height: 3rem;
        letter-spacing: 6px;
    }
`;

export const Span = styled.span`
    color:#E7CDC2;
`;

export const HeaderButton = styled.button`
    padding: 0.65rem 1rem;
    background: #F8F8F8;
    color:#7E391B;
    border-radius: 10px;
    font-family: 'Crimson Text', serif;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in;
    
    &:hover{
        background: #7E391B;
        color:#F8F8F8;
        transition: 0.3s ease-in;
    }
`;