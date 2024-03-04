import AppBar from "../components/navbar/AppBar";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";

function Layout(props) {
    return (
        <>
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
        </>
    );
}

export default Layout;