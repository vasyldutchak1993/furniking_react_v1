import TopBar from "../navbar/TopBar";
import AppBar from "../navbar/AppBar";
import ActionsBar from "../navbar/ActionsBar";
import {HeaderContainerStyled} from "../containers/containers.styled";

function Header(props) {
    return (
        <HeaderContainerStyled>
            <TopBar/>
            <ActionsBar/>
            <AppBar/>
        </HeaderContainerStyled>
    );
}

export default Header;