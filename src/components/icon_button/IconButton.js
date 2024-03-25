import PropTypes from 'prop-types';
import {ButtonContainer} from "./iconButton.styled";

function IconButton({children,chip,...allyProps}) {
    return (
        <ButtonContainer {...allyProps}>
            {children}
            {chip && <div className="chip">{chip}</div>}
        </ButtonContainer>
    );
}

IconButton.propTypes = {
    children:PropTypes.node.isRequired,
    chip:PropTypes.string
};

export default IconButton;