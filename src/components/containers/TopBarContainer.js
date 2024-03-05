import React from 'react';
import {TopBarContainerStyled} from "./containers.styled";
import PropTypes from "prop-types";

function TopBarContainer({children}) {
    return (
        <TopBarContainerStyled>{children}</TopBarContainerStyled>
    );
}
TopBarContainer.propTypes={
    children:PropTypes.node.isRequired
}

export default TopBarContainer;