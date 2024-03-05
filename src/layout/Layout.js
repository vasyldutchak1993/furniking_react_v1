import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import PageWrapper from "../components/containers/PageWrapper";
import MainContainer from "../components/containers/MainContainer";
import ContentContainer from "../components/containers/ContentContainer";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout(props) {
    return (
        <PageWrapper>
            <Header/>
            <MainContainer>
                <ContentContainer>
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <Outlet/>
                    </Suspense>
                </ContentContainer>
            </MainContainer>
           <Footer/>
        </PageWrapper>
    );
}

export default Layout;