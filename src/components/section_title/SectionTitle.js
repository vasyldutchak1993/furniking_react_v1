import PropTypes from 'prop-types';
import {SectionTitleStyled} from "./sectionTitle.styled";

function SectionTitle({children}) {
    return (
        <SectionTitleStyled>
            {children}
        </SectionTitleStyled>
    );
}

SectionTitle.propTypes = {
    children:PropTypes.node.isRequired
};

export default SectionTitle;