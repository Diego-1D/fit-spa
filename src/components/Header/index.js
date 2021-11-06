import React from 'react';
import {
    HeaderContainer,
    HeaderHeading,
    HeaderText,
    Span,
    HeaderButton,
} from './styles';

const Header = () => {

    
    return (
        <HeaderContainer id='header'>
            <HeaderHeading>
                <HeaderText>ÀS VEZES NO <Span>SILÊNCIO</Span> DA NOITE, SPA</HeaderText>
                <HeaderButton>Conhecer agora!</HeaderButton>
            </HeaderHeading>
        </HeaderContainer>
    )
}

export default Header;