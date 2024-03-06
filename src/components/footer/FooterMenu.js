import React from 'react';
import {FooterMenuBox, FooterMenuStyled, FooterMenuTitle} from "./footerMenu.styled";
import PropTypes from "prop-types";
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu({menuTitle,menuItems}) {
    return (
        <FooterMenuBox>
           <FooterMenuTitle>{menuTitle}</FooterMenuTitle>
            <FooterMenuStyled>
                {menuItems.map(({href,text})=>(
                    <FooterMenuItem key={href} href={href} text={text}/>
                ))}
            </FooterMenuStyled>
        </FooterMenuBox>
    );
}
FooterMenu.propTypes = {
    menuTitle:PropTypes.string.isRequired,
    menuItems:PropTypes.arrayOf(PropTypes.shape({
        href:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
    })).isRequired,
};

export default FooterMenu;