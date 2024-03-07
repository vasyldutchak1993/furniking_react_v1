import PropTypes from 'prop-types';
import {
    FurnitureCardStyled,
    FurnitureImageContainer,
    FurnitureLink,
    FurnitureSubTitle,
    FurnitureTitle
} from "./furniture.styled";

function FurnitureCard({img,title,subTitle,id,...allyProps}) {
    return (
        <FurnitureCardStyled {...allyProps}>
            <FurnitureImageContainer>
                <img src={img} alt={title}/>
            </FurnitureImageContainer>
            <FurnitureTitle>{title}</FurnitureTitle>
            <FurnitureSubTitle>{subTitle}</FurnitureSubTitle>
            <FurnitureLink to={`shop/${id}`}>Read more</FurnitureLink>
        </FurnitureCardStyled>
    );
}

FurnitureCard.propTypes = {
    img:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
};

export default FurnitureCard;