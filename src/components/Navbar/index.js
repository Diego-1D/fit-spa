import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Sidebar from '../Sidebar';
import {
    NavContainer,
    Logo,
    Menu,
    MenuItem,
    ButtonLink,
    Span,
    MenuIcon,
    NavContent,
    CloseIcon
} from './styles';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        setSelected(!isOpen)
    }
    return (
        <NavContainer>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavContent>
                <Logo>FIT<Span>.</Span>SPA</Logo>
                {!selected ?
                    <MenuIcon onClick={toggle}/>
                    :
                    <CloseIcon onClick={toggle} />
                }
                <Menu>
                    <Link to='header' smooth={true} duration={1000}><MenuItem>INICIO</MenuItem></Link>
                    <Link to='services' smooth={true} duration={1000}><MenuItem>SERVIÇOS</MenuItem></Link>
                    <Link to='offer' smooth={true} duration={1000}><MenuItem>OFERTAS</MenuItem></Link>
                    <Link to='about' smooth={true} duration={1000}><MenuItem>SOBRE</MenuItem></Link>
                    <Link to='contact' smooth={true} duration={1000}><MenuItem>CONTATO</MenuItem></Link>
                </Menu>
            </NavContent>
        </NavContainer>
    )
}

export default Navbar;
