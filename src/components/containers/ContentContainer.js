import PropTypes from 'prop-types';
import {ContentContainerStyled} from "./containers.styled";

function ContentContainer({children}) {
    return (
        <ContentContainerStyled>{children}</ContentContainerStyled>
    );
}

ContentContainer.propTypes = {
    children:PropTypes.node.isRequired
};

export default ContentContainer;