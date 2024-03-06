import {NavLink} from "react-router-dom";
import navItems from './navbarConfig'
import ContentContainer from "../containers/ContentContainer";
import {MenuLink, NavContainer} from "./appBar.styled";

function AppBar(props) {
    return (
        <NavContainer>
            <ContentContainer className='d-flex-menu'>
                {navItems.map(({href, text, icon: Icon}) =>
                    (<MenuLink to={href} key={href}>{text}</MenuLink>))}
            </ContentContainer>
        </NavContainer>
    );
}

export default AppBar;