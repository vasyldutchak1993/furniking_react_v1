import React from 'react';
import ContentContainer from "../containers/ContentContainer";
import {GridFooterContainer} from "../containers/containers.styled";

function Footer(props) {
    return (
        <footer>
            <ContentContainer>
                <GridFooterContainer>
                    <div className="social-container">
                        <div className="logo-container"></div>
                        <div className="social-text">Funking is the a popular Ecommerce site. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </div>
                        <div className="social-links-container">
                            <a href="#" className="social-link">in</a>
                            <a href="#" className="social-link">fe</a>
                            <a href="#" className="social-link">tw</a>
                            <a href="#" className="social-link">pi</a>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-menu-title">help</div>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-menu-title">Store</div>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-menu-title">Supports</div>
                    </div>
                </GridFooterContainer>
            </ContentContainer>
            <ContentContainer className="rights-reserved-container">
                <div>
                    <div className="rights-reserved">© 2021 Funking - All rights reserved.</div>
                    <div className="rights-reserved-links">
                        <a href="#" className="rights-reserved-link">Privacy</a>
                        <a href="#"className="rights-reserved-link">Security</a>
                        <a href="#" className="rights-reserved-link">Terms</a>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
}

export default Footer;