import {
    TopBarBox,
    TopBarContentContainer,
    TopBarDelimiter,
    TopBarLink,
    TopBarTitle
} from "./topBar.styled";
import TopBarContainer from "../containers/TopBarContainer";
import TopBarDropdown from "../dropwown/TopBarDropdown";

function TopBar(props) {
    return (
        <TopBarContainer>
            <TopBarContentContainer>
                <TopBarTitle>Welcome to our online shop</TopBarTitle>
                <TopBarBox>
                    <TopBarDropdown/>
                    <TopBarDelimiter>|</TopBarDelimiter>
                    <TopBarLink>Login or Sign up</TopBarLink>
                </TopBarBox>
            </TopBarContentContainer>
        </TopBarContainer>
    );
}

export default TopBar;