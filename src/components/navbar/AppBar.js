import navItems from './navbarConfig'
import {NavLink} from "react-router-dom";
function AppBar(props) {
    return (
        <nav>
            {navItems.map(({href, text,icon:Icon}) =>
                (<NavLink to={href} key={href} >{text}</NavLink>))}
        </nav>
    );
}

export default AppBar;