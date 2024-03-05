import PropTypes from 'prop-types';
import {ContentContainerStyled} from "./containers.styled";

function ContentContainer({children,...allyProps}) {
    return (
        <ContentContainerStyled {...allyProps}>{children}</ContentContainerStyled>
    );
}

ContentContainer.propTypes = {
    children:PropTypes.node.isRequired
};

export default ContentContainer;