import styled from "styled-components";
import {FiAlignJustify} from "react-icons/fi";
import {FaTimes} from 'react-icons/fa';

export const NavContainer = styled.nav`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E7CDC2;
    position: fixed;

`;

export const NavContent = styled.div`
    position: fixed;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.h2`
    color: #7E391B;
    font-size: 35px;
    font-family: 'Crimson Text', serif;
    font-weight: bold;

    @media screen and (max-width:1100px){
      font-size: 25px;
    }
`;

export const Span = styled.span`
    color: #F8F8F8;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:1100px){
        display: none;
    }
`;

export const MenuItem = styled.div` 
    display: block;
    text-transform: uppercase;
    margin: 0.75rem;
    padding: 0.75rem;
    border-radius: 3px;
    letter-spacing: 1px;
    color: #7E391B;
    font-size: 0.9rem;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: #7E391B;
        color: #FFFFFF;
        cursor: pointer;
    }
   
`;

export const MenuIcon = styled(FiAlignJustify)`
    width: 30px;
    height: 50px;
    display: none;
    color: #7E391B;

    @media screen and (max-width:1100px){
        display: block
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #7E391B;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

