import PropTypes from 'prop-types';
import customerLogo from "../../assets/img/customer.png";
import React from "react";
import {
    CardImageContainer,
    CardOccupation,
    CardText,
    CardUsername,
    CardWrapper,
    ReviewCardContainer
} from "./ReviewCard.styled";

function ReviewCard({id,img,text,userName,occupation}) {
    return (
        <ReviewCardContainer className="slider_content">
            <CardWrapper className="slider_item">
                <CardImageContainer className="slide_item_image_container">
                    <img src={img} alt="Angelina Joly"/>
                </CardImageContainer>
                <CardText className="slide_item_text">{text}</CardText>
                <CardUsername className="slide_item_username">{userName}</CardUsername>
                <CardOccupation className="slide_item_occupation">{occupation}</CardOccupation>
            </CardWrapper>
        </ReviewCardContainer>
    );
}

ReviewCard.propTypes = {
    id:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    userName:PropTypes.string.isRequired,
    occupation:PropTypes.string.isRequired,
};

export default ReviewCard;