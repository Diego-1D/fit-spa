import React from "react";
import {
    FeatureContainer,
    CardArea,
    FeatureTitle
} from './styles';
import FeatureData from './FeatureData';
import Imagem01 from '../../images/Imagem01.svg';
import Imagem02 from '../../images/Imagem02.svg';
import Imagem03 from '../../images/Imagem03.svg';

const Feature = () => {
    return (
        <FeatureContainer id='services'>
            <FeatureTitle>SERVIÇOS</FeatureTitle>
            <CardArea>
                <FeatureData image={Imagem01} title='ESFOLIAÇÃO' desc='O poder do toque cuidadoso e firme me faz sentir dentro do meu corpo. Reconhecer os limites de forma consciente, habitar esse espaço sagrado. Uma forma de cuidado, de terapia.'/>
                <FeatureData image={Imagem03} title='PEDRINHAS' desc='O poder do toque cuidadoso e firme me faz sentir dentro do meu corpo. Reconhecer os limites de forma consciente, habitar esse espaço sagrado. Uma forma de cuidado, de terapia.'/>
                <FeatureData image={Imagem02} title='MASSAGEM' desc='O poder do toque cuidadoso e firme me faz sentir dentro do meu corpo. Reconhecer os limites de forma consciente, habitar esse espaço sagrado. Uma forma de cuidado, de terapia.'/>
            </CardArea>
        </FeatureContainer>
    )
}

export default Feature;