import PropTypes from 'prop-types';
import {BasketContainerStyled} from "./containers.styled";

function BasketContainer({children}) {
    return (
        <BasketContainerStyled className='table'>
            {children}
        </BasketContainerStyled>
    );
}

BasketContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default BasketContainer;