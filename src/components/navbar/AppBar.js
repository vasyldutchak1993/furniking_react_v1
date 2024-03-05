import {NavLink} from "react-router-dom";
import navItems from './navbarConfig'
import ContentContainer from "../containers/ContentContainer";
function AppBar(props) {
    return (
        <ContentContainer>
            {navItems.map(({href, text,icon:Icon}) =>
                (<NavLink to={href} key={href} >{text}</NavLink>))}
        </ContentContainer>
    );
}

export default AppBar;