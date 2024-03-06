import React from 'react';
import ContentContainer from "../containers/ContentContainer";
import {FullWidthContainer, GridFooterContainer} from "../containers/containers.styled";
import {RightsReserved, RightsReservedLink, RightsReservedLinks} from "./footer.styled";
import {footerConfig,socialLinksConfig} from "./footerConfig";
import FooterMenuList from "./FooterMenuList";
import {FooterSocialContainer, FooterSocialText} from "./footerMenu.styled";
import SocialItems from "./SocialItems";
import Logo from "../logo/Logo";

function Footer(props) {
    return (
        <footer>
            <ContentContainer>
                <GridFooterContainer className='mb-30'>
                    <FooterSocialContainer>
                        <Logo/>
                        <FooterSocialText>Funking is the a popular Ecommerce site. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </FooterSocialText>
                        <SocialItems items={socialLinksConfig}/>
                    </FooterSocialContainer>
                    <FooterMenuList items={footerConfig}/>
                </GridFooterContainer>
            </ContentContainer>
            <FullWidthContainer>
                <ContentContainer className="rights-reserved-container">
                    <RightsReserved>© 2021 Funking - All rights reserved.</RightsReserved>
                    <RightsReservedLinks>
                        <RightsReservedLink to='privacy_policy'>Privacy</RightsReservedLink>
                        <RightsReservedLink to='security'>Security</RightsReservedLink>
                        <RightsReservedLink to='terms'>Terms</RightsReservedLink>
                    </RightsReservedLinks>
                </ContentContainer>
            </FullWidthContainer>
        </footer>
    );
}

export default Footer;