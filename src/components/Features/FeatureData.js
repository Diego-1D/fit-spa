import React from "react";
import {
    Card,
    Image,
    AreaText,
    Title,
    Desc
} from './styles';

function FeatureaCard(props) {
    return (
        <Card>
            <Image src={props.image} alt={props.title} />
            <AreaText>
                <Title>{props.title}</Title>
                <Desc>{props.desc}</Desc>
            </AreaText>
        </Card>

    )

}

export default FeatureaCard;