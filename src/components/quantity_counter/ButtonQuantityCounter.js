import PropTypes from 'prop-types';
import {ButtonQuantityCounterStyled} from "./buttonQuantityCounter.styled";

function ButtonQuantityCounter({onClick,children,...allyProps}) {
    return (
        <ButtonQuantityCounterStyled>
            <button onClick={onClick} {...allyProps}>
                {children}
            </button>
        </ButtonQuantityCounterStyled>
    );
}

ButtonQuantityCounter.propTypes = {
    onClick:PropTypes.func.isRequired,
    children:PropTypes.node
};

export default ButtonQuantityCounter;