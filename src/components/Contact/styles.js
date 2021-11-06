import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    background-color: #7E391B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 890px){
        padding: 2rem 0;
    }
 
`;
export const ContactTitle = styled.h1`
    color: #E7CDC2;
    font-weight: bold;
    margin: 3rem 0;
`;
export const Form = styled.form`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    @media screen and (max-width: 1000px){
        width: 80vw;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    background:#F8F8F8;
    border-radius: 10px;
    border:none;
    outline: none;
    margin: 0.75rem 0;
    padding: 1rem;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 30vh;
    background:#F8F8F8;
    border-radius: 10px;
    border:none;
    outline: none;
    margin: 0.5rem 0;
    padding: 1rem;
`;

export const InputButton = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    background: #E7CDC2;
    color:#7E391B;
    border: none;
    border-radius: 10px;
    font-family: 'Crimson Text', serif;
    font-size: 22px;
    cursor: pointer;
    transition: 0.3s ease-in;
`;