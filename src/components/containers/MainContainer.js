import React from 'react';
import {MainContainerStyled} from "./containers.styled";
import PropTypes from "prop-types";

function MainContainer({children}) {
    return (
        <MainContainerStyled>{children}</MainContainerStyled>
    );
}
MainContainer.propTypes={
    children:PropTypes.node.isRequired
}
export default MainContainer;