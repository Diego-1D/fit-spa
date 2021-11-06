import React from 'react';

import {
    SidebarContainer,
    SidebarMenu,
    SidebarLink,
    CloseIcon,
    Icon
} from './styles';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarMenu>
                <SidebarLink to='header' smooth={true} duration={1000} onClick={toggle}>INICIO</SidebarLink>
                <SidebarLink to='services' smooth={true} duration={1000} onClick={toggle}>SERVIÇOS</SidebarLink>
                <SidebarLink to='offer' smooth={true} duration={1000} onClick={toggle}>OFERTAS</SidebarLink>
                <SidebarLink to='about' smooth={true} duration={1000} onClick={toggle}>SOBRE</SidebarLink>
                <SidebarLink to='contact' smooth={true} duration={1000} onClick={toggle}>CONTATO</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    );
}

export default Sidebar;