import React from 'react';
import {
    AboutContainer,
    AboutContent,
    AboutImagem,
    AboutText,
    Title,
    Desc,
    AboutButton
} from './styles';

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutContent>
                <AboutImagem />
                <AboutText>
                    <Title>SAIBA MAIS...</Title>
                    <Desc>Os produtos Nativa Spa são perfeitos para quem valoriza experiencias sensoriais com resultados eficazes. 
                        Suas linhas completas entregam tratamentos com ingredientes naturais, ativos poderosos e fragrâncias incríveis, 
                        sofisticadas e marcantes. Suas linhas completas entregam tratamentos com ingredientes naturais, ativos poderosos e fragrâncias incríveis, 
                        sofisticadas e marcantes.
                    </Desc>
                    <AboutButton>Ler mais</AboutButton>
                </AboutText>
            </AboutContent>
        </AboutContainer>
    );

}

export default About;