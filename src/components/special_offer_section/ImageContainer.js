import PropTypes from 'prop-types';
import {ImageContainerStyled} from "./offerCard.styled";

function ImageContainer({img,alt}) {
    return (
        <ImageContainerStyled>
            <img src={img} alt={alt}/>
        </ImageContainerStyled>
    );
}

ImageContainer.propTypes = {
    img:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
};

export default ImageContainer;