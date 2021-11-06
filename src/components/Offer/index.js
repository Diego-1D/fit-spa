import React from 'react';

import {
    OfferContainer,
    OfferHeading,
    OfferText,
    OfferSpan,
    OfferButton
} from './styles';

const Offer = () => {
    return (
        <OfferContainer id='offer'>
            <OfferHeading>
                <OfferText>CONHEÇA AS MELHORES FORMAS DE <OfferSpan>RELAXAR</OfferSpan> EM NOSSO SPA</OfferText>
                <OfferButton>Conhecer agora!</OfferButton>
            </OfferHeading>
        </OfferContainer>
    )
}

export default Offer;