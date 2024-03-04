import AppBar from "../components/navbar/AppBar";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import PageWrapper from "../components/containers/PageWrapper";

function Layout(props) {
    return (
        <PageWrapper>
            <header>
                <AppBar/>
            </header>
            <main>
                <Suspense fallback={<h1>Loading....</h1>}>
                        <Outlet/>
                </Suspense>
            </main>
            <footer>
                this is footer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur blanditiis enim fugit id
                minus numquam? Eos excepturi sed tempore.
            </footer>
        </PageWrapper>
    );
}

export default Layout;