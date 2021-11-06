import styled from "styled-components";
import { Link } from 'react-scroll';


export const SidebarContainer = styled.aside`
    position: absolute;
    width: 100%;
    height:10%;
    background-color: #E7CDC2;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    bottom: 100vh;

    @media screen and (max-width: 1100px){
        bottom: ${({isOpen}) => (isOpen ? '41%' : '110vh')};
    } 
`;




export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    text-align: center;
    background-color: #E7CDC2;
    padding: 2rem 0;
`;

export const SidebarLink = styled(Link)`
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    background-color: transparent;
    color: #F8F8F8;
    font-size: 20px;
    font-family: 'Crimson Text', serif;
    cursor: pointer;

    &:hover{
        background-color: #7E391B;
        transition: 0.3s ease-in-out;
    }
`;
