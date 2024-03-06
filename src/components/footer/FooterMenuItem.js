import PropTypes from 'prop-types';
import {FooterMenuItemStyled} from "./footerMenuItem.styled";

function FooterMenuItem({href,text}) {
    return (
        <li>
            <FooterMenuItemStyled to={href}>{text}</FooterMenuItemStyled>
        </li>
    );
}

FooterMenuItem.propTypes = {
    href:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
};

export default FooterMenuItem;