import PropTypes from 'prop-types';
import React from "react";
import {FeatureCardStyled, FeatureContentBox, FeatureText, FeatureTitle, ImgContainer} from "./featureCard.styled";

function FeatureCard({img,title,text}) {
    return (
        <FeatureCardStyled>
            <ImgContainer>
                <img src={img} alt={title}/>
            </ImgContainer>
            <FeatureContentBox>
                <FeatureTitle>{title}</FeatureTitle>
                <FeatureText>{text}</FeatureText>
            </FeatureContentBox>
        </FeatureCardStyled>
    );
}

FeatureCard.propTypes = {
    img:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
};

export default FeatureCard;