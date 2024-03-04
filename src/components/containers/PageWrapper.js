import {PageWrapperStyled} from "./containers.styled";
import PropTypes from "prop-types";

function PageWrapper({children}) {
    return (
        <PageWrapperStyled>{children}</PageWrapperStyled>
    );
}
PageWrapper.propTypes={
    children:PropTypes.node.isRequired
}
export default PageWrapper;