import PropTypes from 'prop-types';
import {RateStar, StarRatingContainer} from "./starRating.styled";

function StarRating({rate}) {
    return (
        <StarRatingContainer>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <RateStar raiting={givenRating} rate={rate} key={index}/>
                );
            })}
        </StarRatingContainer>
    );
}

StarRating.propTypes = {
    rate: PropTypes.number.isRequired
};

export default StarRating;