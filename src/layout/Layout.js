import AppBar from "../components/navbar/AppBar";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import PageWrapper from "../components/containers/PageWrapper";
import MainContainer from "../components/containers/MainContainer";

function Layout(props) {
    return (
        <PageWrapper>
            <header>
                <AppBar/>
            </header>
            <MainContainer>
                <Suspense fallback={<h1>Loading....</h1>}>
                        <Outlet/>
                </Suspense>
            </MainContainer>
            <footer>
                this is footer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur blanditiis enim fugit id
                minus numquam? Eos excepturi sed tempore.
            </footer>
        </PageWrapper>
    );
}

export default Layout;