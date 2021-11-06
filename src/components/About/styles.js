import styled from "styled-components";
import Imagem from '../../images/learnmore.jpg';

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E7CDC2;
    padding: 8rem 0;
    @media screen and (max-width: 1100px){
        padding: 6rem 0;
    }
`;

export const AboutContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 75%;
    gap: 0 4rem;

    @media screen and (max-width: 860px){
        grid-template-columns: 1fr;
    }
`;

export const AboutImagem= styled.div`
    background-image: url(${Imagem});
    background-repeat: no-repeat;
    background-size: cover;
    width: 450px;
    height: 480px;
    border-radius: 20px;
    display: block;

    @media screen and (max-width:1200px){
        width: 370px;
        height: 400px;
    }
    @media screen and (max-width:1000px){
        width: 310px;
        height: 340px;
    }

    @media screen and (max-width: 860px){
        display: none;
    }
`;

export const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
`;

export const Title = styled.h1`
    font-family: 'Crimson Text', serif;
    font-size: 30px;
    font-weight: bold;
    color:#7E391B;

    @media screen and (max-width:1200px){
        font-size: 28px;
    }
`;


export const Desc = styled.h3`
    font-family: 'Crimson Text', serif;
    font-weight: 100;
    font-size: 20px;
    color:#7E391B;
    line-height: 2rem;
    margin: 2rem 0;
    
    @media screen and (max-width:1200px){
        line-height: 1.6rem;
        margin: 1rem 0;
    }
    @media screen and (max-width:1000px){
        line-height: 1.4rem;
        font-size: 16px;
        margin: 1.2rem 0;
    }
    @media screen and (max-width: 860px){
        font-size: 18px;
   }
`;
    
export const AboutButton = styled.button`
    width: 120px;
    height: 50px;
    background: #7E391B;
    color:#F8F8F8;
    border: none;
    border-radius: 10px;
    font-family: 'Crimson Text', serif;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
    background: #F8F8F8;
    color:#7E391B;
    transition: 0.3s ease-in;
    }
`;